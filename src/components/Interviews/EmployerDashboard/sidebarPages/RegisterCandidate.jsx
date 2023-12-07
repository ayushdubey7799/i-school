import React, { useState } from 'react';
import styled from 'styled-components';
import browseIcon from '../../../../assets/icons/browse.png'
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { addProfileWithFile } from '../../../../functions/api/resume/addProfileWithFile';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Error from '../../../commonComponents/infoDialog/Error';
import Created from '../../../commonComponents/infoDialog/Created';

const Container = styled.div`
  width:90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 4rem;
`;

const Component = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 1.5rem 1rem;;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);


  .registerBtn {
    padding: 0.5rem 0.8rem;
    background-color: var(--lightOrange);
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 600;
    margin-top: 1rem;
    align-self: center;
    font-family: Quicksand, sans-serif;
  }

  .title {
    margin-bottom: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    gap: 1rem;

    .MuiFormHelperText-root {
      font-size: 0.6rem;
    }

    span {
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
  
    @media (max-width: 2000px) {
      #outlined-basic {
        padding: 0.75rem 0.5rem;
        background-color: #F6F6FB;
      }
    }
  
    @media (max-width: 1700px) {
      #outlined-basic {
        padding: 0.85rem 0.5rem;
        background-color: #F6F6FB;
      }
    }
  
    @media (max-width: 1350px) {
      #outlined-basic {
        padding: 0.95rem 0.5rem;
        background-color: #F6F6FB;
      }
    }
  
    @media (max-width: 1200px) {
      #outlined-basic {
        padding: 1rem 0.5rem;
        background-color: #F6F6FB;
      }
    }
    
    .resumeBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 0.5rem;
      margin-top: 0rem;
    }
  }
`;



const Label = styled.label`
  font-weight: 600;
  margin: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;


  img {
    width: 2.5rem;
  }
  
  span {
    color: var(--color);
    
  }
`;

const FileInput = styled.input`
  margin-bottom: 0rem;
`;



const RegisterCandidate = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [refText, setRefText] = useState('');
  const [source, setSource] = useState('');

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode)

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  }

  const handleSuccessPopUpClose = () => {
    setSuccessPopup(false);
  }

  const handleRegister = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("payload", JSON.stringify({
        email,
        firstName,
        lastName,
        contact,
        source
      }));

      const res = await addProfileWithFile(formData, accessToken, clientCode);

      if (res) {
        setLoading(false);
        setSuccessPopup(true);
        setEmail("");
        setContact("");
        setFirstName("");
        setLastName("");
        setSource("");
        setSelectedFile(null);
        setSelectedFileName('');
        setRefText('');
      }
    } catch (error) {
      const errMsg = error.response.data.notify.message || "An error occurred. Please try again."
      setErrorMsg(errMsg);
      setLoading(false);
      setErrorPopup(true);
    }
  };

  { errorMsg && console.log(errorMsg) }

  const DecideComponent = () => {
    return <div>working</div>
  }

  return (
    <Container>
      {errorPopup && <Error handleClose={handleErrorPopUpClose} open={errorPopup} msg={errorMsg} handleRetryFunc={handleRegister} />}
      {successPopup && <Created handleClose={handleSuccessPopUpClose} open={successPopup} msg='Profile successfully created' />}
      <Component>
        <span className='title'>Register New Candidate</span>
        <ValidatorForm onSubmit={handleRegister}>
          <TextValidator id="outlined-basic" label="Email" variant="outlined"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            errorMessages={["This field is required", 'Email is not valid']}
            validators={['required', 'isEmail']}
            required
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            fullWidth />



          <TextValidator id="outlined-basic" label="First Name" variant="outlined"
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
            validators={['required', 'minStringLength:3', 'maxStringLength:29']}
            fullWidth
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }} />

          <TextValidator id="outlined-basic" label="Last Name" variant="outlined"
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
            validators={['required', 'minStringLength:3', 'maxStringLength:29']}
            fullWidth
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }} />

          <TextValidator id="outlined-basic" label="Phone" variant="outlined"
            type='tel'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
            validators={['required', 'isNumber', 'minStringLength:10']}
            fullWidth
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            required
          />

          <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth required>
            <InputLabel id="demo-simple-select-label" style={{ fontSize: '0.8rem' }}>Select Referral/Source</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={source}
              label="Select Referral/Source"
              onChange={(e) => setSource(e.target.value)}
              size='small'
              inputProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              InputLabelProps={{
                sx: {
                  color: '#626264',
                  fontSize: '0.8rem',
                  fontWeight: '400'
                },
              }}
              sx={{
                padding: '0rem 0 0.5rem 0',
              }}
            >
              <MenuItem value='EmployeeReferral'>Employee Referral</MenuItem>
              <MenuItem value='Agency'>Agency</MenuItem>
              <MenuItem value='InternalSourcing'>Internal Sourcing</MenuItem>
              <MenuItem value='SocialMedia'>Social Media</MenuItem>
              <MenuItem value='CompanyPortal'>Company Portal</MenuItem>
              <MenuItem value='Other'>Others</MenuItem>
            </Select>
          </FormControl>

          {source && <TextValidator id="outlined-basic" label="Referral/Source text" variant="outlined"
            type='text'
            value={refText}
            onChange={(e) => setRefText(e.target.value)}
            errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
            validators={['required', 'minStringLength:3', 'maxStringLength:29']}
            fullWidth
            inputProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
            InputLabelProps={{
              sx: {
                color: '#626264',
                fontSize: '0.8rem',
                fontWeight: '400'
              },
            }}
          />}

          <div className='resumeBox'>
            <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName}</span></Label>
            <FileInput
              id='input'
              type="file"
              accept="*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              required
            />
            <span>Select Resume</span>
          </div>
          <button className='registerBtn' type='submit'>Register Candidate</button>
        </ValidatorForm>

      </Component>
    </Container>
  );
};

export default RegisterCandidate;
