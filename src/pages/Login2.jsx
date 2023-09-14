import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../functions/api/auth";
import validate from "../functions/validate";
import loginImg from "../assets/loginPageSecureImg.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import logo from "../assets/IntelliViewLogo.png";
import { forgetPassword } from "../functions/api/forget";
import { toast } from "react-toastify";
import {performLogin} from "../slices/authSlice"
import { useDispatch, useSelector } from "react-redux";

const Login2 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.auth.userData?.accessToken)
    const [forget, setForget] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // if(loggedIn)navigate("/interview");
    console.log(accessToken);
    if(accessToken)navigate("/interview")

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!forget) {
            let val = validate(email, password);
            if (val) {
                {
                   await dispatch(performLogin({password, email}));

                }
            }
        }

        if (forget) {
            const res = await forgetPassword(email);
            toast.success(res.message);
            setForget(false)
        }
        setEmail("");
        setPassword("");
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

            <IconButton onClick={() => navigate("/")} className="prev">
                <ArrowBackIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <>
                <div id="form">
                    {!forget && <h1>Login</h1>}
                    {forget ? (
                        <p>Enter your Email</p>
                    ) : (
                        <p>Enter your details below and login into your account</p>
                    )}
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        {!forget && (
                            <input
                                type="password"
                                id="password"
                                value={password}
                                placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        )}
                        <button type="submit" className="btn">
                            {forget ? "Reset" : "Login"}
                        </button>
                    </form>
                    <p>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </p>
                    <p onClick={() => setForget(true)}>
                        Forgot Password? <Link to="">Reset</Link>
                    </p>
                </div>
                <div id="cover">
                    <img src={loginImg} />
                </div>
            </>
        </StyledLogin>
    );
};

export default Login2;

const StyledLogin = styled.div`
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
`;
