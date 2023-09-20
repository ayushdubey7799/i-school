import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  margin-top: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:2rem;
  padding: 1rem;
  font-size: 0.8rem;
  background-color: white;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.5)
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? 'blue' : 'black')};
`;

const JobSeekerSidebar = ({currentItem,setCurrentItem}) => {

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <Container>
      <MenuItem isSelected={currentItem === 'job search'} onClick={() => handleItemClick('job search')}>
        Job Search
      </MenuItem>
      <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
        Profile
      </MenuItem>
      <MenuItem isSelected={currentItem === 'verification'} onClick={() => handleItemClick('verification')}>
        Verification
      </MenuItem>
      <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
        Inbox
      </MenuItem>
      <MenuItem isSelected={currentItem === 'practice interview'} onClick={() => handleItemClick('practice interview')}>
        Practice Interview
      </MenuItem>
    </Container>
  );
};

export default JobSeekerSidebar;
