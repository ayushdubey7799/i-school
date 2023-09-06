import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { register } from "../../functions/api/register";
import signupImg from '../../assets/signupPageSecureImg.png'
import { toast } from "react-toastify";
import validate from "../../functions/validate";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
   if (!name.trim()) {
      toast.error("Fill all fields");
      return;
    }
    let val = validate(email, password);
    if (val) {
      const registerRes = await register(email, name, password);
      if (registerRes) {
        toast.success("Successfully signed up");
        navigate("/login");
      }
      else{
        toast.error("Email already exists");
      }
    }
  };

  return (
    <StyledSignup>
      <div id="cover">
        <img src={signupImg} />
      </div>
      <div id="form">
        <h2>CREATE YOUR ACCOUNT</h2>
        <p>Enter your details below to create your account.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="name"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <button type="submit">Create Account</button>
        </form>
        <p>
          Have an account ? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </StyledSignup>
  );
};

export default Signup;

const StyledSignup = styled.div`
  display: flex;
  width: 100%;
  registerPage
  min-height: 100vh;
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
      width: 50%;
    }
  }

  input {
    width: 80%;
    height: 3rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
    border-radius: 0.3rem;
    border: 0.1rem solid var(--color)
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
    flex-direction: column; /* Stack the form and cover divs on small screens */
    align-items: center;
    justify-content: center;
    margin-top: 50%;
    
    #form {
      width: 100%; /* Make the form div take 100% width on small screens */
    }

    #cover {
      display: none; /* Hide the cover div on small screens */
    }
  }

`;

