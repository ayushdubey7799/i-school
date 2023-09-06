import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { register } from "../../functions/api/register";
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
      <div id="cover"></div>
      <div id="form">
        <h1>CREATE YOUR ACCOUNT</h1>
        <p>Enter your details below to create your account.</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="name"
              id="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
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
  h1,
  p,
  form {
    padding: 1rem 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  #form {
    margin-top: 4rem;

    width: 40%;
    height: 100vh;
  }

  #cover {
    width: 60%;
    height: 100vh;
    background-color: #add8e6;
  }

  input {
    width: 97.5%;
    height: 3rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
  }

  button {
    background-color: #add8e6;
    color: rgb(128, 128, 128);
    height: 4rem;
    border-radius: 0.4rem;
  }
`;
