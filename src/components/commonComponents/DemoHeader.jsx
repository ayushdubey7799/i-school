import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MyDrawer from "../LandingPage/Drawer";
import logo from "../../assets/IntelliViewLogo.png";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Header = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  const handleMouseEnter1 = () => {
    setHover1(true);
  };

  const handleMouseLeave1 = () => {
    setHover1(false);
  };

  const handleMouseEnter2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  const handleMouseEnter3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };

  console.log(accessToken);

  return (
    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>

      <div id="middle">
        <li onClick={() => navigate("/")}>Home</li>
        <div className="nav-item1 dropdown1" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
          <li className="dropdown-toggle1" >Products {!hover1 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu1">
            <div className="menuBox1">
              <a href="/product/intelliview">IntelliView</a>
              <a href="/product/intellisource">IntelliSource</a>
              <a href="/product/intelliboard">IntelliBoard</a>
            </div>
            <div className="menuBox2">
              <span className="menuBox2Title">Streamline your recruitment process with our AI-powered recruitment software.</span>
              <span className="menuBox2Text">Our software uses artificial intelligence to automate tasks, identify qualified candidates, and improve the overall hiring experience.</span>
            </div>
          </div>
        </div>
        <div className="nav-item2 dropdown2" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
          <li className="dropdown-toggle2">Services {!hover2 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu2">
            <div className="menuBox1">
              <a href="/service/screening">Screening</a>
              <a href="/service/data-analytics">Data Analytics</a>
              <a href="/service/talent-management">Talent Management</a>
            </div>
            <div className="menuBox2">
              <span className="menuBox2Title">We offer AI-powered interviewing services to help you hire the best talent.</span>
              <span className="menuBox2Text">Our software uses artificial intelligence to assess candidates' skills and experience, and provide you with insights into their fit for the role.</span>
            </div>
          </div>
        </div>

        <div className="nav-item3 dropdown3" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
          <li className="dropdown-toggle3" >Solutions {!hover3 ? <KeyboardArrowDownIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} /> : <KeyboardArrowUpIcon sx={{ fontSize: '1.1rem', color: 'var(--color)', }} />}</li>
          <div className="dropdown-menu3">
            <div className="menuBox1">
              <a href="/solution/enterprise">For Enterprises</a>
              <a href="/solution/recruitment-agency">For Recruitment Agencies</a>
              <a href="/solution/job-seeker">For Job Seekers</a>
            </div>
            <div className="menuBox2">
              <span className="menuBox2Title">Our AI-powered systems for Enterprises, Recruitment Agencies and Job Seekers helps to manage things more efficiently.</span>
              <span className="menuBox2Text">Our software automatically screens resumes, schedules interviews, and tracks candidate progress throughout the hiring process.</span>
            </div>
          </div>
        </div>

        <li onClick={() => navigate("/support")}>Support</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate('/case-studies')} >Case Studies</li>
      </div>
      <div id="right">
        {accessToken ? (
          <Link to="/interview" className="link">
            {" "}
            <span id="sign-in">Go to Dashboard</span>
          </Link>
        ) : (
          <Link to="/login" className="link">
            <span id="sign-in">Login</span>
          </Link>
        )}
        <span>|</span>
        <Link to="/signup" className="link">
          <span id="free">Register</span>
        </Link>
      </div>
      <div id="drawer">
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon className="Icon" />
        </IconButton>
        <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
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

  #middle {
    display: flex;
    gap: 1rem;
  }

  h1 {
    margin: 0;
    color: #add8e6;
  }

  li {
    list-style-type: none;
    height: 5rem;
    display: flex;
    align-items: center;
  }

  #middle {
    font-size: 0.85rem;

    li {
      cursor: pointer;

      .contactLink {
        text-decoration: none;
        color: black;
      }
    }

    li:hover {
      font-weight: 500;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  #right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    #sign-in {
      color: var(--color);
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
    }

    #free {
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
      color: var(--color);
    }
  }

  .link {
    text-decoration: none;
  }


  .Icon {
    color: var(--color);
  }



  // Menu dropdown Boxes

  .menuBox1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem 1rem 1rem;
    min-width: 12rem;
  }

  .menuBox2 {
    display: flex;
    flex-direction: column;
    width: 40rem;
    background: linear-gradient(to top left, #fafafa, var(--lightOrange));
    align-items: center;
    min-height: 7rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 2rem 2rem;
    justify-content: center;
    gap: 1rem;
  }

  .menuBox2Title {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color);
  }

  .menuBox2Text {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    color: var(--color);
  }


  // Products Menu

  .dropdown-toggle1{
    position: relative;
  }
  

  .dropdown1:hover .dropdown-toggle1{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu1 {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  }

  

  
  .dropdown-menu1 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu1 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item1:hover .dropdown-menu1 {
    display: flex;
    align-items: start;
  }


  // Services Menu

  .dropdown-toggle2 {
    position: relative;
  }
  

  .dropdown2:hover .dropdown-toggle2{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu2 {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  }
  
  .dropdown-menu2 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu2 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item2:hover .dropdown-menu2 {
    display: flex;
    align-items: start;
  }
  

  // Solutions Menu

  .dropdown-toggle3 {
    position: relative;
  }
  

  .dropdown3:hover .dropdown-toggle3{
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 3px;
    background-repeat: no-repeat;
    background-position: 0 70%;
  }


  .dropdown-menu3 {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  }
  
  .dropdown-menu3 a {
    display: inline-block;
    padding: 0.5rem 0;
    margin: 0 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu3 a:hover {
    background-image: linear-gradient(to right, var(--grey), var(--lightOrange));
    background-size: 100% 2.4px;
    background-repeat: no-repeat;
    background-position: 0 90%;
  }

  .nav-item3:hover .dropdown-menu3 {
    display: flex;
    align-items: start;
  }




  #drawer {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;
