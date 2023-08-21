import React from 'react'
import { styled } from 'styled-components';

const Header = () => {
  return (
    <StyledHeading>
        <div id="heading">
            <h1>My Interviews</h1>
        </div>
        <div id="start">
            <button>
                Start New Interview
            </button>
        </div>
    </StyledHeading>
  )
}

export default Header

const StyledHeading = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;

  button{
    background-color: green;
    color: white;
    font-size; 1.5rem;
    height: 3rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem 1rem;
  }
`