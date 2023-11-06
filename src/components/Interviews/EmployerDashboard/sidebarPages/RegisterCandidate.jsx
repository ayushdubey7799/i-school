import React, { useState } from 'react';
import styled from 'styled-components';
import browseIcon from '../../../../assets/icons/browse.png'
import { TextField } from '@mui/material';

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
    padding-top: 0.9rem;
    padding-bottom: 0.8rem;
    font-size: 0.9rem;
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

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [ref, setRef] = useState('');


  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  const handleRegister = () => {

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
            required />

          <TextField id="outlined-basic" label="FullName" variant="outlined"
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />

          <TextField id="outlined-basic" label="Phone" variant="outlined"
            type='tel'
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <TextField id="outlined-basic" label="Referral/Source" variant="outlined"
            type='text'
            value={ref}
            onChange={(e) => setRef(e.target.value)}
          />

          <div className='resumeBox'>
            <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName}</span></Label>
            <FileInput
              id='input'
              type="file"
              accept=".pdf,.doc,.docx"
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
