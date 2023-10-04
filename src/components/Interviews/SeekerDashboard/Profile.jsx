import React, { useState } from 'react';
import styled from 'styled-components';
import BasicDetails from './BasicDetails';
import ModalHOC from './ModalHOC';
import KeySkills from './Keyskills';
import Education from './Education';
import Projects from './Projects';
import ProfessionalInfo from './ProfessionalInfo';
import editIcon from '../../../assets/icons/edit.png'

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
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.9rem;
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  width: 2rem;
  margin-right: 0.6rem;

  img {
    width: 90%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Profile = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
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

  const DecideComponent = () => {
    return <div>working</div>
  }
  return (
    <Container>
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={BasicDetails} />
      <Component>
        <span>Basic Details</span>
        <EditButton onClick={() => setOpenBasic(true)}><img src={editIcon}/></EditButton>
      </Component>
      <ModalHOC openNewInterviewModal={openSkills} setOpenNewInterviewModal={setOpenSkills} Component={ProfessionalInfo} />
      <Component>
        <span>Professional Information</span>
        <EditButton onClick={() => setOpenSkills(true)}><img src={editIcon}/></EditButton>
      </Component>
      <Component>
        <span>Verification</span>
        <EditButton><img src={editIcon}/></EditButton>
      </Component>

      <ModalHOC openNewInterviewModal={openEducation} setOpenNewInterviewModal={setOpenEducation} Component={Education} />
      <Component>
        <span>Education</span>
        <EditButton onClick={() => setOpenEducation(true)}><img src={editIcon}/></EditButton>
      </Component>
      <ModalHOC openNewInterviewModal={openProjects} setOpenNewInterviewModal={setOpenProjects} Component={Projects} />
      <Component>
        <span>Projects</span>
        <EditButton onClick={() => setOpenProjects(true)}><img src={editIcon}/></EditButton>
      </Component>

      <Component>

        <Form onSubmit={handleSubmit}>
          <span>Resume</span>
          <br />
          <Label>Choose a resume file:</Label>
          <FileInput
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <SubmitButton type="submit">Upload</SubmitButton>
        </Form>
      </Component>

    </Container>
  );
};

export default Profile;
