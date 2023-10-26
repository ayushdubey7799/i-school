import React, { useState } from 'react'
import styled from 'styled-components'
import uploadIcon from '../../../../assets/icons/upload.png'
import browseIcon from '../../../../assets/icons/browse.png'

const EnhanceResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the file upload here, for example, by sending the file to a server.
    if (selectedFile) {
      console.log('Selected File:', selectedFile);
      // You can add code to upload the file to a server or perform any other actions here.
    } else {
      console.log('No file selected.');
    }
  };


  return (
    <Component>
      <Form onSubmit={handleSubmit}>
        <>
          <span className='title'>Upload your current Resume</span>
          <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName}</span></Label>
          <FileInput
            id='input'
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </>
        <SubmitButton type="submit">Enhance Resume</SubmitButton>
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

  span {
    font-weight: 600;
    margin-bottom: 8px;
  }
  .title {
    font-weight: 600;
    font-size: 1rem;
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