import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/IntelliViewLogo.png";
import { IconButton } from "@mui/material";
import profileIcon from '../../../assets/profileIcon.png'
import { useDispatch } from "react-redux";
import { logout } from "../../../slices/authSlice";
import { persistor } from "../../../store";

const Header = ({
  openNewInterviewModal,
  setOpenNewInterviewModal,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleLogout = () => {
    persistor.purge();
    dispatch(logout())
    navigate("/");
  };

  return (


    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>

      <div id="right">
        <Link to="/interview" className="link">
          <button className="demo">Back to Dashboard</button>
        </Link>
        <div className="profileIcon">
          <IconButton>
            <img src={profileIcon} className="profileImg" />
          </IconButton>
        </div>

        <div class="dropdown" id="dropdown">
          <span onClick={() => navigate('/reset')}>Reset Password</span>
          <span onClick={handleLogout}>Logout</span>
          <span onClick={() => navigate('/support')}>Support</span>
        </div>
      </div>
    </StyledDiv>


  );
};

export default Header;


const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color);
  width: 90%;
  padding: 0% 5%;
  height: 4rem;
  position: fixed;
  z-index: 2000;
  background-color: var(--white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);

  #left > img {
    height: 3.5rem;
    margin-left: -5%;
    cursor: pointer;
  }

  h1 {
    margin: 0;
    color: #add8e6;
  }


  #right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .profileIcon {
    position: relative;
  }

  .profileImg {
    width: 1.8rem;
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 75%;
    right: 0.5vw;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    font-weight: 400;
    font-size: 0.8rem;
    border-radius: 0.5rem;
}

.dropdown span {
    display: block;
    padding: 8px 10px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
}

.dropdown span:hover {
    background-color: #f5f5f5;
    border-radius: 5px;
    cursor: pointer;
}

.profileIcon:hover+#dropdown {
    display: block;
}

.dropdown:hover {
    display: block;
}


.demo {
  background: linear-gradient(to bottom, #2282A4, var(--lightOrange));
  padding: 0.6rem 0.6rem;
  color: var(--white);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
}

.demo:hover {
  background: linear-gradient(to bottom, #8ACCDC, var(--lightOrange));
}


.link {
  text-decoration: none;
}

.Icon {
  color: var(--white);
}

`;
