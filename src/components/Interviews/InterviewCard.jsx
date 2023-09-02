import React from 'react'
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import {useNavigate} from 'react-router';

const titleStyle = {
  fontSize: "1.2rem",
  fontWeight: '600'
}

const textStyle = {
  fontSize: "1rem"
}


const InterviewCard = ({data}) => {
  const navigate = useNavigate()


  return (
    <StyledCard>
        <div><span style={titleStyle}>JOB SUMMARY: </span></div>
        <div style={textStyle}>{data.jobSummary?.length>250?`${data.jobSummary.slice(0,150)}...`:data.jobSummary}</div>
        <div><span style={titleStyle}>RESUME TEXT: </span></div>
        <div style={textStyle}>{data.resumeText?.length>250?`${data.resumeText.slice(0,150)}...`:data.resumeText}</div>
        <div><span style={titleStyle}>STATUS: </span></div>
        <div style={textStyle}>{data.status}</div>
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
  gap: 0.5rem;
  background-color: var(--lightBlue);
  width: 28%;
  // height: 40vh;
  border-radius: 1rem;
  word-wrap: break-word;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  color: rgb(67, 67, 67);

  button{
    background-color: var(--backgroundColor);
    color: var(--color);
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: 600;
  }

`;

//   background-color: #c2d4f2;
