import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <StyledDiv>
      <div id="left">
        <h1>Intelliview</h1>
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
  display : flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  width: 100%;
  margin: 0 auto;
  height: 3.5rem;
  #middle{
    display : flex;
    gap: 1rem;
  }

  h1{
    margin: 0;
    color: #ADD8E6;
  }

  li{
    list-style-type: none;
  }

  #middle{
    font-size: 1.3rem;
    li{
      cursor:pointer;
    }
  }

  #right{
    display: flex;
    gap: 1rem;
    #sign-in{
      border: none;
      background-color: white;
      height: 3.5rem;
      font-weight: bold;
      font-size: 1rem;
      cursor:pointer;
    }

    #sign-in:hover, #free:hover{
      background-color: #ADD8E6;
    }

    

    #free{
      border: none;
      background-color: white;
      height: 3.5rem;
      font-weight: bold;
      font-size: 1rem;
      cursor:pointer;

    }
  }

`;



