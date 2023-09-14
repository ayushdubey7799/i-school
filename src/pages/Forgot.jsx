import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { forgetPassword } from '../functions/api/forget';
import styled from 'styled-components';
import logo from '../assets/IntelliViewLogo.png'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import loginImg from "../assets/loginPageSecureImg.png";
import { Link, useNavigate } from 'react-router-dom';


const Forgot = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleReset = async (e) => {
        e.preventDefault();
        const res = await forgetPassword(email);
        toast.success(res.message);
        setEmail('');
    }

    return (
        <StyledDiv>
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

            <IconButton onClick={() => navigate("/")} className="prev">
                <ArrowBackIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <>
                <div id="form">
                    <h1>Reset</h1>

                    <p>Enter your Email</p>

                    <form onSubmit={handleReset}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn">
                            Reset
                        </button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                </div>
                <div id="cover">
                    <img src={loginImg} />
                </div>
            </>
        </StyledDiv>
    )
}

export default Forgot


const StyledDiv = styled.div`
display: flex;
  width: 100%;
  margin-top: 0rem;

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

  .btn {
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    padding: 1rem 1rem;
    width: 50%;
    cursor: pointer;
  }

  .prev {
    background-color: var(--lightOrange);
    padding: 0.1rem;
    position: absolute;
    top: 6rem;
    left: 3rem;
    color: var(--white);
  }

  .prev:hover {
    color: var(--color);
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

`

