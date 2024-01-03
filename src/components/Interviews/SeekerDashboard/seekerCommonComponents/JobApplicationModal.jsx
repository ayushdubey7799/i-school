import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addJobApplication } from '../../../../functions/api/jobApplication/addJobApplication';
import { useSelector } from 'react-redux';
import { getAllResumes } from '../../../../functions/api/jobSeekers/getAllResumes';
import { toast } from 'react-toastify';

// Dummy data for resumes
const resumeData = [
  { id: 1, filename: 'Resume_1.pdf' },
  { id: 2, filename: 'Resume_2.pdf' },
  // Add more resumes as needed
];

// Styled components
const ModalWrapper = styled.div`
width: 100%;
height: 80%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

const ResumeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 10px;
`;

const AddButton = styled.button`
 
  background-color: var(--lightOrange);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const SendApplication = styled.button`
  align-self: center;
  background-color: var(--lightOrange);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const JobApplicationModal = ({jdId,empClientCode,handleClose}) => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);
  const profileId = useSelector(state => state.auth.userData?.user?.profileId);
  const [resumeId, setResumeId] = useState(null);
  const [resumeData,setResumeData] = useState([]);
  useEffect(() => {
   const getData = async () => {
    const res = await getAllResumes(profileId,accessToken);
    if(res){
      setResumeData(res?.data);
    }
   }
   getData();
  },[])

  const handleCheckboxChange = (id) => {
    setResumeId(id);
  };

  const handleAddNewResume = () => {
    console.log('Add new resume functionality goes here.');
  };

  const handleApply = async () => {
    const payload = {
      clientCode: empClientCode,
      jdId: jdId,
      resumeId: resumeId
    }
    console.log(payload);
     const res = await addJobApplication(payload,accessToken,clientCode);
     if(res){
handleClose();
      toast.success("Applied Successfully");
    }
  }

  return (
    <ModalWrapper>
      <h2>Select Resume</h2>
      {resumeData.map((resume) => (
        <ResumeItem key={resume.id}>
          <Checkbox
            checked={resumeId == resume.id}
            onChange={() => handleCheckboxChange(resume.id)}
          />
          {resume.srcFilename}
        </ResumeItem>
      ))}
      <AddButton onClick={handleAddNewResume}>Add New</AddButton>
      <SendApplication onClick={handleApply}>Send Application</SendApplication>

      {/* Add apply button or other actions as needed */}
    </ModalWrapper>
  );
};

export default JobApplicationModal;
