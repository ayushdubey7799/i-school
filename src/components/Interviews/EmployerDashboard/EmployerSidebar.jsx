import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

  width: 15%;
  height: 100%;
  display: flex;
  margin-top: 7rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:1rem;
  padding: 1rem;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.5);
  // transition: display 0.3s ease-in;

`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? 'blue' : 'black')};
  a{
    color: black;
    text-decoration: none;
  }
`;

const Submenu = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.7rem;
  color: ${(props) => (props.isSelected ? 'blue' : 'black')};
  a{
    color: black;
    text-decoration: none;
  }
`;


const EmployerSidebar = ({currentItem,setCurrentItem, open, setOpen}) => {
  console.log(open);
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  
  return (
    <Container>
      <MenuItem onClick={() => handleItemClick('profile')}>
        Profile
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('manage-subscriptions')}>
      Manage Subscriptions
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('manage-jds')}>
        Manage JDs
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('candidate-register')}>
        Manage Candidates
      </MenuItem>
      <MenuItem onClick={() => setOpen(!open)}>
        Manage Tests
        <Submenu style={{display: `${open?'block':'none'}`}}>
        <p onClick={() => handleItemClick('activeJds')}>Active JDs</p>
        <p onClick={() => handleItemClick('create-tests')}>Create Tests</p>
      </Submenu>
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('schedule')}>
        <Link to="/schedule">Schedule Interview</Link>
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('inbox')}>
        Inbox
      </MenuItem>
    </Container>
  );
};

export default React.memo(EmployerSidebar);
