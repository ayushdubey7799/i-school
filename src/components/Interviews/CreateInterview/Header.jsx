import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/IntelliViewLogo.png";
import { IconButton } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MyDrawer from "../../LandingPage/Drawer";

const Header = ({
  openNewInterviewModal,
  setOpenNewInterviewModal,
  isLoading,
  setIsLoading,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
        <li onClick={() => navigate("/contact")}>
          Contact Us
        </li>
        <li onClick={() => navigate("/case-studies")}>Case Studies</li>
      </div>

      <div id="right">
        <Link to="/interview">
          <button id="free">Back to Dashboard</button>
        </Link>
        <button onClick={handleLogout} id="sign-in">Logout</button>
        {/* <NewInterviewModal openNewInterviewModal={openNewInterviewModal} setOpenNewInterviewModal={setOpenNewInterviewModal} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
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
      height: 2.3rem;
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
      height: 2.3rem;
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
