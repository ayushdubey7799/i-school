import React, { useEffect, useState } from "react";
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
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');

  const [company, setCompany] = useState('');
  const [legalName, setLegalName] = useState('');

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
    setLegalName('');
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
        navigate("/login");
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
      "legalName": legalName,
      "spocName": coOrdinator,
      "spocContact": contact,
      "spocEmail": email,
      "spocPassword": password,
    }



    const registerRes = await employerRegister(details);
    if (registerRes) {
      toast.success("Onboard request sent");
      navigate("/login");
    }
    else {
      toast.error("Error");
    }
  }


  // func for password validation
  useEffect(() => {
    // custom rules
    ValidatorForm.addValidationRule('hasSpecialCharacter', (value) => {
      return /[!@#$%^&*]/.test(value);
    });

    ValidatorForm.addValidationRule('hasCapitalLetter', (value) => {
      return /[A-Z]/.test(value);
    });

    ValidatorForm.addValidationRule('hasSmallLetter', (value) => {
      return /[a-z]/.test(value);
    });

    ValidatorForm.addValidationRule('hasNumberDigit', (value) => {
      return /\d/.test(value);
    });

    ValidatorForm.addValidationRule('hasMinLength', (value) => {
      return value.length >= 8;
    });

    // Cleanup the rules when component unmounts
    return () => {
      ValidatorForm.removeValidationRule('hasSpecialCharacter');
      ValidatorForm.removeValidationRule('hasCapitalLetter');
      ValidatorForm.removeValidationRule('hasSmallLetter');
      ValidatorForm.removeValidationRule('hasNumberDigit');
      ValidatorForm.removeValidationRule('hasMinLength');
    };
  }, [password]);

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
              <ValidatorForm onSubmit={handleSubmitJobSeeker}>
                <div className="inputBox">
                  <TextValidator
                    label="Name"
                    type="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
                    validators={['required', 'minStringLength:3', 'maxStringLength:29']}
                    fullWidth
                    inputProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                  />
                </div>


                <div className="inputBox">

                  <FormControl fullWidth required>
                    <InputLabel id="demo-simple-select-label" style={{ fontSize: '1rem' }}>Gender</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={gender}
                      label="Gender"
                      onChange={(e) => setGender(e.target.value)}
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    >
                      <MenuItem value='male'>Male</MenuItem>
                      <MenuItem value='female'>Female</MenuItem>
                      <MenuItem value='not-disclose'>Rather not disclose</MenuItem>
                    </Select>
                  </FormControl>
                </div>


                <div className="inputBox">
                  <TextValidator
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    errorMessages={["This field is required", 'Email is not valid']}
                    validators={['required', 'isEmail']}
                    fullWidth
                    inputProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                  />
                </div>


                <div className="inputBox">
                  <TextValidator
                    label="Phone number"
                    type="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
                    validators={['required', 'isNumber', 'minStringLength:10']}
                    fullWidth
                    inputProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                  />
                </div>


                <div className="inputBox">
                  <TextValidator
                    label="Password"
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    validators={['required', 'hasSpecialCharacter', 'hasCapitalLetter', 'hasSmallLetter', 'hasNumberDigit', 'hasMinLength', 'maxStringLength:29']}
                    errorMessages={['This field is required', 'Must contain a special character', 'Must contain a capital letter', 'Must contain a small letter', 'Must contain a number digit', 'Must be at least 8 characters long', 'Must be less than 30 chatacters long']}
                    fullWidth
                    inputProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                    InputLabelProps={{
                      sx: {
                        color: '#626264',
                        fontSize: '1rem',
                        fontWeight: '400'
                      },
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    id="eye"
                    onClick={togglePasswordVisibility}
                    className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                  />
                </div>

                <a className="terms" onClick={() => navigate('/terms')}>By creating an account, you agree to our Terms of Service and Privacy Policy.</a>

                <button type="submit" className="btn">Create Account</button>
              </ValidatorForm>
              <p>
                Have an account ? <Link to="/login" className="link link1">Sign In</Link>
              </p>
            </div>
            : value == 'employer' ?
              <div id="form">
                <ValidatorForm onSubmit={handleSubmitEmployer}>
                  <div className="inputBox">
                    <TextValidator
                      label="Company"
                      type="name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Co-ordinator name"
                      type="text"
                      value={coOrdinator}
                      onChange={(e) => setCoOrdinator(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
                      validators={['required', 'minStringLength:3', 'maxStringLength:29']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Legal Name"
                      type="text"
                      value={legalName}
                      onChange={(e) => setLegalName(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <FormControl fullWidth required>
                      <InputLabel id="demo-simple-select-label" style={{ fontSize: '1rem' }}>Industry</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        inputProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                      >
                        <MenuItem value='technology'>Technology</MenuItem>
                        <MenuItem value='telecom'>Telecom</MenuItem>
                        <MenuItem value='services'>Services</MenuItem>
                        <MenuItem value='manufacturing'>Manufacturing</MenuItem>
                        <MenuItem value='engineering'>Engineering</MenuItem>
                        <MenuItem value='bfsi'>BFSI</MenuItem>
                        <MenuItem value='commerce'>Commerce</MenuItem>
                        <MenuItem value='construction'>Construction</MenuItem>
                        <MenuItem value='powerEnergy'>Power & Energy</MenuItem>
                        <MenuItem value='healthcare'>Healthcare</MenuItem>
                        <MenuItem value='logistics'>Logistics</MenuItem>
                        <MenuItem value='agriculture'>Agriculture</MenuItem>
                        <MenuItem value='lifestyle'>Lifestyle</MenuItem>
                        <MenuItem value='others'>Others</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="inputBox">
                    <FormControl fullWidth required>
                      <InputLabel id="demo-simple-select-label" style={{ fontSize: '1rem' }}>Number of Employees</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Number of Employees"
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        inputProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                      >
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2-5'>2-5</MenuItem>
                        <MenuItem value='6-10'>6-10</MenuItem>
                        <MenuItem value='11-25'>11-25</MenuItem>
                        <MenuItem value='26-50'>26-50</MenuItem>
                        <MenuItem value='51-200'>51-200</MenuItem>
                        <MenuItem value='201-1000'>201-1000</MenuItem>
                        <MenuItem value='1001-10000'>1001-10000</MenuItem>
                        <MenuItem value='10001+'>10001+</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 3 characters long']}
                      validators={['required', 'minStringLength:3']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      errorMessages={["This field is required", 'Email is not valid']}
                      validators={['required', 'isEmail']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Phone number"
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
                      validators={['required', 'isNumber', 'minStringLength:10']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Password"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      validators={['required', 'hasSpecialCharacter', 'hasCapitalLetter', 'hasSmallLetter', 'hasNumberDigit', 'hasMinLength', 'maxStringLength:29']}
                      errorMessages={['This field is required', 'Must contain a special character', 'Must contain a capital letter', 'Must contain a small letter', 'Must contain a number digit', 'Must be at least 8 characters long', 'Must be less than 30 chatacters long']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      id="eye"
                      onClick={togglePasswordVisibility}
                      className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                    />
                  </div>

                  <a className="terms" onClick={() => navigate('/terms')}>By creating an account, you agree to our Terms of Service and Privacy Policy.</a>

                  <button type="submit" className="btn">Create Account</button>
                </ValidatorForm>
                <p>
                  Have an account ? <Link to="/login" className="link link1">Sign In</Link>
                </p>
              </div>

              : <div id="form">
                <ValidatorForm onSubmit={handleSubmitEmployer}>
                  <div className="inputBox">
                    <TextValidator
                      label="Company"
                      type="name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Co-ordinator name"
                      type="text"
                      value={coOrdinator}
                      onChange={(e) => setCoOrdinator(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
                      validators={['required', 'minStringLength:3', 'maxStringLength:29']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Legal Name"
                      type="text"
                      value={legalName}
                      onChange={(e) => setLegalName(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <FormControl fullWidth required>
                      <InputLabel id="demo-simple-select-label" style={{ fontSize: '1rem' }}>Industry</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Industry"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        inputProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                      >
                        <MenuItem value='technology'>Technology</MenuItem>
                        <MenuItem value='telecom'>Telecom</MenuItem>
                        <MenuItem value='services'>Services</MenuItem>
                        <MenuItem value='manufacturing'>Manufacturing</MenuItem>
                        <MenuItem value='engineering'>Engineering</MenuItem>
                        <MenuItem value='bfsi'>BFSI</MenuItem>
                        <MenuItem value='commerce'>Commerce</MenuItem>
                        <MenuItem value='construction'>Construction</MenuItem>
                        <MenuItem value='powerEnergy'>Power & Energy</MenuItem>
                        <MenuItem value='healthcare'>Healthcare</MenuItem>
                        <MenuItem value='logistics'>Logistics</MenuItem>
                        <MenuItem value='agriculture'>Agriculture</MenuItem>
                        <MenuItem value='lifestyle'>Lifestyle</MenuItem>
                        <MenuItem value='others'>Others</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="inputBox">
                    <FormControl fullWidth required>
                      <InputLabel id="demo-simple-select-label" style={{ fontSize: '1rem' }}>Number of Employees</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Number of Employees"
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                        inputProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                        InputLabelProps={{
                          sx: {
                            color: '#626264',
                            fontSize: '1rem',
                            fontWeight: '400'
                          },
                        }}
                      >
                        <MenuItem value='1'>1</MenuItem>
                        <MenuItem value='2-5'>2-5</MenuItem>
                        <MenuItem value='6-10'>6-10</MenuItem>
                        <MenuItem value='11-25'>11-25</MenuItem>
                        <MenuItem value='26-50'>26-50</MenuItem>
                        <MenuItem value='51-200'>51-200</MenuItem>
                        <MenuItem value='201-1000'>201-1000</MenuItem>
                        <MenuItem value='1001-10000'>1001-10000</MenuItem>
                        <MenuItem value='10001+'>10001+</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Location"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 2 characters long']}
                      validators={['required', 'minStringLength:2']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Address"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      errorMessages={["This field is required", 'Must be a least 3 characters long']}
                      validators={['required', 'minStringLength:3']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      errorMessages={["This field is required", 'Email is not valid']}
                      validators={['required', 'isEmail']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Phone number"
                      type="tel"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
                      validators={['required', 'isNumber', 'minStringLength:10']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                  </div>

                  <div className="inputBox">
                    <TextValidator
                      label="Password"
                      type={passwordVisible ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      validators={['required', 'hasSpecialCharacter', 'hasCapitalLetter', 'hasSmallLetter', 'hasNumberDigit', 'hasMinLength', 'maxStringLength:29']}
                      errorMessages={['This field is required', 'Must contain a special character', 'Must contain a capital letter', 'Must contain a small letter', 'Must contain a number digit', 'Must be at least 8 characters long', 'Must be less than 30 chatacters long']}
                      fullWidth
                      inputProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: '#626264',
                          fontSize: '1rem',
                          fontWeight: '400'
                        },
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      id="eye"
                      onClick={togglePasswordVisibility}
                      className={`eye-icon ${passwordVisible ? "visible" : ""}`}
                    />
                  </div>

                  <a className="terms" onClick={() => navigate('/terms')}>By creating an account, you agree to our Terms of Service and Privacy Policy.</a>

                  <button type="submit" className="btn">Create Account</button>
                </ValidatorForm>
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
  
  .MuiFormHelperText-root {
    font-size: 0.6rem;
  }

  .terms {
    font-size: 0.7rem;
    font-weight: 400;
    cursor: pointer;
    text-decoration: none;
  }

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
    margin-top: 1rem;
    }

    .link {
      color: var(--lightOrange);
      text-decoration: none;
    }

    .link1 {
      color: var(--color);
    }

    .link1:hover {
      font-weight: 600;
      text-decoration: underline;
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
    justify-content: center;
    position: relative;
    margin-top: 1rem;
  }

  input {
    width: 100%;
    border-radius: 0.3rem;
    background-color: var(--white);
  }

  input:focus {
    outline-color: var(--lightOrange);
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
  top: 50%;
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

