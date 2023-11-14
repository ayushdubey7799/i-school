import React, { useState } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import EmployerDetails from '../EmployerDetails';
import editIcon from '../../../../assets/icons/edit.png'
import EmployerProfileDetails from './EmployerProfileDetails';

const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;



const EmployeProfile = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <Container>
      {/* <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={EmployerDetails} /> */}
      {/* <EditButton onClick={() => setOpenBasic(true)}><img src={editIcon} /> Edit Profile</EditButton> */}

      <EmployerProfileDetails />
    </Container>
  );
};

export default EmployeProfile;
