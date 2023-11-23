import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../functions/api/authentication/auth";
import validate from "../functions/validate";
import loginImg from "../assets/loginPageSecureImg.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import logo from "../assets/IntelliViewLogo.png";
import { logout, performLogin } from "../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import registerIcon1 from "../assets/registerIcon1.jpg";
import registerIcon2 from "../assets/registerIcon2.jpg";
import registerIcon3 from "../assets/registerIcon3.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import { getInviteDetails } from "../functions/api/employers/schedule/getInviteDetails";
import { persistor } from "../store";

import googleAuthIcon from '../assets/googleAuthIcon.png'
import linkedinAuthIcon from '../assets/linkedinAuthIcon.png'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const clientCodeStore = useSelector(
    (state) => state.auth.userData?.user?.clientCode
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientCode, setClientCode] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState("job-seeker");

  const captchaRef = useRef(null);

  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const key = searchParams.get("key");
  if (key == "invite" || key == "interview") {
    console.log(token, key);

    localStorage.setItem("token", token);
    localStorage.setItem("key", key);
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setEmail("");
    setPassword("");
    setPasswordVisible(false);
    captchaRef.current.reset();
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const key = localStorage.getItem("key");

    console.log(token, key, accessToken, clientCodeStore)
    if (accessToken && key == "interview" && clientCodeStore == "intelliview") navigate('/dashboard/jobseeker');

    if (token && accessToken && clientCodeStore && key == "invite") {
      (async function () {
        const res = await getInviteDetails(token, accessToken);
        if (res) {
          navigate(`/slot-selection/${token}`)

        } else {
          const userConfirmed = confirm("You are already logged in with different email id, do you want to logout first?");
          if (userConfirmed) {
            persistor.purge();
            dispatch(logout());
          } else {
            clientCodeStore == "intelliview"
              ? navigate("/dashboard/jobseeker")
              : navigate("/dashboard/employer");
          }
        }
      })();
    }

    if (!token && accessToken) {
      clientCodeStore == "intelliview"
        ? navigate("/dashboard/jobseeker")
        : navigate("/dashboard/employer");
    }

    if (clientCodeStore && clientCodeStore != 'intelliview') {
      navigate('/dashboard/employer')
    }
  }, [accessToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    console.log(token);
    captchaRef.current.reset();

    let val = validate(email, password);

    if (val) {
      {
        console.log("IN LOGIN", clientCode);
        dispatch(performLogin({ password, email, clientCode }));
        setClientCode("");
      }
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

      <Box
        sx={{
          width: "70%",
          position: "relative",
          top: "6rem",
          margin: "0 1rem",
          marginBottom: "7rem",
        }}
        className="box"
      >
        <Tabs
          style={{
            width: "35rem",
            borderRadius: "3rem",
            backgroundColor: "var(--lightOrange)",
          }}
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--lightOrange)",
            },
          }}
          variant="fullWidth"
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="job-seeker"
            label="Job Seeker"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "0.8rem",
            }}
            classes={{ root: "custom-tab", selected: "custom-tab-selected" }}
          />
          <Tab
            value="employer"
            label="Employer"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "0.8rem",
            }}
            classes={{ root: "custom-tab", selected: "custom-tab-selected" }}
          />
          <Tab
            value="recruitment-agency"
            label="Recruitment Agency"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "0.8rem",
            }}
            classes={{ root: "custom-tab", selected: "custom-tab-selected" }}
          />
        </Tabs>
        {value == "job-seeker" ? (
          <div id="form">
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
                <FontAwesomeIcon
                  icon={faEye}
                  id="eye"
                  onClick={togglePasswordVisibility}
                  className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                />
              </div>

              <div className="resetBox">
                <span className="remember">
                  <input type="checkbox" />
                  Remember me
                </span>
                <span>
                  <Link to="/reset" className="reset">
                    Forgot Password
                  </Link>
                </span>
              </div>

              <ReCAPTCHA
                sitekey="6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM"
                ref={captchaRef}
                size="normal"
              />
              <span className="terms">By logging in, you agree to our Terms and Conditions.</span>

              <button type="submit" className="btn">
                Login
              </button>
            </form>

            <div className="bottomBox">
              <div className="textBox">
                <span className="or">OR</span>
                <span className="loginWith">Login with</span>
              </div>

              <div className="logoBox">
                <img src={googleAuthIcon} className="logo" />
                <img src={linkedinAuthIcon} className="logo" />
              </div>
            </div>

            <p>
              <Link to="/signup" className="link">
                Don't have an account ? <span className="link1">Sign Up</span>
              </Link>
            </p>
          </div>
        ) : value == "employer" ? (
          <div id="form">
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  id="clientCode"
                  value={clientCode}
                  onChange={(e) => setClientCode(e.target.value)}
                  required
                />
                <label htmlFor="clientCode">Client Code</label>
              </div>

              <div className="inputBox">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
                <FontAwesomeIcon
                  icon={faEye}
                  id="eye"
                  onClick={togglePasswordVisibility}
                  className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                />
              </div>

              <div className="resetBox">
                <span className="remember">
                  <input type="checkbox" />
                  Remember me
                </span>
                <span>
                  <Link to="/reset" className="reset">
                    Forgot Password
                  </Link>
                </span>
              </div>

              <ReCAPTCHA
                sitekey="6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM"
                ref={captchaRef}
                size="normal"
              />
              <span className="terms">By logging in, you agree to our Terms and Conditions.</span>

              <button type="submit" className="btn">
                Login
              </button>
            </form>
            <p>
              <Link to="/signup" className="link">
                Don't have an account ? <span className="link1">Sign Up</span>
              </Link>
            </p>
          </div>
        ) : (
          <div id="form">
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="inputBox">
                <input
                  type="text"
                  id="clientCode"
                  value={clientCode}
                  onChange={(e) => setClientCode(e.target.value)}
                  required
                />
                <label htmlFor="clientCode">Client Code</label>
              </div>

              <div className="inputBox">
                <input
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
                <FontAwesomeIcon
                  icon={faEye}
                  id="eye"
                  onClick={togglePasswordVisibility}
                  className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                />
              </div>

              <div className="resetBox">
                <span className="remember">
                  <input type="checkbox" />
                  Remember me
                </span>
                <span>
                  <Link to="/reset" className="reset">
                    Forgot Password
                  </Link>
                </span>
              </div>

              <ReCAPTCHA
                sitekey="6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM"
                ref={captchaRef}
                size="normal"
              />
              <span className="terms">By logging in, you agree to our Terms and Conditions.</span>

              <button type="submit" className="btn">
                Login
              </button>
            </form>
            <p>
              <Link to="/signup" className="link">
                Don't have an account ? <span className="link1">Sign Up</span>
              </Link>
            </p>
          </div>
        )}
      </Box>
    </StyledLogin>
  );
};

export default Login;

const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-size: 1rem;
  }

  .terms {
    font-size: 0.7rem;
    font-weight: 400;
    color: #000;
    line-height: 0.8rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-top: 1rem;
  }

  #form {
    width: 80%;
    background-color: var(--backgroundColor);
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .link {
    text-decoration: none;
    color: var(--color);
  }

  .link1 {
    color: var(--color);
  }

  .link1:hover {
    font-weight: 600;
    text-decoration: underline;
  }

  .resetBox {
    display: flex;
    width: 60%;
    justify-content: space-between;
    align-items: center;
  }

  .reset {
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
  }

  .remember {
    display: flex;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    align-items: center;
    gap: 0.5rem;
    height: 1.4rem;

    input {
      width: 1rem;
      margin: 0rem;
      cursor: pointer;
    }
  }

  .inputBox {
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 1rem;
  }

  input {
    width: 100%;
    height: 2.5rem;
    margin-top: 0.7rem;
    padding-left: 0.5rem;
    border-radius: 0.3rem;
    border: 0.05rem solid lightgrey;
    background-color: var(--white);
    font-size: 1rem;
  }

  input:focus {
    outline-color: var(--lightOrange);
  }

  label {
    position: absolute;
    top: -0.8rem;
    left: 0rem;
    transition: color 0.3s;
  }

  input:focus + label {
    color: var(--lightOrange);
  }

  label {
    color: var(--color);
    font-size: 0.8rem;
    font-weight: 600;
  }

  .btn {
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    padding: 0.5rem 0.8rem;
    width: 20%;
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

  .eye-icon {
    position: absolute;
    top: 60%;
    right: 2%;
    transform: translateY(-50%);
    cursor: pointer;
    color: lightgray;
  }

  .eye-icon.visible {
    color: blue; /* Change to your desired color when password is visible */
  }

  @media (max-width: 800px) {
    justify-content: center;

    #form {
      width: 100%;
    }
  }

  // Custom styled for tabs

  .custom-tab {
    color: white;
    background-color: var(--lightOrange);
    transition: background-color 0.3s;
    text-decoration: none !important;
  }

  .custom-tab-selected {
    background-color: white;
    color: var(--lightOrange) !important;
    border: 0.1rem solid var(--lightOrange);
    border-radius: 3rem;
    text-decoration: none !important;
  }

  .custom-tab-selected .MuiTab-label {
    text-transform: none;
  }

  .bottomBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    gap: 0.5rem;

    .textBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .or {
        font-size: 1rem;
        font-weight: 600;
      }

      .loginWith {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }

    .logoBox {
      display: flex;
      gap: 1rem;
      margin-top: 0.3rem;
      margin-bottom: 0.5rem;

      img {
        width: 3rem;
        cursor: pointer;
      }
    }

  }

`;
