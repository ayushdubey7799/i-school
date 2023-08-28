import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Content from './Content';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, Input } from '@mui/material';
import MyDrawer from '../Drawer';
import { styled } from 'styled-components';
import {createInterview} from '../../../functions/api/createInterview';
import { updateStatus } from '../../../functions/api/updateStatus';
import { getQuestion } from '../../../functions/api/getQuestion';
import { submitAnswer } from '../../../functions/api/submitAnswer';
import { getScore } from '../../../functions/api/getScore';

const OngoingInterview = () => {
  const {interviewId} = useParams();
  const [data,setData] = useState(null);
  const [id,setId] = useState(1);
  const [openDrawer,setOpenDrawer] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [input,setInput] = useState("");
  const [isSubmitted,setIsSubmitted] = useState(false);
  const [score,setScore] = useState({
    scored: 0,
    maxScore: 0
  })
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmitAnswer = async (id,lastQuestion) => {
     if(input.length<10){
      alert("Type atleast 10 characters")
      return;
     }
    setIsLoading(true);
     setId(id+1);
     const res = await submitAnswer(input,id,lastQuestion,interviewId);
     console.log(res);
     setInput("");
     setIsLoading(false);
  }

  const handleSubmitInterview = async (id,lastQuestion) => {
    if(input.length<10){
      alert("Type atleast 10 characters")
      return;
     }
     setIsLoading(true);
     const res = await submitAnswer(input,id,lastQuestion,interviewId);
     console.log(res);
     setInput("");
     const submitRes = await updateStatus(interviewId,"completed");
     console.log(submitRes);
     const scoreRes = await getScore(interviewId);
     console.log(scoreRes);
     setScore({
      scored: scoreRes.data.score,
      maxScore: scoreRes.data.maxScore
     })
     setIsSubmitted(true);
     setIsLoading(false);
  }

  useEffect(() => {
    async function getData(){
      setIsLoading(true);
      const fetchedData = await getQuestion(interviewId);
      console.log(fetchedData);
      setData(fetchedData?.data[0]);
      setIsLoading(false);
    }
    getData();
  },[id]);
  
  return (
    <>
    <IconButton style={{margin: "3rem 3rem"}} onClick={() => setOpenDrawer(true)}><MenuRoundedIcon className='link'/></IconButton>
    <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    {
      isLoading?
         <h1>LOADING...</h1>
         :
      !isSubmitted?
         <StyledInterview>
         <h1>
            INTERVIEW FOR {interviewId}
            </h1>
         {/* <Content data={data}/> */}
         <div>{data?.question}</div>
         <textarea rows={10} value={input} onChange={(e) => handleChange(e)}/>
         {data?.lastQuestion?<button onClick={() => handleSubmitInterview(data.id,data.lastQuestion)}>Submit Interview</button>:<button onClick={() => handleSubmitAnswer(data.id,data.lastQuestion)}>NEXT QUESTION</button>}
         </StyledInterview>
         :
         <h1>Your score is {score.scored} out of {score.maxScore}</h1>

    }
    </>
  )
}

export default OngoingInterview


const StyledInterview = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 3rem auto;
  gap: 2rem;

  button{
    width: 20%;
    height: 3rem;
    background-color: green;
    color: white;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  input{
    height: 7rem;
    width: 100%;
    border-radius: 0.5rem;
  }

  p, h3{
    font-size: 1.5rem;
  }

  textarea{
    padding: 1rem;
    font-size: 1.5rem;
  }
`