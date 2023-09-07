import React, { useState } from "react";
import { styled } from "styled-components";
import { createInterview } from "../../../functions/api/createInterview";
import { updateStatus } from "../../../functions/api/updateStatus";
import { useNavigate } from "react-router";
import Loader from "../../commonComponents/Loader";

const ProfileInterview = () => {
  const [interviewDetails, setInterviewDetails] = useState({
    jobSummary: "developer",
    resumeText: "Programming",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const navigate = useNavigate();

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
    console.log(interviewDetails);
  };

  const handleCreateInterview = async (e) => {
    e.preventDefault();
    setLoaderMessage("Creating Interview");
    setIsLoading(true);
    const ongoing = await createInterview(
      interviewDetails.jobSummary,
      interviewDetails.resumeText
    );
    console.log(ongoing);
    if (ongoing?.data?.id) {
      console.log("data");
      const statusResponse = await updateStatus(ongoing.data.id, "started");
      console.log(statusResponse);
      setIsLoading(false);
      if (statusResponse?.status == "SUCCESS")
        navigate(`/ongoing-interview/${ongoing.data.id}`);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledForm>
          <div>
            <label for="jobDescription">Job Description:</label>
            <br />
            <textarea
              rows={7}
              type="text"
              name="jobDescription"
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label for="resumeText">Resume:</label>
            <br />
            <textarea
              rows={7}
              type="text"
              name="resumeText"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button onClick={(e) => handleCreateInterview(e)}>
              Start Interview
            </button>
          </div>
        </StyledForm>
      )}
    </div>
  );
};

export default ProfileInterview;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;

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
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    height: 4rem;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 500;
    border: none;
    cursor: pointer;

  }
`;


