import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/IntelliViewLogo.png";


const LogoHeader = () => {

    return (
        <StyledDiv>
            <div id="left">
                <a href="/"><img src={logo} /></a>
            </div>
        </StyledDiv>
    );
};

export default LogoHeader;


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

  #left > a > img {
    height: 3.5rem;
    margin-left: -5%;
    cursor: pointer;
  }



`;
