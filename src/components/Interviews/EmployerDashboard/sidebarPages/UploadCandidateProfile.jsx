import React, { useState } from 'react'
import styled from 'styled-components'
import browseIcon from '../../../../assets/icons/uploadBrowseIcon.png'



const UploadCandidateProfile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setSelectedFile(file);
            setSelectedFileName(file.name);
        }
    };

    const handleProfileUpload = () => {

    }


    return (
        <Box>
            <span className='title'>Upload Profiles</span>
            <div className='resumeBox'>
                <Label htmlFor='input'><img src={browseIcon} /> <span>{selectedFileName}</span></Label>
                <FileInput
                    id='input'
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <span>Select Profile</span>
            </div>
            <button onClick={handleProfileUpload} className='registerBtn'>Upload Profile</button>
        </Box>
    )
}

export default UploadCandidateProfile


const Box = styled.div`
  width: 88%;
  border: 1px solid #ccc;
  padding: 2rem 1rem;;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);
  margin: 1rem 0;


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
    margin-bottom: 2rem;
    font-size: 1.1rem;
    font-weight: 500;

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