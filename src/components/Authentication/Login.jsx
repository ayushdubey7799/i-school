import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { authenticate } from "../../functions/authenticate";
import { auth } from "../../functions/api/auth";
import loginImg from '../../assets/loginPageSecureImg.png'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await auth(password, email)
    console.log(accessToken);
    if (accessToken) {
      localStorage.setItem("token", JSON.stringify(accessToken));
      navigate('/interview')
    }

  };

  return (
    <StyledLogin>
      <div id="form">
        <h1>Login</h1>
        <p>Enter your details below and login into your account</p>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
      </div>
      <div id="cover">
        <img src={loginImg} />
      </div>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  width: 100%;

  form{
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
    justify-content: center
    
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

  input{
    width: 80%;
    height: 3rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color);
  }

  button{
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
