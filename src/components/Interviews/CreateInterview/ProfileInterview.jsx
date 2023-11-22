import React, { useEffect, useState, useRef } from "react";
import mammoth from "mammoth/mammoth.browser";
import { styled } from "styled-components";
import { createInterview } from "../../../functions/api/interview/createInterview";
import { updateStatus } from "../../../functions/api/interview/updateStatus";
import { useNavigate } from "react-router";
import Loader from "../../commonComponents/Loader";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import CustomInput from "../../commonComponents/CustomInput";
import { pdfjs } from 'react-pdf';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;



const ProfileInterview = () => {
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [interviewDetails, setInterviewDetails] = useState({
    jobSummary: "",
    resumeText: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const navigate = useNavigate();
  const [jd, setJd] = useState();
  const [resume, setResume] = useState();

  // Use a ref to store the Quill editor instance
  const quillRef1 = useRef();
  const quillRef2 = useRef();

  useEffect(() => {
    if (resume) {
      if (resume.type === "text/plain") {
        handleTxtFile(resume, "resume");
      } else if (
        resume.type === "application/msword" ||
        resume.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        handleDocxFile(resume, "resume");
      } else if (resume.type === "application/pdf") {
        handlePdfFile(resume, "resume");
      } else {
        console.log("Unsupported file type");
      }
    }
  }, [resume]);

  useEffect(() => {
    if (jd) {
      console.log(jd.type);

      if (jd.type === "text/plain") {
        handleTxtFile(jd, "jd");
      } else if (
        jd.type === "application/msword" ||
        jd.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        handleDocxFile(jd, "jd");
      } else if (jd.type === "application/pdf") {
        handlePdfFile(jd, "jd");
      } else {
        console.log("Unsupported file type");
      }
    }
  }, [jd]);

  const handleInputChange = () => {
    if (quillRef1.current) {
      const val = quillRef1.current.getEditor().root.innerHTML;
      console.log(val);

      setInterviewDetails({ ...interviewDetails, jobSummary: val });

      console.log(interviewDetails.jobSummary, interviewDetails.resumeText);
    }
  };

  const handleInputChange2 = () => {
    if (quillRef2.current) {
      const val = quillRef2.current.getEditor().root.innerHTML;
      console.log(val);

      setInterviewDetails({ ...interviewDetails, resumeText: val });

      console.log(interviewDetails.jobSummary, interviewDetails.resumeText);
    }
  };

  const handleCreateInterview = async (e) => {
    e.preventDefault();
    setLoaderMessage("Creating Interview... please wait");
    setIsLoading(true);

    if (
      interviewDetails.jobSummary.length < 30 &&
      interviewDetails.resumeText.length < 30
    ) {
      toast.warning("Too short inputs, it should be minimum 30 chars.");
      setIsLoading(false);
      setLoaderMessage("");
      return;
    } else if (interviewDetails.jobSummary.length < 30) {
      toast.warning("Too short JobSummary, it should be minimum 30 chars.");
      setIsLoading(false);
      setLoaderMessage("");
      return;
    } else if (interviewDetails.resumeText.length < 30) {
      toast.warning("Too short ResumeText, it should be minimum 30 chars.");
      setIsLoading(false);
      setLoaderMessage("");
      return;
    }

    const ongoing = await createInterview(
      interviewDetails.jobSummary.trim(),
      interviewDetails.resumeText.trim(),
      accessToken
    );

    console.log(ongoing);
    if (ongoing?.data?.id) {
      localStorage.setItem("currentInterview", "profile");
      navigate(`/create-interview/${ongoing.data.id}`)
    }
  };

  const handleJd = (file) => {
    setJd(file);
  };

  const handleResume = (file) => {
    setResume(file);
  };

  // reading the uploaded .txt, .doc, .docx file

  const handleTxtFile = (file, type) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      if (type === "jd") {
        setInterviewDetails({ ...interviewDetails, jobSummary: fileContent });
      } else if (type === "resume") {
        setInterviewDetails({ ...interviewDetails, resumeText: fileContent });
      }
    };
    reader.readAsText(file);
  };

  const handleDocxFile = (file, type) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const result = await mammoth.extractRawText({ arrayBuffer: arrayBuffer });
      if (type === "jd") {
        setInterviewDetails({ ...interviewDetails, jobSummary: result.value });
      } else if (type === "resume") {
        setInterviewDetails({ ...interviewDetails, resumeText: result.value });
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handlePdfFile = async (file, type) => {

    if (file) {
      const pdfData = await file.arrayBuffer();

      // Initialize PDF.js
      const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
      const textArray = [];

      for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const textContent = await page.getTextContent();

        // Extract text from the page
        const pageText = textContent.items.map((item) => item.str).join(' ');
        textArray.push(pageText);
      }

      const fullText = textArray.join('\n');
      if (type === "jd") {
        setInterviewDetails({ ...interviewDetails, jobSummary: fullText });
      } else if (type === "resume") {
        setInterviewDetails({ ...interviewDetails, resumeText: fullText });
      }
    }

  }

  return (
    <div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledForm>
          <div className="inputCont">
            <div className="box1">
              <label for="jobDescription" className="label">Job Description</label>
              <div className="textEditorBox">
                <ReactQuill theme="snow" className="textEditor" value={interviewDetails.jobSummary} name="jobSummary" onChange={handleInputChange} ref={quillRef1} />
              </div>
            </div>
            <CustomInput
              accept={".doc, .docx, .txt, .pdf"}
              id="jdInput"
              fileHandleFnc={handleJd}
              text={"Upload JD"}
            />
          </div>

          <div className="inputCont">
            <div className="box2">
              <label for="resumeText" className="label">Resume</label>
              <div className="textEditorBox">
                <ReactQuill theme="snow" className="textEditor" value={interviewDetails.resumeText} name="resumeText" onChange={handleInputChange2} ref={quillRef2} />
              </div>
            </div>

            <CustomInput
              accept={".doc, .docx, .txt, .pdf"}
              id="resumeInput"
              fileHandleFnc={handleResume}
              text={"Upload Resume"}
            />
          </div>

          <button onClick={(e) => handleCreateInterview(e)}>
            Start Interview
          </button>
        </StyledForm>
      )}
    </div>
  );
};

export default ProfileInterview;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50rem;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

  .textEditor {
    background-color: var(--white);
}

  div {
    width: 100%;
  }

  .label {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: var(--white);
    padding: 0 0.5rem;
    display: block;
  }

  option {
    height: 1.5rem;
  }

  button {
    background-color: var(--backgroundColor);
    color: var(--color);
    padding: 0.7rem 1rem;
    border: 0.1rem solid var(--lightOrange);
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }

  .inputCont {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }

  @media (max-width: 500px) {
    width: 40rem;
  }

  .box1, .box2 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }
`;
