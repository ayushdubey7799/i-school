import React, { useState } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import EmployerDetails from '../EmployerDetails';
import editIcon from '../../../../assets/icons/edit.png'

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
  border: 0.08rem solid #ccc;
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


const EmployeProfile = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <Container>
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={EmployerDetails} />
      <Component>
        <span>Employer Details</span>
        <EditButton onClick={() => setOpenBasic(true)}><img src={editIcon} /></EditButton>
      </Component>
    </Container>
  );
};

export default EmployeProfile;
