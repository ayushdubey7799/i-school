import React, { useState } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import EmployerDetails from '../EmployerDetails';
import CreateQuestionForm from '../CreateQuestionForm';

const Container = styled.div`
  width:90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Component = styled.div`
  width: 100%;
  height: 16.66%; 
  border: 1px solid #ccc;
  padding: 2rem 1rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.8rem;

`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-size: 14px;
  margin-right: 10px;
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


const CreateQuestion = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <Container>
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={CreateQuestionForm} />
      <Component>
        <span>Create Question</span>
        <EditButton onClick={() => setOpenBasic(true)}>Create</EditButton>
      </Component>
    </Container>
  );
};

export default CreateQuestion;
