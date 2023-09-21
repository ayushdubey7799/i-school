import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { auth } from "../functions/api/authentication/auth";
import validate from "../functions/validate";
import loginImg from "../assets/loginPageSecureImg.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import logo from "../assets/IntelliViewLogo.png";
import { performLogin } from "../slices/authSlice"
import { useDispatch, useSelector } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import registerIcon1 from '../assets/registerIcon1.jpg'
import registerIcon2 from '../assets/registerIcon2.jpg'
import registerIcon3 from '../assets/registerIcon3.jpg'
import ReCAPTCHA from "react-google-recaptcha";




const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState("job-seeker");

  const captchaRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setEmail('');
    setPassword('');
    setPasswordVisible(false);
    captchaRef.current.reset();
  }




  // if(loggedIn)navigate("/interview");
  console.log(accessToken);
  if (accessToken) navigate("/interview")

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = captchaRef.current.getValue();
    console.log(token);
    captchaRef.current.reset();

    let val = validate(email, password);
    if (val) {
      {
        await dispatch(performLogin({ password, email }));
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


      <Box sx={{ width: "70%", position: "relative", top: "6rem", margin: "0 1rem", marginBottom: '7rem' }} className='box'>
        <Tabs
          style={{ width: '90%' }}
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
              fontSize: "1rem",
            }}
            icon={<img src={registerIcon1} className="icon" />}
          />
          <Tab
            value="employer"
            label="Employer"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1rem;"
            }}
            icon={<img src={registerIcon2} className="icon" />}
          />
          <Tab
            value="recruitment-agency"
            label="Recruitment Agency"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1rem;"
            }}
            icon={<img src={registerIcon3} className="icon" />}
          />
        </Tabs>
        {value == 'job-seeker' ?
          <div id="form">
            <p>Enter your details below to login</p>

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

              <ReCAPTCHA
                sitekey='6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM'
                ref={captchaRef}
                size="normal"
              />


              <button type="submit" className="btn">
                Login
              </button>
            </form>
            <p>
              <Link to="/signup" className="link">Sign Up</Link>
            </p>
            <p>
              Forgot Password? <Link to="/reset" className="link">Reset</Link>
            </p>
          </div> : value == 'employer' ?
            <div id="form">
              <p>Enter your details below to login</p>

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

                <ReCAPTCHA
                  sitekey='6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM'
                  ref={captchaRef}
                  size="normal"
                />


                <button type="submit" className="btn">
                  Login
                </button>
              </form>
              <p>
                <Link to="/signup" className="link">Sign Up</Link>
              </p>
              <p>
                Forgot Password? <Link to="/reset" className="link">Reset</Link>
              </p>
            </div>
            : <div id="form">
              <p>Enter your details below to login</p>

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

                <ReCAPTCHA
                  sitekey='6Lcm1kAoAAAAAOqVJ8zxs6JqSTw2Go4qIfNHBdPM'
                  ref={captchaRef}
                  size="normal"
                />


                <button type="submit" className="btn">
                  Login
                </button>
              </form>
              <p>
                <Link to="/signup" className="link">Sign Up</Link>
              </p>
              <p>
                Forgot Password? <Link to="/reset" className="link">Reset</Link>
              </p>
            </div>
        }
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }

  .icon {
    width: 2rem;
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
    color: var(--lightOrange);
  }

  .inputBox {
    width: 70%;
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
    padding: 1rem 1rem;
    width: 40%;
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
`;
