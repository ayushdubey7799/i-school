import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledDiv>
        <div id="left">
            <h1>INTERVIEW SCHOOL</h1>
        </div>
        <div id="middle">
            <li>About</li>
            <li>Pricing</li>
            <li>Features</li>
            <li>Institutions</li>
            <li>Blog</li>
        </div>
        <div id="right">
            <Link to="/login">
           <button id="sign-in">
               SIGN IN
           </button>
           </Link>
           <Link to="/signup">
           <button id="free">
                START FOR FREE
           </button>
           </Link>
        </div>
    </StyledDiv>
  )
}

export default Header

const StyledDiv = styled.div`
  background-color: white;
  display : flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  color: black;
  width: 65%;
  margin: 0 auto;
  #middle{
    display : flex;
    gap: 1rem;
  }

  li{
    list-style-type: none;
  }

  #right{
    display: flex;
    gap: 1rem;
    button{
        background-color: green;
        color: white;
        font-weight: 300;
        height: 3rem;
        border-radius: 0.5rem;
        cursor: pointer;
        
    }
  }

`;