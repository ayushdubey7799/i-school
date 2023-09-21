import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 0.5rem auto;
`;

const Square = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  border-radius: 1rem;
  font-size: 0.8rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.5)
`;

const Content = styled.div`
  text-align: center;
`;

const Metrics = () => {
  return (
    <Container>
      <Square>
        <Content>Recommended Jobs</Content>
      </Square>
      <Square>
        <Content>Applied Jobs</Content>
      </Square>
      <Square>
        <Content>Interviews Coming Up</Content>
      </Square>
      <Square>
        <Content>Interviews Completed</Content>
      </Square>
    </Container>
  );
};

export default Metrics;
