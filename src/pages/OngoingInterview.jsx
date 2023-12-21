import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { createInterview } from "../functions/api/interview/createInterview";
import { updateStatus } from "../functions/api/interview/updateStatus";
import { getQuestion } from "../functions/api/interview/getQuestion";
import { submitAnswer } from "../functions/api/interview/submitAnswer";
import { getScore } from "../functions/api/interview/getScore";
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
import { codingQuestionFormat } from "../utils/codingQuestionFormat";
import CodingQueInterface from '../components/Interviews/SeekerDashboard/CodingQueInterface'
import CommonButton from "../components/Interviews/SeekerDashboard/seekerCommonComponents/CommonButton";
import InterviewTerms from "../components/Interviews/SeekerDashboard/seekerCommonComponents/InterviewTerms";
import McqQueInterface from "../components/Interviews/SeekerDashboard/McqQueInterface";


const OngoingInterview = ({ start, handleStart }) => {
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const { interviewId } = useParams();
  const [data, setData] = useState(null);
  const [id, setId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [input, setInput] = useState("");
  const [audioData, setAudioData] = useState(null);

  const [agreed, setAgreed] = useState(false);

  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState(false);

  const navigate = useNavigate();

  // TIMER CODE
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
  //TIMER CODE ENDS
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
    if (submitRes) {
      navigate(`/score/${interviewId}`)
    }
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
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledInterview>
          <div className="head">
            <img src={logo} className="logo" />
            <span className="title">Interview Id : {interviewId}</span>

            <div className="topLastBox">
              <Timer minutes={minutes} seconds={seconds} />
              {(start && data?.questionType == 'coding') &&
                <CommonButton text='Submit' func={() => {
                  handleSubmitAnswer(data.id, data.lastQuestion);
                  handleSubmitInterview();
                }} />}
            </div>
          </div>

          {start ? (
            <>
              {data?.questionType == "coding" ? (
                <CodingQueInterface
                  queComp={<div dangerouslySetInnerHTML={{ __html: codingQuestionFormat(data?.question) }} className="questionText"></div>}
                  codeEditorComp={<CodeEditor input={input} setInput={setInput} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />}
                  theme={theme}
                />
              ) : data?.questionType === "mcq" ? (
                <McqQueInterface
                  queComp={<div dangerouslySetInnerHTML={{ __html: codingQuestionFormat(data?.question) }} className="questionText"></div>}
                  options={data?.mcqOptions}
                  value={input}
                  setValue={setInput}
                />
              ) : (
                <div className="subjectiveBox">
                  <div dangerouslySetInnerHTML={{ __html: codingQuestionFormat(data?.question) }} className="questionText questionText2"></div>
                  <textarea
                    // onPaste={handlePaste}
                    // onCut={handleCutCopy}
                    // onCopy={handleCutCopy}
                    rows={10}
                    value={input}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              )}

              {(data?.lastQuestion && data?.questionType !== 'coding') ? (
                <CommonButton text='Submit Interview' func={() => {
                  handleSubmitAnswer(data.id, data.lastQuestion);
                  handleSubmitInterview();
                }} />

              ) : (data?.questionType !== 'coding') ? (
                <>
                  <div className="btnBox1">
                    <CommonButton
                      text='Finish Interview'
                      func={async () => {
                        await handleSubmitAnswer(data.id, data.lastQuestion);
                        await handleSubmitInterview();
                      }}
                      width='15%'
                    />

                    {data?.questionType == 'general' &&
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
                                  <div className="btn1">
                                    <img
                                      onClick={startRecording}
                                      className="btnImg"
                                      src={startRecBtn}
                                    />
                                    <span className="btn1Text">Start recording your answer</span>
                                  </div>

                                  <div className="btn2">
                                    <img
                                      onClick={stopRecording}
                                      className="btnImg"
                                      src={stopRecBtn}
                                    />
                                    <span className="btn2Text">Stop recording</span>
                                  </div>

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
                    }

                    <CommonButton
                      text='Next Question'
                      func={() => {
                        handleSubmitAnswer(data.id, data.lastQuestion);
                        getData(false);
                      }}
                      width='15%'
                      className="btn"
                    />


                  </div>
                </>
              )
                : <span></span>}
            </>
          ) : (
            <div className="startInterviewBox">
              <InterviewTerms />
              <label><input type="checkbox" onClick={() => setAgreed(!agreed)} className="checkbox" />I agree</label>
              <CommonButton text='Start Interview' func={() => getData(true)} disabled={!agreed} />
            </div>
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
  align-items: center;
  width: 95%;
  margin: 0rem auto;
  gap: 0.5rem;

  label {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .checkbox {
    width: 1rem;
    height: 1rem;
  }

  .startInterviewBox {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .questionText {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .subjectiveBox {
    margin-top: 3rem;
    width: 100%;

    .questionText2 {
      margin-bottom: 1.5rem;
    }
  }

  .codingMainBox {
    display: flex;
    width: 100%;
  }

  .statusIcon {
    width: 1.5rem;
  }

  .timer {
    width: 3rem;
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
    padding: 0.75rem 0 0.25rem 0;
    width: 100%;
    align-items: center;
    height: 2.5rem;

    .topLastBox {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      height: 100%;
    }

    .title {
      font-size: 0.9rem;
      font-weight: 600;
    }
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


  .btn1, .btn2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .btn1Text, .btn2Text {
    font-size: 0.65rem;
    font-weight: 400;
    position: absolute;
    top: 2.5rem;
    display: none;
    width: 9rem;
  }

  .btn1:hover {
    
    .btn1Text {
      display: flex;
    }
  }

  .btn2:hover {
    
    .btn2Text {
      display: flex;
      left: -1.3rem;
    }
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
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
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