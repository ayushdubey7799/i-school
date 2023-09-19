import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { register } from "../functions/api/authentication/register";
import signupImg from '../assets/signupPageSecureImg.png'
import { toast } from "react-toastify";
import validate from "../functions/validate";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import logo from '../assets/IntelliViewLogo.png'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProfileInterview from "../components/Interviews/CreateInterview/ProfileInterview";
import SkillInterview from "../components/Interviews/CreateInterview/SkillInterview";


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const [company, setCompany] = useState('');
  const [coOrdinator, setCoOrdinator] = useState('');
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');




  const [value, setValue] = useState("job-seeker");

  const handleChange = (event, newValue) => {
    setValue(newValue);

    setName('');
    setEmail('');
    setPassword('');
    setContact('');
    setGender('');
    setCompany('');
    setCoOrdinator('');
    setAddress('');
    setLocation('');
    setIndustry('');

    console.log(newValue);
  };

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
        navigate("/interview");
      }
      else {
        toast.error("Email already exists");
      }
    }
  };



  return (
    <StyledSignup>
      <div style={{ height: '3.5rem', position: 'absolute', top: '1rem', left: '3rem' }}>
        <img src={logo} style={{ height: '100%' }} />
      </div>
      <IconButton onClick={() => navigate('/')} className="prev">
        <ArrowBackIcon sx={{ fontSize: '30px' }} />
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
              fontSize: "1.2rem;"
            }}
          />
          <Tab
            value="employer"
            label="Employer"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1.2rem;"
            }}
          />
          <Tab
            value="recruitment-agency"
            label="Recruitment Agency"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1.2rem;"
            }}
          />
        </Tabs>
        {
          value == 'job-seeker' ?
            <div id="form">
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
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='not-disclose'>Rather not disclose</option>
                </select>

                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="tel"
                  id="contact"
                  value={contact}
                  placeholder="Enter Phone Number"
                  onChange={(e) => setContact(e.target.value)}
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

                <button type="submit" className="btn">Create Account</button>
              </form>
              <p>
                Have an account ? <Link to="/login">Sign In</Link>
              </p>
            </div>
            : value == 'employer' ?
              <div id="form">
                <p>Enter your details below to create your account.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="name"
                    id="company"
                    value={company}
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="co-Ordinator"
                    value={coOrdinator}
                    placeholder="Enter Co-Ordinator Name"
                    onChange={(e) => setCoOrdinator(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="industry"
                    value={industry}
                    placeholder="Enter Industry"
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="location"
                    value={location}
                    placeholder="Enter Location"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="address"
                    value={address}
                    placeholder="Enter Address"
                    onChange={(e) => setAddress(e.target.value)}
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
                    type="tel"
                    id="contact"
                    value={contact}
                    placeholder="Enter Phone Number"
                    onChange={(e) => setContact(e.target.value)}
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
                  <button type="submit" className="btn">Create Account</button>
                </form>
                <p>
                  Have an account ? <Link to="/login">Sign In</Link>
                </p>
              </div>

              : <div id="form">
                <p>Enter your details below to create your account.</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="name"
                    id="company"
                    value={company}
                    placeholder="Enter Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="co-Ordinator"
                    value={coOrdinator}
                    placeholder="Enter Co-Ordinator Name"
                    onChange={(e) => setCoOrdinator(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="industry"
                    value={industry}
                    placeholder="Enter Industry"
                    onChange={(e) => setIndustry(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="location"
                    value={location}
                    placeholder="Enter Location"
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />

                  <input
                    type="text"
                    id="address"
                    value={address}
                    placeholder="Enter Address"
                    onChange={(e) => setAddress(e.target.value)}
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
                    type="tel"
                    id="contact"
                    value={contact}
                    placeholder="Enter Phone Number"
                    onChange={(e) => setContact(e.target.value)}
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
                  <button type="submit" className="btn">Create Account</button>
                </form>
                <p>
                  Have an account ? <Link to="/login">Sign In</Link>
                </p>
              </div>
        }
      </Box>
    </StyledSignup>
  );
};

export default Signup;

const StyledSignup = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    }



  #form {
    width: 80%;
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
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

  select {
    padding: 0.7rem 0.5rem;
    margin-top: 0.7rem;
    height: 3rem;
    border: 0.1rem solid var(--color);
    border-radius: 0.3rem;
    font-size: 1rem;
    width: 82%;
}



  @media (max-width: 800px) {
    justify-content: center;
    
    #form {
      width: 100%;
    }
  }

`;

