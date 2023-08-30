import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getScore } from '../../../functions/api/getScore';
import ScorecardTemplate from './ScorecardTemplate';
import { styled } from 'styled-components';

const Scorecard = () => {
   const [isLoading,setIsLoading] = useState(true);
   const [fetchAgainOption,setFetchAgainOption] = useState(true);
   const interviewId = useParams();
   const [trigger,setTrigger] = useState(false);
   const [data,setData] = useState(null);
   const [scoreArray,setScoreArray] = useState([]);

  useEffect(() => { 
    async function fetchScore(id){
        
       setIsLoading(true);
       const scoreRes = await getScore(id);
       console.log(scoreRes?.data?.questions[0]);
       if(!scoreRes){
         setFetchAgainOption(true);
       }
       else{
        setData(scoreRes);
        setScoreArray(scoreRes.data.questions)
        setFetchAgainOption(false)
       }
       setIsLoading(false);
    }
    fetchScore(interviewId);
  },[trigger])
console.log(scoreArray)

  return (
    <StyledScorecard>
        {
            isLoading?
               <h1>Loading...</h1>
               :
               fetchAgainOption?
               <div>
                <h1>Something went wrong</h1>
                 <button onClick={() => setTrigger(!trigger)}>TRY AGAIN</button>
                </div>
                :
                <div>                
                <h1>SCORECARD</h1>
                <div className='summary'>
                    <h3>Total Questions: {data.data.totalQuestions}</h3>
                    <h3>Attempted: {data.data.answeredCnt}</h3>
                    <h3>Your Score: {data.data.score}</h3>
                    <h3>Maximum Score: {data.data.maxScore}</h3>
                </div>
                            <div>
                               <ScorecardTemplate rows={scoreArray}/>
                            </div>
                <h1>Your total score is {data.data.score} out of {data.data.maxScore}</h1>
                </div>
                   
        }
    </StyledScorecard>
  )
}

export default Scorecard

export const StyledScorecard = styled.div`
 display: flex;
 margin: 2rem auto;
 width: 75%;

 .summary{
   display: flex;
   justify-content: space-evenly;

   h3{
    border: 1px solid green;
    padding: 0.7rem;
   }
 }

`

