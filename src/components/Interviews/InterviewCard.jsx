import React from 'react'
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import {useNavigate} from 'react-router';

const InterviewCard = ({data}) => {
  const navigate = useNavigate()


  return (
    <StyledCard>
        <div><h3>JOB SUMMARY: </h3></div>
        <div>{data.jobSummary?.length>250?`${data.jobSummary.slice(0,150)}...`:data.jobSummary}</div>
        <div><h3>RESUME TEXT: </h3></div>
        <div>{data.resumeText?.length>250?`${data.resumeText.slice(0,150)}...`:data.resumeText}</div>
        <div><h3>STATUS: </h3></div>
        <div>{data.status}</div>
        {data.status == 'COMPLETED' && <button
                    onClick={() => {
                      navigate(`/score/${data.id}`)
                    }}
                  >
                    GET SCORE
                  </button>}
    </StyledCard>
  )
}

export default InterviewCard


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 0.3rem;
  background-color: #c2d4f2;
  width: 28%;
  // height: 40vh;
  border-radius: 1rem;

  button{
    background-color: green;
    color: white;
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    margin-top: 1rem;
  }

`;

//   background-color: #c2d4f2;
