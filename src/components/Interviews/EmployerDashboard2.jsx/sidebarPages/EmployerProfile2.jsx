import React, { useState } from 'react';
import styled from 'styled-components';
import EmployerProfileDetails2 from './EmployerProfileDetails2';


const Container = styled.div`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;



const EmployerProfile2 = () => {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <Container>

            <EmployerProfileDetails2 />
        </Container>
    );
};

export default EmployerProfile2;
