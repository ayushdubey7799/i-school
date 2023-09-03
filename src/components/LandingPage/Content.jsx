import React, { useState } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";

const Content = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email.trim().length == 0) {
      alert("Enter your email");
      return;
    }
    navigate("/signup");
  };

  return (
    <StyledContent>
      <div className="heading">
        <p className="ultimate">
          UNLOCK YOUR POTENTIAL: <br />YOUR <span>LAUNCHPAD</span> FOR
          INTERVIEW <span>SUCCESS</span>
        </p>
        <p className="desc">
          Introducing Intelliview, your personal platform to enhance interview
          skills through simulated mock interviews. Prepare for success, one
          practice session at a time.
        </p>
        <div className="register">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Get Started</button>
        </div>
      </div>
      {/* <div className="image"></div> */}
    </StyledContent>
  );
};

export default Content;

export const StyledContent = styled.div`
  // display: grid;
  // grid-template-columns: 5.5fr 4.5fr;
  // grid-template-rows: 1fr 1fr;
  display: flex;
  width: 75%;
  margin-bottom: 4rem;
  justify-content: center;
  align-items: center;
  // height: 85vh;

  @media(max-width: 800px) {
    width: 80%;
  }

  @media(max-width: 720px) {
    width: 85%;
  }

  @media(max-width: 600px) {
    width: 90%;
  }

  width: 100%;
  height: 90vh;

  .heading {
    display: flex;
    flex-direction: column;
    width:100%;
    // grid-column: 1/2;
    // grid-row: 1/3;
    text-align: center;
    align-items: center;

    // @media(max-width: 600px){
    //   grid-column: 1/3;
    //   grid-row: 1/2;
    // }
  }

  .ultimate{
    font-size: 4rem;
    font-weight: bold;
    margin: 1rem 0;
    margin-top: 3rem;

    span{
        color: #ADD8E6;
    }
  }

  .desc{
    font-size: 1.5rem;
    padding: 2rem 1rem;
    margin-right: 0.5rem;
    line-height: 1.5;
  }

  // .image{
  //   width: 100%;
  //   background-color: #ADD8E6;
  //   grid-column: 2/3;
  //   grid-row: 1/3;

  //   @media (max-width: 600px) {
  //     grid-column: 1/3;
  //       grid-row: 2/3;
  //   }
  // }

  .register{
    display: flex;
    width: 80%;
    align-items; center;
    justify-content: flex-start;

    input{
        height: 3.8rem;
        width: 68%;
        border: 0.2rem solid gray;
        border-radius: 0.4rem 0 0 0.4rem;
        border-right: none;
        font-size: 1.5rem;
        padding-left: 1rem;
    }

    button{
        height: 4.2rem;
        width: 32%;
        background-color: #ADD8E6;
        color: rgb(128,128,128);
        font-weight: bold;
        font-size: 1.5rem;
        border: 0.2rem solid gray;
        border-radius: 0 0.4rem 0.4rem 0;
        cursor:pointer;

    }


    
  }
`;
