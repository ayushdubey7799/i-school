import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { register } from "../functions/api/authentication/register";
import { toast } from "react-toastify";
import validate from "../functions/validate";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
import logo from '../assets/IntelliViewLogo.png'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import registerIcon1 from '../assets/registerIcon1.jpg'
import registerIcon2 from '../assets/registerIcon2.jpg'
import registerIcon3 from '../assets/registerIcon3.jpg'
import { employerRegister } from "../functions/api/employers/authentication/employerRegister";


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const [company, setCompany] = useState('');
  const [coOrdinator, setCoOrdinator] = useState('');
  const [employees, setEmployees] = useState('');
  const [address, setAddress] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');


  const [passwordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState("job-seeker");



  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const handleChange = (event, newValue) => {
    setValue(newValue);

    setName('');
    setEmail('');
    setPassword('');
    setContact('');
    setGender('');
    setCompany('');
    setCoOrdinator('');
    setEmployees('');
    setAddress('');
    setLocation('');
    setIndustry('');
    setPasswordVisible(false);

    console.log(newValue);
  };



  const handleSubmitJobSeeker = async (e) => {
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
        navigate("/dashboard/jobseeker");
      }
      else {
        toast.error("Email already exists");
      }
    }
  };


  const handleSubmitEmployer = async (e) => {
    e.preventDefault();
   
    const details = {
      "address": address,
      "city": location,
      "companyName": company,
      "companySize": employees,
      "country": "India",
      "industry": industry,
      "onboardMethod": "SELF",
      "spocName": coOrdinator,
      "spocContact": contact,
      "spocEmail": email,
      "spocPassword": password,
    }

    const registerRes = await employerRegister(details);
    if (registerRes) {
      toast.success("Successfully signed up");
      navigate("/dashboard/employer");
    }
    else {
      toast.error("Error");
    }
    }



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
          style={{ width: '35rem', borderRadius: '3rem', backgroundColor: 'var(--lightOrange)' }}
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
            classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
          />
          <Tab
            value="employer"
            label="Employer"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "0.8rem",
            }}
            classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
          />
          <Tab
            value="recruitment-agency"
            label="Recruitment Agency"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "0.8rem",
            }}
            classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
          />
        </Tabs>
        {
          value == 'job-seeker' ?
            <div id="form">
              <p>Enter your details below to create your account.</p>
              <form onSubmit={handleSubmitJobSeeker}>

                <div className="inputBox">
                  <input
                    type="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name" className="label">Name</label>
                </div>

                <div className="inputBox">
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select
                    </option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='not-disclose'>Rather not disclose</option>
                  </select>
                  <label htmlFor="gender">Gender</label>
                </div>


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
                    type="tel"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  <label htmlFor="contact">Phone number</label>
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

                <button type="submit" className="btn">Create Account</button>
              </form>
              <p>
                Have an account ? <Link to="/login" className="link link1">Sign In</Link>
              </p>
            </div>
            : value == 'employer' ?
              <div id="form">
                <p>Enter your details below to create your account.</p>
                <form onSubmit={handleSubmitEmployer}>

                  <div className="inputBox">
                    <input
                      type="name"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                    <label htmlFor="company">Company</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="co-Ordinator"
                      value={coOrdinator}
                      onChange={(e) => setCoOrdinator(e.target.value)}
                      required
                    />
                    <label htmlFor="co-Ordinator">Co-ordinator name</label>
                  </div>

                  <div className="inputBox">
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      id="industry"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value='technology'>Technology</option>
                      <option value='telecom'>Telecom</option>
                      <option value='services'>Services</option>
                      <option value='manufacturing'>Manufacturing</option>
                      <option value='engineering'>Engineering</option>
                      <option value='bfsi'>BFSI</option>
                      <option value='commerce'>Commerce</option>
                      <option value='construction'>Construction</option>
                      <option value='powerEnergy'>Power & Energy</option>
                      <option value='healthcare'>Healthcare</option>
                      <option value='logistics'>Logistics</option>
                      <option value='agriculture'>Agriculture</option>
                      <option value='lifestyle'>Lifestyle</option>
                      <option value='others'>Others</option>
                    </select>
                    <label htmlFor="industry">Industry</label>
                  </div>

                  <div className="inputBox">
                    <select
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      id="employees"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value='1'>1</option>
                      <option value='2-5'>2-5</option>
                      <option value='6-10'>6-10</option>
                      <option value='11-25'>11-25</option>
                      <option value='26-50'>26-50</option>
                      <option value='51-200'>51-200</option>
                      <option value='201-1000'>201-1000</option>
                      <option value='1001-10000'>1001-10000</option>
                      <option value='10001+'>10001+</option>
                    </select>
                    <label htmlFor="employees">Number of Employees</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                    <label htmlFor="location">Location</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <label htmlFor="address">Address</label>
                  </div>

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
                      type="tel"
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                    <label htmlFor="contact">Phone number</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
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

                  <button type="submit" className="btn">Create Account</button>
                </form>
                <p>
                  Have an account ? <Link to="/login" className="link link1">Sign In</Link>
                </p>
              </div>

              : <div id="form">
                <p>Enter your details below to create your account.</p>
                <form onSubmit={handleSubmitEmployer}>

                  <div className="inputBox">
                    <input
                      type="name"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                    <label htmlFor="company">Company</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="co-Ordinator"
                      value={coOrdinator}
                      onChange={(e) => setCoOrdinator(e.target.value)}
                      required
                    />
                    <label htmlFor="co-Ordinator">Co-ordinator name</label>
                  </div>

                  <div className="inputBox">
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      id="industry"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value='technology'>Technology</option>
                      <option value='telecom'>Telecom</option>
                      <option value='services'>Services</option>
                      <option value='manufacturing'>Manufacturing</option>
                      <option value='engineering'>Engineering</option>
                      <option value='bfsi'>BFSI</option>
                      <option value='commerce'>Commerce</option>
                      <option value='construction'>Construction</option>
                      <option value='powerEnergy'>Power & Energy</option>
                      <option value='healthcare'>Healthcare</option>
                      <option value='logistics'>Logistics</option>
                      <option value='agriculture'>Agriculture</option>
                      <option value='lifestyle'>Lifestyle</option>
                      <option value='others'>Others</option>
                    </select>
                    <label htmlFor="industry">Industry</label>
                  </div>


                  <div className="inputBox">
                    <select
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      id="employees"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value='1'>1</option>
                      <option value='2-5'>2-5</option>
                      <option value='6-10'>6-10</option>
                      <option value='11-25'>11-25</option>
                      <option value='26-50'>26-50</option>
                      <option value='51-200'>51-200</option>
                      <option value='201-1000'>201-1000</option>
                      <option value='1001-10000'>1001-10000</option>
                      <option value='10001+'>10001+</option>
                    </select>
                    <label htmlFor="employees">Number of Employees</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                    <label htmlFor="location">Location</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <label htmlFor="address">Address</label>
                  </div>

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
                      type="tel"
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                    />
                    <label htmlFor="contact">Phone number</label>
                  </div>

                  <div className="inputBox">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
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

                  <button type="submit" className="btn">Create Account</button>
                </form>
                <p>
                  Have an account ? <Link to="/login" className="link link1">Sign In</Link>
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

    .link {
      color: var(--lightOrange);
      text-decoration: none;
    }

    .link1 {
      color: var(--color);
    }

  #form {
    width: 80%;
    background-color: var(--backgroundColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    width: 30%;
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
    height: 2.5rem;
    border: 0.05rem solid lightgrey;
    background-color: var(--white);
    border-radius: 0.3rem;
    font-size: 0.9rem;
    width: 102%;
}


select:focus {
  outline-color: var(--lightOrange);
}

select:focus + label {
  color: var(--lightOrange);
}

option {
  font-size: 0.9rem;
  font-weight: 400;
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

`;

