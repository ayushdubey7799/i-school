import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileIcon from '../../../assets/icons/profile.png'
import jobSearchIcon from '../../../assets/icons/job-search.png'
import practiceInterviewIcon from '../../../assets/icons/practice.png'
import inboxIcon from '../../../assets/icons/inbox.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Container = styled.div`
  width: 15rem;
  height: calc(100% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap:2rem;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--white);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;

`;

const MenuItem = styled.div`
  padding-bottom: 0.5rem;
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

const JobSeekerSidebar = ({ currentItem, setCurrentItem }) => {
  console.log(currentItem)
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <Container>
      <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
        <img src={profileIcon} className='icon' />
        Profile
        {/* <KeyboardArrowDownIcon className='arrowDown' />
        <KeyboardArrowUpIcon className='arrowUp' /> */}
      </MenuItem>
      <MenuItem isSelected={currentItem === 'job-search'} onClick={() => handleItemClick('job-search')}>
        <img src={jobSearchIcon} className='icon' />
        Job Search
      </MenuItem>
      <MenuItem isSelected={currentItem === 'practice interview'} onClick={() => handleItemClick('practice interview')}>
        <img src={practiceInterviewIcon} className='icon' />
        <Link to='/interview'>Practice Interview</Link>
        <OpenInNewIcon className='arrowDown' />
      </MenuItem>
      <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
        <img src={inboxIcon} className='icon' />
        Inbox
      </MenuItem>
    </Container>
  );
};

export default JobSeekerSidebar;
