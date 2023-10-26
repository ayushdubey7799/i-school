import React, { useState } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import EmployerDetails from '../EmployerDetails';
import editIcon from '../../../../assets/icons/edit.png'

const Container = styled.div`
  width: 85%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Component = styled.div`
  width: 100%;
  border: 0.08rem solid #ccc;
  padding: 1.5rem 1rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 0.7rem;
  font-size: 0.9rem;
  background-color: var(--white);
`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: var(--lightOrange);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: var(--white);
  

  img {
    display: none;
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
      {/* <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={EmployerDetails} /> */}
      <Component>
        {/* <EditButton onClick={() => setOpenBasic(true)}><img src={editIcon} /> Edit Profile</EditButton> */}
        <EmployerDetails/>
      </Component>
    </Container>
  );
};

export default EmployeProfile;
