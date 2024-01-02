import React, { useState } from 'react';
import styled from 'styled-components';

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

const JobApplicationModal = ({ showModal, closeModal }) => {
  // State to track selected resumes
  const [selectedResumes, setSelectedResumes] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (resumeId) => {
    setSelectedResumes([resumeId]);
  };

  // Dummy function for adding a new resume
  const handleAddNewResume = () => {
    console.log('Add new resume functionality goes here.');
    // Implement logic to add a new resume
  };

  return (
    <ModalWrapper>
      <h2>Select Resume</h2>
      {resumeData.map((resume) => (
        <ResumeItem key={resume.id}>
          <Checkbox
            checked={selectedResumes.includes(resume.id)}
            onChange={() => handleCheckboxChange(resume.id)}
          />
          {resume.filename}
        </ResumeItem>
      ))}
      <AddButton onClick={handleAddNewResume}>Add New</AddButton>
      <SendApplication onClick={handleAddNewResume}>Send Application</SendApplication>

      {/* Add apply button or other actions as needed */}
    </ModalWrapper>
  );
};

export default JobApplicationModal;
