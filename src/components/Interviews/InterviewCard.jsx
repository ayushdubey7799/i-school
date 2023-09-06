import React from 'react'
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';



const InterviewCard = ({ data }) => {
  const navigate = useNavigate()


  return (
    <StyledCard>
      <div className='title'>JOB SUMMARY: </div>
      <div >{data.jobSummary?.length > 250 ? `${data.jobSummary.slice(0, 150)}...` : data.jobSummary}</div>
      <div className='title'>RESUME TEXT: </div>
      <div className='text'>{data.resumeText?.length > 250 ? `${data.resumeText.slice(0, 150)}...` : data.resumeText}</div>
      <div className='title'>STATUS: </div>
      <div className='text'>{data.status}</div>
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
  justify-content: center;
  padding: 1rem 1rem;
  gap: 0.8rem;
  background-color: var(--backgroundColor);
  width: 32%;
  // height: 40vh;
  word-wrap: break-word;
  border-radius: 1rem;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.25);
  border: 0.1rem solid var(--color);
  color: rgb(67, 67, 67);

  @media(max-width: 1600px) {
    width: 34%;
  }

  @media(max-width: 1300px) {
    width: 36%;
  }

  @media(max-width: 1050px) {
    width: 38%;
  }

  @media(max-width: 800px) {
    width: 40%;
  }

  @media(max-width: 650px) {
    width: 60%;
  }

  @media(max-width: 500px) {
    width: 70%;
  }

  .title {
  font-size: 1.2rem;
  font-weight: 600;
  }

  .text {
    font-size: 1rem;
  }

  button{
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    height: 3rem;
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
  }

  button:hover {
    background-color: var(--backgroundColor);
    color: var(--color);
    border: 0.1rem solid var(--color);
  }

`;

//   background-color: #c2d4f2;
