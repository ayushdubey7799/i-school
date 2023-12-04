import React, { useEffect, useState } from "react";
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

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;



const ProfileInterview = () => {
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [interviewDetails, setInterviewDetails] = useState({
    jobSummary: "",
    resumeText: "",
  });
  const [testType, setTestType] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const navigate = useNavigate();
  const [jd, setJd] = useState();
  const [resume, setResume] = useState();

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

  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);

    switch (name) {
      case "jobSummary":
        setInterviewDetails({ ...interviewDetails, jobSummary: val });
        break;
      case "resumeText":
        setInterviewDetails({ ...interviewDetails, resumeText: val });
        break;
      default:
        console.log("Hello there!");
    }
    console.log(interviewDetails.jobSummary, interviewDetails.resumeText);
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
    const payload = {
      difficultyLevel: difficultyLevel,
      testType: testType,
      jobSummary: interviewDetails.jobSummary.trim(),
      resumeText: interviewDetails.resumeText.trim(),
    }

    console.log('Payload', payload);

    const ongoing = await createInterview(
      payload,
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
              <br />
              <textarea
                rows={7}
                type="text"
                value={interviewDetails.jobSummary}
                name="jobSummary"
                onChange={handleInputChange}
              />
            </div>
            {/* <PdfTextExtractor/> */}
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
              <br />
              <textarea
                rows={7}
                type="text"
                value={interviewDetails.resumeText}
                name="resumeText"
                onChange={handleInputChange}
              />
            </div>

            <CustomInput
              accept={".doc, .docx, .txt, .pdf"}
              id="resumeInput"
              fileHandleFnc={handleResume}
              text={"Upload Resume"}
            />
          </div>

          <div className="inputBox">
            <span className="title">Interview Type</span>
            <div className="childInputBox">
              <label className="label1">
                <input
                  type="radio"
                  value="MCQs"
                  checked={testType === 'MCQs'}
                  onChange={() => setTestType('MCQs')}
                />
                <span>MCQs</span>
              </label>
              <label className="label1">
                <input
                  type="radio"
                  value="Subjective"
                  checked={testType === 'Subjective'}
                  onChange={() => setTestType('Subjective')}
                />
                <span>Subjective</span>
              </label>
              <label className="label1">
                <input
                  type="radio"
                  value="coding"
                  checked={testType === 'coding'}
                  onChange={() => setTestType('coding')}
                />
                <span>Coding</span>
              </label>
              <label className="label1">
                <input
                  type="radio"
                  value="General"
                  checked={testType === 'General'}
                  onChange={() => setTestType('General')}
                />
                <span>General (Includes all types of Que)</span>
              </label>
            </div>
          </div>

          <div className="inputBox">
            <div className="childInputBox">
              <span className="title">Difficulty Level</span>
              <label className="label1">
                <input
                  type="radio"
                  value="easy"
                  checked={difficultyLevel === 'easy'}
                  onChange={() => setDifficultyLevel('easy')}
                />
                <span>Easy</span>
              </label>
              <label className="label1">
                <input
                  type="radio"
                  value="moderate"
                  checked={difficultyLevel === 'moderate'}
                  onChange={() => setDifficultyLevel('moderate')}
                />
                <span>Moderate</span>
              </label>
              <label className="label1">
                <input
                  type="radio"
                  value="difficult"
                  checked={difficultyLevel === 'difficult'}
                  onChange={() => setDifficultyLevel('difficult')}
                />
                <span>Difficult</span>
              </label>
            </div>
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

  div {
    width: 100%;
  }

  .inputCont {
    position: relative;
  }

  .label {
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    top: 0.8rem;
    left: 1rem;
    background-color: var(--white);
    color: #757575;
    padding: 0 0.5rem;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.5rem;
    border: 0.08rem solid #C4C4C4;
    border-radius: 0.5rem;
    padding: 0.75rem 0.5rem;
    font-size: 1rem;
    outline-color: var(--lightOrange);
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




  .inputBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border: 0.08rem solid #C4C4C4;
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    position: relative;
    box-sizing: border-box;
  }

  .childInputBox {
    display: flex;
    gap: 0.5rem;
    flex-flow: row wrap;

  }

  .title {
    font-size: 1rem;
    font-weight: 500;
    position: absolute;
    top: -0.8rem;
    background-color: var(--white);
    padding: 0 0.3rem;
  }



  .label1 {
    display: flex;
    cursor: pointer;
    font-weight: 500;
    position: relative;
    margin-bottom: 0rem;
  
    input {
      position: absolute;
      left: -9999px;
      &:checked + span {
        background-color: #f0f0f6;
        &:before {
          box-shadow: inset 0 0 0 0.3rem var(--lightOrange);
        }
      }
    }
    span {
      display: flex;
      align-items: center;
      font-size: 0.9rem;
      padding: 0.3rem 0.75rem 0.3rem 0.3rem;
      border-radius: 99rem; // or something higher...
      transition: 0.25s ease;
      &:hover {
        background-color: mix(#fff, var(--lightOrange), 84%);
      }
      &:before {
        display: flex;
        flex-shrink: 0;
        content: "";
        background-color: #fff;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: 0.375em;
        transition: 0.25s ease;
        box-shadow: inset 0 0 0 0.125em var(--lightOrange);
      }
    }
  }
`;