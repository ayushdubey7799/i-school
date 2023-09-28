import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MyDrawer from "./Drawer";
import logo from "../../assets/IntelliViewLogoDark.png";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log(accessToken);

  return (
    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>

      <div id="middle">
        <li onClick={() => navigate("/")}>Home</li>
        <div className="nav-item1 dropdown1">
          <li className="dropdown-toggle1">Products</li>
          <div className="dropdown-menu1">
            <a href="/product/intelliview">IntelliView</a>
            <a href="/product/intellisource">IntelliSource</a>
            <a href="/product/intelliboard">IntelliBoard</a>
          </div>
        </div>
        <div className="nav-item2 dropdown2">
          <li className="dropdown-toggle2">Services</li>
          <div className="dropdown-menu2">
            <a href="/service/screening">Screening</a>
            <a href="/service/data-analytics">Data Analytics</a>
            <a href="/service/talent-management">Talent Management</a>
          </div>
        </div>

        <div className="nav-item3 dropdown3">
          <li className="dropdown-toggle3">Solutions</li>
          <div className="dropdown-menu3">
            <a href="/solution/enterprise">For Enterprises</a>
            <a href="/solution/recruitment-agency">For Recruitment Agencies</a>
            <a href="/solution/job-seeker">For Job Seekers</a>
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
        <span>|</span>
        <Link to="/demo" className="link">
          <span id="free">Request Demo</span>
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
  color: var(--white);
  width: 90%;
  padding: 0% 5%;
  height: 4rem;
  position: fixed;
  z-index: 2000;
  background-color: var(--grey);
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
      color: var(--white);
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
    }

    #free {
      font-weight: 500;
      font-size: 0.85rem;
      cursor: pointer;
      color: var(--white);
    }
  }

  .link {
    text-decoration: none;
  }


  .Icon {
    color: var(--white);
  }



  // Products Menu

  .dropdown-toggle1 {
    position: relative;
  }
  
  .dropdown-menu1 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
  }
  
  .dropdown-menu1 a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu1 a:hover {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--color);
    text-decoration-thickness: 2px;
    text-underline-offset: 0.3rem;
  }
  
  .nav-item1:hover .dropdown-menu1 {
    display: block;
  }


  // Services Menu

  .dropdown-toggle2 {
    position: relative;
  }
  
  .dropdown-menu2 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
  }
  
  .dropdown-menu2 a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .dropdown-menu2 a:hover {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--color);
    text-decoration-thickness: 2px;
    text-underline-offset: 0.3rem;
  }
  
  .nav-item2:hover .dropdown-menu2 {
    display: block;
  }
  

  // Solutions Menu

  .dropdown-toggle3 {
    position: relative;
  }
  
  .dropdown-menu3 {
    display: none;
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    padding: 0.7rem 0.7rem;
  }
  
  .dropdown-menu3 a {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    color: var(--grey);
    font-size: 0.9rem;
    font-weight: 500;
  }
  

  .dropdown-menu3 a:hover {
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: var(--color);
    text-decoration-thickness: 2px;
    text-underline-offset: 0.3rem;
  }

  .nav-item3:hover .dropdown-menu3 {
    display: block;
  }




  #drawer {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;
