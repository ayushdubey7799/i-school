import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import profileIcon from '../../../assets/icons/profile.png'
import jobSearchIcon from '../../../assets/icons/job-search.png'
import practiceInterviewIcon from '../../../assets/icons/practice.png'
import inboxIcon from '../../../assets/icons/inbox.png'
import subsIcon from '../../../assets/icons/subscription.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import dashboardIcon from '../../../assets/icons/dashboard.png'
import appliedJobIcon from '../../../assets/icons/job-applied.png'
import createResumeIcon from '../../../assets/icons/create-resume.png'
import enhanceResumeIcon from '../../../assets/icons/enhance-resume.png'
import interviewDashboardIcon from '../../../assets/icons/interview-dashboard.png'
import createTicketIcon from '../../../assets/icons/create-ticket.png'
import callSupportIcon from '../../../assets/icons/call-support.png'

const Container = styled.div`
  width: 15rem;
  height: calc(90% - 4rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap:1rem;
  padding: 2rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--white);
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: lightgrey;
  }

  .menuTitle {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color);
    padding-left: 0.5rem;
    padding-bottom: 0.2rem;
  }
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
    width: 1.1rem;
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

  .openNew {
    font-size: 1rem;
    width: 1rem;
    height: 1rem;
  }

`;

const JobSeekerSidebar = ({ currentItem, setCurrentItem }) => {
  console.log(currentItem)
  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  return (
    <Container>
      <span className='menuTitle'>Dashboard</span>
      <MenuItem isSelected={currentItem === 'dashboard'} onClick={() => handleItemClick('dashboard')}>
        <img src={dashboardIcon} className='icon' />
        Dashboard
      </MenuItem>

      <span className='menuTitle'>Jobs</span>
      <MenuItem isSelected={currentItem === 'job-search'} onClick={() => handleItemClick('job-search')}>
        <img src={jobSearchIcon} className='icon' />
        Job Search
      </MenuItem>
      <MenuItem isSelected={currentItem === 'applied-jobs'} onClick={() => handleItemClick('applied-jobs')}>
        <img src={appliedJobIcon} className='icon' />
        Applied Jobs
      </MenuItem>

      <span className='menuTitle'>Resume Services</span>
      <MenuItem isSelected={currentItem === 'create-resume'} onClick={() => handleItemClick('create-resume')}>
        <img src={createResumeIcon} className='icon' />
        Create AI Resume
      </MenuItem>
      <MenuItem isSelected={currentItem === 'enhance-resume'} onClick={() => handleItemClick('enhance-resume')}>
        <img src={enhanceResumeIcon} className='icon' />
        Enhance Resume
      </MenuItem>

      <span className='menuTitle'>Interview</span>
      <MenuItem isSelected={currentItem === 'interview-dashboard'} onClick={() => handleItemClick('interview-dashboard')}>
        <img src={interviewDashboardIcon} className='icon' />
        <Link to='/dashboard/interviews'>Interview Dashboard</Link>
      </MenuItem>
      <MenuItem isSelected={currentItem === 'practice-interview'} onClick={() => handleItemClick('practice-interview')}>
        <img src={practiceInterviewIcon} className='icon' />
        <a href='/create' target='_blank' rel='noopener noreferrer'>Practice Interview</a>
        <OpenInNewIcon className='openNew' />
      </MenuItem>


      <span className='menuTitle'>Profile</span>
      <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
        <img src={profileIcon} className='icon' />
        Profile
        {/* <KeyboardArrowDownIcon className='arrowDown' />
        <KeyboardArrowUpIcon className='arrowUp' /> */}
      </MenuItem>
      <MenuItem isSelected={currentItem === 'subscriptions'} onClick={() => handleItemClick('subscriptions')}>
        <img src={subsIcon} className='icon' />
        Subscriptions
      </MenuItem>
      <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
        <img src={inboxIcon} className='icon' />
        Inbox
      </MenuItem>

      <span className='menuTitle'>Support</span>
      <MenuItem isSelected={currentItem === 'create-ticket'} onClick={() => handleItemClick('create-ticket')}>
        <img src={createTicketIcon} className='icon' />
        Create Ticket
      </MenuItem>
      <MenuItem isSelected={currentItem === 'call-support'} onClick={() => handleItemClick('call-support')}>
        <img src={callSupportIcon} className='icon' />
        Call Support
      </MenuItem>

    </Container>
  );
};

export default JobSeekerSidebar;
