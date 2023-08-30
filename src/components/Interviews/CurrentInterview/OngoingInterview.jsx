import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Content from "./Content";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Input } from "@mui/material";
import MyDrawer from "../Drawer";
import { styled } from "styled-components";
import { createInterview } from "../../../functions/api/createInterview";
import { updateStatus } from "../../../functions/api/updateStatus";
import { getQuestion } from "../../../functions/api/getQuestion";
import { submitAnswer } from "../../../functions/api/submitAnswer";
import { getScore } from "../../../functions/api/getScore";
import InterviewSubmittedModal from "../../Modals/InterviewSubmittedModal";

const OngoingInterview = () => {
  const { interviewId } = useParams();
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scoreModal, setScoreModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");
  const [started, setStarted] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitAnswer = async (id, lastQuestion) => {
    setIsLoading(true);
    setId(id + 1);
    const res = await submitAnswer(input, id, lastQuestion, interviewId);
    console.log(res);
    setInput("");
    setIsLoading(false);
  };

  const handleSubmitInterview = async () => {
    const submitRes = await updateStatus(interviewId, "completed");
    console.log(submitRes);
    if (submitRes) setScoreModal(true);
    setIsLoading(false);
  };

  async function getData() {
    setIsLoading(true);
    const fetchedData = await getQuestion(interviewId);
    console.log(fetchedData);
    setData(fetchedData?.data[0]);
    setIsLoading(false);
    setStarted(true);
  }

  return (
    <>
      <IconButton
        style={{ margin: "3rem 3rem" }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>
      <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <StyledInterview>
          <h1>INTERVIEW FOR {interviewId}</h1>

          {started ? (
            <>
              <div>{data?.question}</div>
              <textarea
                rows={10}
                value={input}
                onChange={(e) => handleChange(e)}
              />
              {data?.lastQuestion ? (
                <button
                  onClick={() => {
                    handleSubmitAnswer();
                    handleSubmitInterview();
                  }}
                >
                  Submit Interview
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                    
                        handleSubmitAnswer(data.id, data.lastQuestion);
                        getData();
                    
                    }}
                  >
                    NEXT QUESTION
                  </button>
                  <button
                    onClick={() => {
                      handleSubmitAnswer();
                      handleSubmitInterview();
                    }}
                  >
                    Finish Interview
                  </button>
                </>
              )}
              <InterviewSubmittedModal
                scoreModal={scoreModal}
                setScoreModal={setScoreModal}
                interviewId={interviewId}
              />
            </>
          ) : (
            <button onClick={getData}>Start Interview</button>
          )}
        </StyledInterview>
      )}
    </>
  );
};

export default OngoingInterview;

const StyledInterview = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 3rem auto;
  gap: 2rem;

  button {
    width: 20%;
    height: 3rem;
    background-color: green;
    color: white;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  input {
    height: 7rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  p,
  h3 {
    font-size: 1.5rem;
  }

  textarea {
    padding: 1rem;
    font-size: 1.5rem;
  }
`;
