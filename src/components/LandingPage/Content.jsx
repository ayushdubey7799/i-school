import React, { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import landingPageTopImg from '../../assets/homepageBannerImageAI.png'

const Content = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/signup");
  };

  return (
    <StyledContent>
      <div className="landing-page">
        <div className="landingContent">
          <div className="left">
            <div className="textContainer">
              <div className="title">
                <span className="titleText1">WELCOME TO THE </span>
                <span className="titleText2">FUTURE <span className="titleText3">OF </span></span>
                <span className="titleText4">INTERVIEWS!</span>
              </div>
              <span className="desc">AI-Powered, Smarter,<br /> Structured and More Efficient!</span>
            </div>
            <button onClick={handleSubmit} className="btn">Try Now</button>
          </div>
          <div className="right">
            <img src={landingPageTopImg} />
          </div>
        </div>
      </div>
    </StyledContent>
  );
};

export default Content;

export const StyledContent = styled.div`

  background-color: var(--white);
  width: 100%;



  .landing-page {
    margin-top: 6rem;
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .landing-page::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--lightOrange);
    clip-path: polygon(0% 0%, 100% -30%, -15% 100%, 0% 100%);
    transform: rotate(180deg);
  }
  
  .landing-page::before {
    top: 0;
    left: 0;
  }


  .landingContent {
    z-index: 11;
    // width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 2rem;
    margin: 4rem 0rem;
  }

  .left {
    width: 100%;
    grid-column: 1/2;
    grid-row: 1/3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media(max-width: 600px) {
      grid-column: 1/3;
      grid-row: 1/2;
    }

    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .desc {
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--grey);
        text-align: center;
        line-height: 1.7rem;
      }
    }

    .title {
      display: flex;
      flex-direction: column;

      .titleText1 {
        font-size: 2.3rem;
        font-weight: 600;
        color: var(--grey);
      }

      .titleText2 {
        font-size: 3.2rem;
        font-weight: 600;
        color: var(--grey);

        .titleText3 {
          font-size: 2.3rem;
          font-weight: 400;
          color: var(--grey);
        }
      }


      .titleText4 {
        font-size: 3.2rem;
        font-weight: 600;
        color: var(--grey);
      }


    }

    .btn {
      background-color: var(--lightOrange);
      border: none;
      padding: 0.7rem 1rem;
      color: var(--white);
      font-size: 1.4rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    // .btn:hover {
    //   background-color: var(--white);
    //   color: black;
    //   border: 0.1rem solid var(--lightOrange)
    // }


  }

  .right {
    width: 100%;
    grid-column: 2/3;
    grid-row: 1/3;

    @media(max-width: 600px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }
  }

  .right > img {
    width: 100%;
  }


`;
