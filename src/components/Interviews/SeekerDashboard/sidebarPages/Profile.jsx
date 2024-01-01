import React, { useState } from 'react';
import styled from 'styled-components';
import editIcon from '../../../../assets/icons/edit.png'
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
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);
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
  align-items: center;
  justify-content: center;
  width: 100%;

  span {
    font-weight: 600;
    margin-bottom: 8px;
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
  padding: 0.4rem 4rem;
  background-color: var(--lightOrange);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  

  img {
    width: 2rem;
  }
`;


const Profile = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openEducation, setOpenEducation] = useState(false);
  const [openProjects, setOpenProjects] = useState(false);

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
  
  };

  const DecideComponent = () => {
    return <div>working</div>
  }
  return (
    <Container>
      Profile Page
    </Container>
  );
};

export default Profile;
