import React, { useEffect, useState } from "react";
import mammoth from 'mammoth/mammoth.browser';
import { styled } from "styled-components";
import { createInterview } from "../../../functions/api/createInterview";
import { updateStatus } from "../../../functions/api/updateStatus";
import { useNavigate } from "react-router";
import Loader from "../../commonComponents/Loader";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import CustomInput from "../../commonComponents/CustomInput";

const ProfileInterview = () => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [interviewDetails, setInterviewDetails] = useState({
    jobSummary: "",
    resumeText: "",
  });


  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const navigate = useNavigate();
  const [jd, setJd] = useState();
  const [resume, setResume] = useState();



  useEffect(() => {
    if (resume) {
      if (resume.type === 'text/plain') {
        handleTxtFile(resume, 'resume');
      } else if (resume.type === 'application/msword' || resume.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        handleDocxFile(resume, 'resume');
      } else {
        console.log('Unsupported file type');
      }
    }
  }, [resume]);


  useEffect(() => {
    if (jd) {
      if (jd.type === 'text/plain') {
        handleTxtFile(jd, 'jd');
      } else if (jd.type === 'application/msword' || jd.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        handleDocxFile(jd, 'jd');
      } else {
        console.log('Unsupported file type');
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

    if (interviewDetails.jobSummary.length < 30 && interviewDetails.resumeText.length < 30) {
      toast.warning('Too short inputs, it should be minimum 30 chars.');
      setIsLoading(false);
      setLoaderMessage('');
      return;
    } else if (interviewDetails.jobSummary.length < 30) {
      toast.warning('Too short JobSummary, it should be minimum 30 chars.');
      setIsLoading(false);
      setLoaderMessage('');
      return;
    } else if (interviewDetails.resumeText.length < 30) {
      toast.warning('Too short ResumeText, it should be minimum 30 chars.');
      setIsLoading(false);
      setLoaderMessage('');
      return;
    }

    const ongoing = await createInterview(
      interviewDetails.jobSummary.trim(),
      interviewDetails.resumeText.trim(),
      accessToken
    );

    console.log(ongoing);
    if (ongoing?.data?.id) {
      console.log("data");
      const statusResponse = await updateStatus(ongoing.data.id, "started", accessToken);
      console.log(statusResponse);
      setIsLoading(false);
      if (statusResponse?.status == "SUCCESS")
        navigate(`/ongoing-interview/${ongoing.data.id}`);
    }
  };

  const handleJd = (file) => {
    setJd(file);
  }

  const handleResume = (file) => {
    setResume(file);
  }


  // reading the uploaded .txt, .doc, .docx file

  const handleTxtFile = (file, type) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      if (type === 'jd') {
        setInterviewDetails({ ...interviewDetails, jobSummary: fileContent });
      } else if (type === 'resume') {
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
      if (type === 'jd') {
        setInterviewDetails({ ...interviewDetails, jobSummary: result.value });
      } else if (type === 'resume') {
        setInterviewDetails({ ...interviewDetails, resumeText: result.value });
      }
    };
    reader.readAsArrayBuffer(file);
  };






  return (
    <div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledForm>
          <div className="inputCont">
            <div>
              <label for="jobDescription">Job Description:</label>
              <br />
              <textarea
                rows={7}
                type="text"
                value={interviewDetails.jobSummary}
                name="jobSummary"
                onChange={handleInputChange}
              />
            </div>

            <CustomInput
              accept={".doc, .docx, .txt"}
              id='jdInput'
              fileHandleFnc={handleJd}
              text={"Upload JD"}
            />
          </div>

          <div className="inputCont">
            <div>
              <label for="resumeText">Resume:</label>
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
              accept={".doc, .docx, .txt"}
              id='resumeInput'
              fileHandleFnc={handleResume}
              text={"Upload Resume"}
            />
          </div>

          <button onClick={(e) => handleCreateInterview(e)}>
            Start Interview
          </button>
        </StyledForm>
      )
      }
    </div >
  );
};



export default ProfileInterview;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

  div {
    width: 100%;
  }

  label {
    font-size: 1.2rem;
    font-weight: 600;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
    font-size: 1rem;
  }

  option {
    height: 1.5rem;
  }

  button {
    background-color: var(--backgroundColor);
    color: var(--color);
    padding: 1rem 2rem;
    border: 0.1rem solid var(--lightOrange);
    border-radius: 0.4rem;
    // width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
  }

  .inputCont {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }

`;


