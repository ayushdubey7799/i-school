
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import logo from "../../assets/IntelliViewLogo.png";
import { useSelector } from "react-redux";
import profileIcon from '../../assets/profileIcon.png'

import { persistor } from "../../store";
import { logout } from "../../slices/authSlice";
import { useDispatch } from "react-redux";

import profileFeedback from '../../assets/icons/profileFeedback.png'
import profileHelp from '../../assets/icons/profileHelp.png'
import profileReset from '../../assets/icons/profileReset.png'
import profileLogout from '../../assets/icons/profileLogout.png'

const ResumeHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const user = useSelector(state => state.auth.userData.user);

  const handleLogout = () => {
    persistor.purge();
    dispatch(logout())
    navigate("/");
  };

  console.log(accessToken);

  return (
    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>

      <div id="right">
        <Link to="/dashboard/jobseeker" className="link">
          <span className="coloredText">Back to Dashboard</span>
        </Link>
        <div className="profileIcon">
          <IconButton>
            <img src={profileIcon} className="profileImg" />
          </IconButton>
        </div>

        <div class="dropdown" id="dropdown">
          <span className="titleText span" style={{ marginBottom: '0rem', border: 'none' }}>Signed In as <b>{user?.firstName}</b></span>
          <span onClick={() => navigate('/feedback')} className="span">Feedback <img src={profileFeedback} /></span>
          <span onClick={() => navigate('/support')} className="span">Help <img src={profileHelp} /></span>
          <span onClick={() => navigate('/reset')} className="span">Reset Password <img src={profileReset} /></span>
          <span onClick={handleLogout} className="span">Logout <img src={profileLogout} /></span>
        </div>
      </div>
    </StyledDiv>
  );
};

export default ResumeHeader;

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


  .coloredText {
    font-size: 0.85rem;
    color: var(--color);
    font-weight: 600;
    cursor: pointer;
  }

  .coloredText:hover {
    font-weight: 700;
    text-decoration: underline;
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

  

  .link {
    text-decoration: none;
  }


  .Icon {
    color: var(--white);
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

    img {
      width: 1rem;
    }
}

.dropdown span {
    display: flex;
    padding: 8px 10px;
    text-decoration: none;
    color: #333;
    transition: background-color 0.3s ease;
    border-bottom: 0.1rem groove #f6f6f6;
    gap: 0.5rem;
    align-items: center;
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

.link {
    text-decoration: none;
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
`;

