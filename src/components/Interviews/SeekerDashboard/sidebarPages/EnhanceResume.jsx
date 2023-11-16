import React, { useState } from 'react'
import styled from 'styled-components'
import uploadIcon from '../../../../assets/icons/upload.png'
import browseIcon from '../../../../assets/icons/browse.png'

const EnhanceResume = () => {
  const [selectedResumeFile, setSelectedResumeFile] = useState(null);
  const [selectedResumeFileName, setSelectedResumeFileName] = useState('');

  const [selectedJDFile, setSelectedJDFile] = useState(null);
  const [selectedJDFileName, setSelectedJDFileName] = useState('');

  const handleResumeFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedResumeFile(file);
      setSelectedResumeFileName(file.name);
    }
  };

  const handleJDFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedJDFile(file);
      setSelectedJDFileName(file.name);
    }
  };

  const handleSubmit = () => {

  };


  return (
    <Component>
      <Form onSubmit={handleSubmit}>
        <div className='mainBox'>
          <div className='resumeBox'>
            <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedResumeFileName}</span></Label>
            <FileInput
              id='input'
              type="file"
              accept=".doc, .pdf"
              onChange={handleResumeFileChange}
              style={{ display: 'none' }}
            />
            <span>Select Resume</span>
          </div>

          <div className='resumeBox'>
            <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedJDFileName}</span></Label>
            <FileInput
              id='input'
              type="file"
              accept=".doc, .pdf"
              onChange={handleJDFileChange}
              style={{ display: 'none' }}
            />
            <span>Select JD</span>
          </div>
        </div>
        <SubmitButton type="submit">Create Cover Letter</SubmitButton>
      </Form>
    </Component>
  )
}

export default EnhanceResume

const Component = styled.div`
  width: 90%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;

  .mainBox {
    display: flex;
    gap: 2rem;
    margin: 0 0 1rem 0;
  }

  .resumeBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-weight: 600;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .title {
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const Label = styled.label`
  font-weight: 600;
  margin: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;


  img {
    width: 2.3rem;
  }
  
  span {
    color: var(--color);
    
  }
`;


const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 0.6rem 1.1rem;
  background-color: var(--lightOrange);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;
`;