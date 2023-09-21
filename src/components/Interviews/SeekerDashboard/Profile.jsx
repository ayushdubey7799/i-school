import React from 'react';
import styled from 'styled-components';

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

const Profile = () => {
  return (
    <Container>
      <Component>
        <span>Basic Details</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Resume</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Key Skills</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Education</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Projects</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Accomplishments</span>
        <EditButton>Edit</EditButton>
      </Component>
      <Component>
        <span>Verification</span>
        <EditButton>Edit</EditButton>
      </Component>
    </Container>
  );
};

export default Profile;
