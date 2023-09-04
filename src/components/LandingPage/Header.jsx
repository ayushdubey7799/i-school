import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MyDrawer from './Drawer';
import logo from '../../assets/IntelliViewLogo.png'

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <StyledDiv>
      <div id="left">
        <img src={logo}/>
      </div>
      <div id="middle">
        <li>About Us</li>
        <li>Products</li>
        <li>Services</li>
        <li>Research Papers</li>
        <li>Contact Us</li>
        <li>Case Studies</li>
      </div>
      <div id="right">
        <Link to="/login">
          <button id="sign-in">
            SIGN IN
          </button>
        </Link>
        <Link to="/signup">
          <button id="free">
            TRY IT NOW
          </button>
        </Link>
      </div>
      <div id="drawer">
        <IconButton onClick={() => setOpenDrawer(true)}><MenuRoundedIcon className='link' /></IconButton>
        <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
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
  width: 90%;
  padding: 0% 5%;
  height: 6rem;
  position: fixed;
  z-index: 2000;
  background-color: var(--white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  #left > img {
    height: 15rem;
    margin-left: -20%;
  }

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
    font-size: 1.1rem;

    @media(max-width: 980px) {
      font-size: 1.05rem;
    }

    li{
      cursor:pointer;
    }

    li:hover {
      font-weight: 600;
    }

    @media(max-width: 900px) {
      display: none;
    }
  }

  #right{
    display: flex;
    gap: 1rem;
    #sign-in{
      border: none;
      border-radius: 0.5rem;
      background-color: white;
      height: 3.5rem;
      padding: 0.2rem 0.8rem;
      font-weight: 600;
      font-size: 1rem;
      cursor:pointer;
    }

    #sign-in:hover, #free:hover{
      background-color: var(--lightOrange);
      color: var(--white)
    }

    

    #free{
      border: none;
      border-radius: 0.5rem;
      background-color: white;
      height: 3.5rem;
      padding: 0.2rem 0.8rem;
      font-weight: 600;
      font-size: 1rem;
      cursor:pointer;
      
    }
  }

  #drawer {
    display: none;

    @media(max-width: 900px){
      display: block;
    }
  }

  
`;



