import React from 'react'
import { styled } from 'styled-components'


const InterviewCard = ({item}) => {
  return (
    <StyledCard>
        <div>{item.Technology}</div>
        <div>{item.status}</div>
    </StyledCard>
  )
}

export default InterviewCard


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c2d4f2;
  width: 20%;
  height: 40vh;
  border-radius: 1rem;
  margin: 3rem;
`;

//   background-color: #c2d4f2;
