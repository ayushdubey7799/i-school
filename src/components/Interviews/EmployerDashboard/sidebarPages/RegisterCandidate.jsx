import React, { useState } from 'react';
import styled from 'styled-components';
import uploadIcon from '../../../../assets/icons/upload.png'
import browseIcon from '../../../../assets/icons/browse.png'

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
`;


const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    font-weight: 600;
    margin-bottom: 8px;
  }

  .inputBox {
    width: 60%;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 2rem;
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

  
  .label {
    position: absolute;
    top: -0.8rem;
    left: 0rem;
    transition: color 0.3s;
  }

  input:focus + .label {
    color: var(--lightOrange);
  }


  .label {
    color: var(--color);
    font-size: 0.8rem;
    font-weight: 600;
  }

  .resumeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;
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

      <h3>Register New Candidate</h3>

      <Component>
        <Form>
          <div className="inputBox">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className='label'>Email</label>
          </div>


          <div className="inputBox">
            <input
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name" className='label'>FullName</label>
          </div>

          <div className="inputBox">
            <input
              type="tel"
              id="phone"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <label htmlFor="phone" className='label'>Phone</label>
          </div>


          <div className="inputBox">
            <input
              type="text"
              id="ref"
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              required
            />
            <label htmlFor="ref" className='label'>Referral/Source</label>
          </div>

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
