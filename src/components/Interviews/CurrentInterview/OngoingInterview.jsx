import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getQuestion } from '../../../functions/api/getQuestion';
import Content from './Content';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, Input } from '@mui/material';
import MyDrawer from '../Drawer';
import { styled } from 'styled-components';

const OngoingInterview = () => {
  const {interviewId} = useParams();
  const [data,setData] = useState(null);
  const [id,setId] = useState(1);
  const [openDrawer,setOpenDrawer] = useState(false);

  
  useEffect(() => {
    let q = getQuestion(id);
    console.log(q);
    setData(q);
  },[id]);
  
  return (
    <>
    <IconButton style={{margin: "3rem 3rem"}} onClick={() => setOpenDrawer(true)}><MenuRoundedIcon className='link'/></IconButton>
    <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
    <StyledInterview>
       <h1>
          INTERVIEW FOR {interviewId}
          </h1>
       <Content data={data}/>
       <textarea rows={10}/>
       {data?.questionId == 10?<button>Submit Interview</button>:<button onClick={() => setId(id+1)}>NEXT QUESTION</button>}
    </StyledInterview>
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