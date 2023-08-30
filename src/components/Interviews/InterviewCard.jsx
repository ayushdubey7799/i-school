import React from 'react'
import { styled } from 'styled-components'


const InterviewCard = ({data}) => {
  return (
    <StyledCard>
        <div>PROFILE ID:{data.profileId}</div>
        <div>STATUS: {data.status}</div>
    </StyledCard>
  )
}

export default InterviewCard


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 2rem;
  background-color: #c2d4f2;
  width: 28%;
  height: 40vh;
  border-radius: 1rem;
`;

//   background-color: #c2d4f2;
