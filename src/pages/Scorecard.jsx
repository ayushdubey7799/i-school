import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getScore } from "../functions/api/interview/getScore";
import ScorecardTemplate from "../components/Interviews/CurrentInterview/ScorecardTemplate";
import { styled } from "styled-components";
import Loader from "../components/commonComponents/Loader";
import { Link } from "react-router-dom";
import logo from '../assets/IntelliViewLogo.png'
import { useSelector } from "react-redux";



const Scorecard = () => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [apiCall, setApiCall] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchAgainOption, setFetchAgainOption] = useState(true);
  const { interviewId } = useParams();
  const [trigger, setTrigger] = useState(true);
  const [data, setData] = useState(null);
  const [scoreArray, setScoreArray] = useState([]);
  const [countDown, setCountDown] = useState(5);
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (document.fullscreenElement) document.exitFullscreen();

    if (!accessToken) navigate("/login");
    async function fetchScore(id, accessToken) {
      setIsLoading(true);
      const scoreRes = await getScore(id, accessToken);
      if (!scoreRes) {
        setFetchAgainOption(true);
        setTrigger(false);
        setCountDown(5);
      } else {
        setData(scoreRes);
        setScoreArray(scoreRes.data.questions);
        setFetchAgainOption(false);
      }
      setIsLoading(false);
    }

    if (fetchAgainOption && countDown > 0) {
      let intervalId = setInterval(() => {
        setCountDown((prevCd) => prevCd - 1);
        if (!fetchAgainOption) {
          setCountDown(0);
        }
        if (countDown === 0) {
          clearInterval(intervalId);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }

    if (trigger === true) {
      fetchScore(interviewId, accessToken);
    }

    let timer = localStorage.getItem("time");
    if (timer) {
      timer = JSON.parse(timer);
      let str = `${(60 - timer.minutes) - 1}min-${60 - timer.seconds}sec`;
      setTime(str);
    }

    return () => {
      localStorage.removeItem("time");
    }

  }, [trigger, countDown]);



  return (
    <StyledScorecard>
      {isLoading ? (
        <Loader message="Fetching Your Score... please wait" />
      ) : fetchAgainOption ? (
        <div className="scoreEvalStyle">
          <h1>Score evaluation</h1>
          <button onClick={() => setTrigger(true)} disabled={countDown > 0} className="scoreEvalStyleBtn">{countDown === 0 ? "TRY AGAIN" : `TRY AGAIN IN ${countDown}s`} </button>
        </div>
      ) : (
        <div className="mainContainer">
          <div style={{ height: '3.5rem', position: 'absolute', top: '1rem', left: '3rem' }}>
            <img src={logo} style={{ height: '100%' }} />
          </div>
          <div className="head">
            <h3>SCORECARD</h3>
            <Link to='/dashboard/jobseeker'><button id="another">Back to Dashboard</button></Link>
          </div>

          <div className="summary">
            <h4>Total Questions: {data.data.totalQuestions}</h4>
            <h4>Attempted: {data.data.answeredCnt}</h4>
            {time && <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>Time Taken: {time}</h4>}
            <h4>Your Score: {apiCall ? <Loader1></Loader1> : data.data.score}</h4>
            <h4>Maximum Score: {data.data.maxScore}</h4>
          </div>
          <div>
            <ScorecardTemplate rows={scoreArray} setTrigger={setTrigger} apiCall={apiCall} setApiCall={setApiCall} />
          </div>
          <span className="bottomText">
            Your total score is {data.data.score} out of {data.data.maxScore}
          </span>

        </div>
      )}

    </StyledScorecard>
  );
};

export default Scorecard;

export const StyledScorecard = styled.div`
  display: flex;
  margin: 2rem auto;
  width: 75%;

  .head{
    display: flex;
    justify-content: space-between;
  }

  .summary {
    display: flex;
    justify-content: space-evenly;

    h4 {
      border: 0.075rem solid var(--color);
      padding: 0.75rem;
      border-radius: 0.25rem;
    }
  }

  .scoreEvalStyle  {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .scoreEvalStyleBtn {
    padding: 0.5rem;
    border: none;
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    border-radius: 0.3rem;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
  }

  #another{
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    height: 2.4rem;
    border-radius: 0.4rem;
    font-size: 0.9rem;
    padding: 0.2rem 1.5rem;
    cursor: pointer;
    border: none;
    font-family: var(--font);
    font-weight: 600;
  }

  .bottomText {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 5rem;
    text-align: center;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
    width: 100%;
  }
`;



const Loader1 = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  border: 1.5px solid var(--lightOrange);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

`