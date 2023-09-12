import React, { useState } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import validate from "../functions/validate";
import loginImg from "../assets/loginPageSecureImg.png";
import { toast } from "react-toastify";
import { reset } from "../functions/api/reset";
import logo from '../assets/IntelliViewLogo.png'

const Reset = () => {
  const navigate = useNavigate();
  const { id } = useParams()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let val = validate(email, password);
    if (password !== confirm) {
      toast.error("Confirm Password didn't match");
      return;
    }
    const res = await reset(confirm, password, email, id);
    if (res) {
      toast.success('Password reseted successfully');
      navigate("/login");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <StyledLogin>
      <div
        style={{
          height: "3.5rem",
          position: "absolute",
          top: "1rem",
          left: "3rem",
        }}
      >
        <img src={logo} style={{ height: "100%" }} />
      </div>
      <div id="form">
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            id="cnfpassword"
            value={confirm}
            placeholder="Enter Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        {/* <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p> */}
      </div>
      <div id="cover">
        <img src={loginImg} />
      </div>
    </StyledLogin>
  );
};

export default Reset;

const StyledLogin = styled.div`
  display: flex;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 80%;
  }

  #form {
    width: 50%;
    background-color: var(--backgroundColor);
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #cover {
    width: 50%;
    min-height: 100vh;
    background-color: var(--backgroundColor);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40%;
    }
  }

  input {
    width: 80%;
    height: 3rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color);
    font-size: 1rem;
  }

  button {
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    padding: 1rem 1rem;
    width: 50%;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50%;

    #form {
      width: 100%;
    }

    #cover {
      display: none;
    }
  }
`;
