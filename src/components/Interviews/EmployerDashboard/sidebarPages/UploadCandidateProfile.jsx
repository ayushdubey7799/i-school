import React, { useState } from 'react'
import styled from 'styled-components'
import browseIcon from '../../../../assets/icons/uploadBrowseIcon.png'
import { bulkUpload } from '../../../../functions/api/resume/bulkUpload';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Success from '../../../commonComponents/infoDialog/Success';
import Error from '../../../commonComponents/infoDialog/Error';


const UploadCandidateProfile = () => {
  const [files, setFiles] = useState([]);
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [errorPopup, setErrorPopup] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleErrorPopUpClose = () => {
    setErrorPopup(false);
  }

  const handleSuccessPopUpClose = () => {
    setSuccessPopup(false);
  }

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  const handleFileUpload = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`files`, file);
        // console.log(file.name);
      });

      // console.log(formData.getAll("files"))

      const res = await bulkUpload(formData, accessToken, clientCode);

      if (res) {
        setSuccessPopup("Profiles uploaded successfully");
        setFiles([]);
        setLoading(false);
      }
    } catch (error) {
      // Handle network errors or unexpected issues
      console.error("Error during file upload:", error);
      const errMsg = error.response.data.notify.message || "An error occurred. Please try again."
      setErrorMsg(errMsg);
      setLoading(false);
      setErrorPopup(true);
      setFiles([]);
    }
  };


  return (
    <Box>
      {loading && <span>Loading...</span>}
      {errorPopup && <Error handleClose={handleErrorPopUpClose} open={errorPopup} msg={errorMsg} handleRetryFunc={handleFileUpload} />}
      {successPopup && <Success handleClose={handleSuccessPopUpClose} open={successPopup} msg='Profiles uploaded successfully' />}
      <span className='title'>Upload Profiles</span>
      <div className='resumeBox'>
        <Label htmlFor='input'><img src={browseIcon} />
          <span>{files.map((item) => <p>{item.name}</p>)}</span>
        </Label>
        <input
          id='input'
          type="file"
          // accept=".zip,.rar,.7z"
          accept='*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
          multiple
        />
        <span>Select Folder or Zip File</span>
      </div>
      <button onClick={handleFileUpload} className='registerBtn'>Upload</button>
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