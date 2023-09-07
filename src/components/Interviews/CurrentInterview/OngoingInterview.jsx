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
import Loader from "../../commonComponents/Loader";

const OngoingInterview = () => {
  const { interviewId } = useParams();
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scoreModal, setScoreModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [input, setInput] = useState("");
  const [started, setStarted] =  useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if(!accessToken)navigate("/login");
  },[])


  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitAnswer = async (id, lastQuestion) => {
    setLoaderMessage("Submitting Answer... Please wait")
    setIsLoading(true);
    setId(id + 1);
    const res = await submitAnswer(input, id, lastQuestion, interviewId);
    console.log(res);
    setInput("");
    setIsLoading(false);
  };

  const handleSubmitInterview = async () => {
    setLoaderMessage("Evaluating the Score... please wait")
    setIsLoading(true);
    const submitRes = await updateStatus(interviewId, "completed");
    console.log(submitRes);
    if (submitRes) setScoreModal(true);
    setIsLoading(false);
  };

  async function getData() {
    setLoaderMessage("Getting new Question... Please wait")
    setIsLoading(true);
    const fetchedData = await getQuestion(interviewId);
    console.log(fetchedData);
    setData(fetchedData?.data[0]);
    setIsLoading(false);
    setStarted(true);
  }


  return (
    <>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledInterview>
          <h3>Interview Id : {interviewId}</h3>
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
                    handleSubmitAnswer(data.id, data.lastQuestion);
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
                    Next Question
                  </button>
                  <button
                    onClick={() => {
                      handleSubmitAnswer(data.id, data.lastQuestion);
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
  margin-top: 8rem;
  gap: 2rem;

  button {
    width: 20%;
    height: 3rem;
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    border-radius: 0.5rem;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
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
    font-size: 1rem;
  }
`;

