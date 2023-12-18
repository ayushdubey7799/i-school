import React, { useState } from 'react';
import styled from 'styled-components';
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
      <EmployerProfileDetails />
    </Container>
  );
};

export default EmployeProfile;
