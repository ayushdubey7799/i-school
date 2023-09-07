import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MyDrawer from "./Drawer";
import logo from "../../assets/IntelliViewLogo.png";

const Header = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  let accessToken = localStorage.getItem("token");
  console.log(accessToken);
  if (accessToken) accessToken = JSON.parse(accessToken);

  return (
    <StyledDiv>
      <div id="left">
        <img src={logo} onClick={() => navigate("/")} />
      </div>
      <div id="middle">
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate("/products")}>Products</li>
        <li onClick={() => navigate("/services")}>Services</li>
        <li onClick={() => navigate("/research-paper")}>Research Papers</li>
        <li>
          <a
            href="mailto:care@intelliview.in"
            target="_blank"
            rel="noreferrer"
            className="contactLink"
          >
            Contact Us
          </a>
        </li>
        <li onClick={() => navigate("/case-studies")}>Case Studies</li>
      </div>
      <div id="right">
        {accessToken ? (
          <Link to="/interview">
            {" "}
            <button id="sign-in">Go to Dashboard</button>
          </Link>
        ) : (
          <Link to="/login">
            <button id="sign-in">Sign in</button>
          </Link>
        )}
        <Link to="/signup">
          <button id="free">Try it Now</button>
        </Link>
      </div>
      <div id="drawer">
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon className="link" />
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
  }

  #middle {
    font-size: 0.9rem;

    li {
      cursor: pointer;

      .contactLink {
        text-decoration: none;
        color: black;
      }
    }

    li:hover {
      font-weight: 600;
    }

    @media (max-width: 900px) {
      display: none;
    }
  }

  #right {
    display: flex;
    align-items: center;
    gap: 1rem;
    #sign-in {
      border: none;
      border-radius: 0.5rem;
      background-color: var(--lightOrange);
      color: var(--white);
      height: 3rem;
      padding: 0.2rem 0.8rem;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
    }

    #sign-in:hover {
      background-color: var(--white);
      color: black;
      border: 0.1rem solid var(--lightOrange);
      padding: 0.2rem 0.75rem;
    }

    #free:hover {
      background-color: var(--white);
      color: black;
      border: 0.1rem solid var(--lightOrange);
      padding: 0.2rem 0.75rem;
    }

    #free {
      border: none;
      border-radius: 0.5rem;
      height: 3rem;
      padding: 0.2rem 0.8rem;
      font-weight: 600;
      font-size: 0.8rem;
      cursor: pointer;
      background-color: var(--lightOrange);
      color: var(--white);
    }
  }

  #drawer {
    display: none;

    @media (max-width: 900px) {
      display: block;
    }
  }
`;
