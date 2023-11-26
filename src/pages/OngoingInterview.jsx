import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import Content from "../components/Interviews/CurrentInterview/Content";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Input } from "@mui/material";
import MyDrawer from "../components/Interviews/Drawer";
import { styled } from "styled-components";
import { createInterview } from "../functions/api/interview/createInterview";
import { updateStatus } from "../functions/api/interview/updateStatus";
import { getQuestion } from "../functions/api/interview/getQuestion";
import { submitAnswer } from "../functions/api/interview/submitAnswer";
import { getScore } from "../functions/api/interview/getScore";
import InterviewSubmittedModal from "../components/Modals/InterviewSubmittedModal";
import Loader from "../components/commonComponents/Loader";
import Timer from "../components/Interviews/CurrentInterview/Timer";
import logo from "../assets/IntelliViewLogo.png";
import { submitAnswerWithFile } from "../functions/api/interview/submitAnswerWithFile";
import { ReactMediaRecorder } from "react-media-recorder";
import startRecBtn from "../assets/icons/startRecBtn.png";
import stopRecBtn from "../assets/icons/stopRecBtn.png";
import idle from "../assets/icons/recStatusIdle.png";
import recording from "../assets/icons/recStatusRecording.png";
import stopped from "../assets/icons/recStatusStopped.png";
import CodeEditor from "./CodeEditor";

const OngoingInterview = ({ start, handleStart }) => {
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const { interviewId } = useParams();
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [scoreModal, setScoreModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [input, setInput] = useState("");
  const [audioData, setAudioData] = useState(null);

  const [language, setLanguage] = useState("javascript");

  const navigate = useNavigate();
  
  ////////////////////////////////////////////////// TIMER CODE
  const initialMinutes = 60;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setIsRunning(false);
          clearInterval(timer);
        } else {
          if (seconds === 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds - 1);
          }
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(initialMinutes);
    setSeconds(0);
  };
  /////////////////////////////////////////////// TIMER CODE ENDS
  useEffect(() => {
    if (!accessToken) navigate("/login");
  }, []);

  const handleStop = (blobUrl, blob) => {
    setAudioData(blob);
    console.log(blob);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitAnswer = async (id, lastQuestion) => {
    setLoaderMessage("Submitting Answer... please wait");
    setIsLoading(true);
    setId(id + 1);
    if (audioData) {
      console.log("Working");
      const formData = new FormData();
      formData.append("file", audioData, "recorded_audio.wav");
      formData.append("dto", JSON.stringify({ id, lastQuestion }));
      const res = await submitAnswerWithFile(
        formData,
        id,
        lastQuestion,
        interviewId,
        accessToken
      );
      if (res) setAudioData(null);
      console.log("File uploaded --> ", res);
    } else {
      const res = await submitAnswer(
        input,
        id,
        lastQuestion,
        interviewId,
        accessToken
      );
      console.log(res);
      setInput("");
    }
    setIsLoading(false);
  };

  const handleSubmitInterview = async () => {
    setLoaderMessage("Evaluating the Score... please wait");
    setIsLoading(true);
    const submitRes = await updateStatus(interviewId, "completed", accessToken);
    console.log(submitRes);
    if (submitRes) setScoreModal(true);
    setIsLoading(false);
    localStorage.setItem("time", JSON.stringify({ minutes, seconds }));
    stopTimer();
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const handleCutCopy = (e) => {
    e.preventDefault();
  };

  async function getData(flag) {
    if (flag) document.documentElement.requestFullscreen();

    setLoaderMessage("Getting new Question... please wait");
    setIsLoading(true);
    const fetchedData = await getQuestion(interviewId, accessToken);
    console.log(fetchedData);
    setData(fetchedData?.data[0]);
    setIsLoading(false);
    setInput("");
    handleStart();
    startTimer();
  }


  return (
    <>
      <div
        style={{
          height: "3.5rem",
          position: "absolute",
          top: "1rem",
          left: "3rem",
        }}
      >
        <img src={logo} style={{ height: "100%" }} />
      </div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledInterview>
          <div className="head">
            <h3>Interview Id : {interviewId}</h3>
            <Timer minutes={minutes} seconds={seconds} />
          </div>

          {start ? (
            <>
              <div>{data?.question}</div>
              {data.questionType == "Coding" ? (
               <CodeEditor input={input} setInput={setInput} language={language} setLanguage={setLanguage}/>
              ) : (
                <textarea
                  // onPaste={handlePaste}
                  // onCut={handleCutCopy}
                  // onCopy={handleCutCopy}
                  rows={10}
                  value={input}
                  onChange={(e) => handleChange(e)}
                />
              )}
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
                  <div className="btnBox1">
                    <button
                      onClick={async () => {
                        await handleSubmitAnswer(data.id, data.lastQuestion);
                        await handleSubmitInterview();
                      }}
                      className="btn"
                    >
                      Finish Interview
                    </button>

                    <div className="btnBox2">
                      <ReactMediaRecorder
                        audio
                        onStop={handleStop}
                        render={({
                          status,
                          startRecording,
                          stopRecording,
                          mediaBlobUrl,
                        }) => {
                          return (
                            <AudioBox>
                              <div className="btnImgBox">
                                <img
                                  onClick={startRecording}
                                  className="btnImg"
                                  src={startRecBtn}
                                />
                                <img
                                  onClick={stopRecording}
                                  className="btnImg"
                                  src={stopRecBtn}
                                />
                              </div>
                              <audio src={mediaBlobUrl} controls />
                              <span id="status1">
                                {status === "idle" && (
                                  <img
                                    id="idle"
                                    src={idle}
                                    className="statusIcon"
                                  />
                                )}
                                {status === "recording" && (
                                  <img
                                    id="rec"
                                    src={recording}
                                    className="statusIcon"
                                  />
                                )}
                                {status === "stopped" && (
                                  <img
                                    id="stop"
                                    src={stopped}
                                    className="statusIcon"
                                  />
                                )}
                                <span id="status2">{status}</span>
                              </span>
                            </AudioBox>
                          );
                        }}
                      />
                    </div>

                    <button
                      onClick={() => {
                        handleSubmitAnswer(data.id, data.lastQuestion);
                        getData(false);
                      }}
                      className="btn"
                    >
                      Next Question
                    </button>
                  </div>
                </>
              )}
              <InterviewSubmittedModal
                scoreModal={scoreModal}
                setScoreModal={setScoreModal}
                interviewId={interviewId}
              />
            </>
          ) : (
            <button onClick={() => getData(true)}>Start Interview</button>
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

  .statusIcon {
    width: 1.5rem;
  }

  .timer {
    width: 3rem;
    // height: 3rem;
    background-color: var(--white);
    color: var(--color);
    border: 0.1rem solid var(--lightOrange);
    border-radius: 0.5rem;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
  }

  .head {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    width: 100%;
    align-items: center;
  }

  .btnBox1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }

  .btnBox2 {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

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

  .btn {
    height: 3rem;
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    border-radius: 0.5rem;
    font-size: 0.9rem;
    border: none;
    cursor: pointer;
  }

  .btnImg {
    width: 2rem;
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

const AudioBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  .btnImgBox {
    display: flex;
    gap: 2rem;
  }

  #status2 {
    font-size: 0.6rem;
    display: none;
  }

  #status1:hover {
    #status2 {
      display: block;
    }
  }
`;

