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
    const [fetchError,setFetchError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { interviewId } = useParams();
    const [intervalId,setIntervalId] = useState(null);
    const [data, setData] = useState(null);
    const [scoreArray, setScoreArray] = useState([]);
    const [countDown, setCountDown] = useState(8);
    const [time, setTime] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if(document.fullscreenElement)document.exitFullscreen();

        if (!accessToken) navigate("/login");
        async function fetchScore() {
            setIsLoading(true);
           const scoreRes = await getScore(interviewId, accessToken);
            console.log(scoreRes?.data?.questions[0]);
            if (scoreRes) {
                setData(scoreRes);
                setScoreArray(scoreRes?.data?.questions);
            }
            
            console.log("API called");
        }

        
            let id = setInterval(() => {
               fetchScore();
               setCountDown(countDown => countDown-1);
            }, 15000);
            console.log(id);
            setIntervalId(id);

        let timer = localStorage.getItem("time");
        if (timer) {
            timer = JSON.parse(timer);
            let str = `${(60 - timer.minutes) - 1}min-${60 - timer.seconds}sec`;
            setTime(str);
        }

        return () => {
            localStorage.removeItem("time");
            if(intervalId){
                clearInterval(intervalId);
               setIntervalId(null);
            };
        }

    }, []);
    
    if((scoreArray.length || countDown == 0 )&& intervalId){
        if(!scoreArray.length)setFetchError(true);
        clearInterval(intervalId);
        setIntervalId(null);
        setIsLoading(false);
    };

    console.log(intervalId,countDown,scoreArray);
    if(fetchError)return <h3>Internal Server Error, server taking time to response, come back later</h3>
    return (
        <StyledScorecard>
            {isLoading ? (
                <Loader message="Fetching Your Score... please wait" />
            ) : (
                <div className="mainContainer">
                    <div style={{ height: '3.5rem', position: 'absolute', top: '1rem', left: '3rem' }}>
                        <img src={logo} style={{ height: '100%' }} />
                    </div>
                    <div className="head">
                        <h2>SCORECARD</h2>
                        <Link to='/dashboard/interviews'><button id="another">Back to Dashboard</button></Link>
                    </div>

                    <div className="summary">
                        <h3>Total Questions: {data.data.totalQuestions}</h3>
                        <h3>Attempted: {data.data.answeredCnt}</h3>
                        {time && <h3>Time Taken: {time}</h3>}
                        <h3>Your Score: {data.data.score}</h3>
                        <h3>Maximum Score: {data.data.maxScore}</h3>
                    </div>
                    <div>
                        <ScorecardTemplate rows={scoreArray} />
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

    h3 {
      border: 0.1rem solid var(--color);
      padding: 0.7rem;
      border-radius: 0.2rem;
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
    font-size: 1.2rem;
    padding: 0.2rem 1.5rem;
    cursor: pointer;
    border: none;
  }

  .bottomText {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 5rem;
    text-align: center;
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3rem;
  }
`;

