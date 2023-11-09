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
  justify-content: space-between;
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
    font-size: 1rem;
    margin-top: 2rem;
  }

  .title {
    margin-bottom: 4rem;
    font-size: 1.1rem;
    font-weight: 500;

  }
`;


const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  gap: 1rem;

  span {
    font-weight: 600;
    margin-bottom: 8px;
  }

  #outlined-basic {
    padding: 0.5rem 0.5rem;
    background-color: #F6F6FB;
  }
  
  .resumeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    margin-top: 0rem;
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
  const [ref, setRef] = useState('');
  const [refText, setRefText] = useState('');
 const [source,setSource] = useState('');

 const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode)

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  const handleRegister = async () => {
  const formData = new FormData();
  formData.append("file",selectedFile);
  formData.append("payload",JSON.stringify({
    email,
    firstName,
    lastName,
    contact,
    source
  }))
  const res = await addProfileWithFile(formData,accessToken,clientCode);
  console.log(res);
 if(res){
  toast.success("Profile successfully added");
  setEmail("");
  setContact("");
  setFirstName("");
  setLastName("");
  setSource("");
  setSelectedFile(null);
 }
  
  }

  const DecideComponent = () => {
    return <div>working</div>
  }
  return (
    <Container>

      <Component>
        <span className='title'>Register New Candidate</span>
        <Form>
          <TextField id="outlined-basic" label="Email" variant="outlined"
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            }} />

          <TextField id="outlined-basic" label="First Name" variant="outlined"
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
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
            }} />

<TextField id="outlined-basic" label="Last Name" variant="outlined"
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
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
            }} />

          <TextField id="outlined-basic" label="Phone" variant="outlined"
            type='tel'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
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
            required
          />

          <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
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

          {ref && <TextField id="outlined-basic" label="Referral/Source text" variant="outlined"
            type='text'
            value={refText}
            onChange={(e) => setRefText(e.target.value)}
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
          />}

          <div className='resumeBox'>
            <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName}</span></Label>
            <FileInput
              id='input'
              type="file"
              accept="*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <span>Select Resume</span>
          </div>
        </Form>

        <button onClick={handleRegister} className='registerBtn'>Register Candidate</button>
      </Component>

    </Container>
  );
};

export default RegisterCandidate;
