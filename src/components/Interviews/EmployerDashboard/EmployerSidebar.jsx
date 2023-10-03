import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import profileIcon from '../../../assets/icons/profile.png'
import inboxIcon from '../../../assets/icons/inbox.png'
import scheduleIcon from '../../../assets/icons/schedule.png'
import subsIcon from '../../../assets/icons/subscription.png'
import jdIcon from '../../../assets/icons/job-description.png'
import candidatesIcon from '../../../assets/icons/manage-candidates.png'
import testIcon from '../../../assets/icons/test-management.png'


const Container = styled.div`

  width: 15rem;
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--white);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
`;

const MenuItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};

  a{
    color: var(--color);
    text-decoration: none;
  }

  .icon {
    width: 1.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .arrowDown {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    display: ${(props) => (props.isSelected ? 'none' : 'block')};
  }

  .arrowUp {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
  }
`;

const MenuSubmenu = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};
  flex-direction: column;

  .manageTest {
    display: flex;
    align-items: center; 
    gap: 0.5rem;
  }

  a{
    color: var(--color);
    text-decoration: none;
  }

  .icon {
    width: 1.6rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .arrowDown {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    display: ${(props) => (props.isSelected ? 'none' : 'block')};
  }

  .arrowUp {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
  }
`


const Submenu = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.7rem;
  color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};
  a{
    color: black;
    text-decoration: none;
  }
`;


const EmployerSidebar = ({ currentItem, setCurrentItem, open, setOpen }) => {
  console.log(open);
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };


  return (
    <Container>
      <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
        <img src={profileIcon} className='icon' />
        Profile
      </MenuItem>
      <MenuItem isSelected={currentItem === 'manage-subscriptions'} onClick={() => handleItemClick('manage-subscriptions')}>
        <img src={subsIcon} className='icon' />
        Manage Subscriptions
        <KeyboardArrowDownIcon className='arrowDown' />
        <KeyboardArrowUpIcon className='arrowUp' />
      </MenuItem>
      <MenuItem isSelected={currentItem === 'manage-jds'} onClick={() => handleItemClick('manage-jds')}>
        <img src={jdIcon} className='icon' />
        Manage JDs
        <KeyboardArrowDownIcon className='arrowDown' />
        <KeyboardArrowUpIcon className='arrowUp' />
      </MenuItem>
      <MenuItem isSelected={currentItem === 'candidate-register'} onClick={() => handleItemClick('candidate-register')}>
        <img src={candidatesIcon} className='icon' />
        Manage Candidates
        <KeyboardArrowDownIcon className='arrowDown' />
        <KeyboardArrowUpIcon className='arrowUp' />
      </MenuItem>
      <MenuSubmenu isSelected={currentItem === 'manage-test'} onClick={() => setOpen(!open)}>
        <div className='manageTest'><img src={testIcon} className='icon' /> Manage Tests</div>
        <Submenu style={{ display: `${open ? 'block' : 'none'}` }}>
          <p onClick={() => handleItemClick('activeJds')}>Active JDs</p>
          <p onClick={() => handleItemClick('create-tests')}>Create Tests</p>
        </Submenu>
      </MenuSubmenu>
      <MenuItem isSelected={currentItem === 'schedule-Interview'} onClick={() => handleItemClick('schedule')}>
        <img src={scheduleIcon} className='icon' />
        <Link to="/schedule">Schedule Interview</Link>
        <OpenInNewIcon className='arrowDown' />
      </MenuItem>
      <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
        <img src={inboxIcon} className='icon' />
        Inbox
      </MenuItem>
    </Container>
  );
};

export default React.memo(EmployerSidebar);
