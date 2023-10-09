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
import configureDashboardIcon from '../../../assets/icons/configure-dashboard.png'
import recommendedJobIcon from '../../../assets/icons/recommend-jobs.png'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled.div`
  width: 17rem;
  height: calc(90% - 4rem);
  height: 100vh;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
    font-size: 1rem;
    font-weight: 700;
    color: var(--color);
    padding-left: 0.5rem;
  }

  .menuTitle.selected {
    color: var(--lightOrange);
  }

  .custom-accordion-root.MuiAccordion-root:before {
    display: none;
  }
  
  .custom-accordion-summary-root {
    border-bottom: none;
  }
`;

const MenuItem = styled.div`
  padding-bottom: 1rem;
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
  const [expanded, setExpanded] = useState(false);

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel1' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel1' ? 'selected' : ''}`}>Dashboard</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'dashboard'} onClick={() => handleItemClick('dashboard')}>
            <img src={dashboardIcon} className='icon' />
            Dashboard
          </MenuItem>
          <MenuItem isSelected={currentItem === 'configure-dashboard'} onClick={() => handleItemClick('configure-dashboard')}>
            <img src={configureDashboardIcon} className='icon' />
            Configure Dashboard
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel2' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel2' ? 'selected' : ''}`}>Jobs</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'job-search'} onClick={() => handleItemClick('job-search')}>
            <img src={jobSearchIcon} className='icon' />
            Job Search
          </MenuItem>

          <MenuItem isSelected={currentItem === 'applied-jobs'} onClick={() => handleItemClick('applied-jobs')}>
            <img src={appliedJobIcon} className='icon' />
            Applied Jobs
          </MenuItem>
          <MenuItem isSelected={currentItem === 'recommended-jobs'} onClick={() => handleItemClick('recommended-jobs')}>
            <img src={recommendedJobIcon} className='icon' />
            Recommended Jobs
          </MenuItem>

        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel3' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel3' ? 'selected' : ''}`}>Resume Services</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'create-resume'} onClick={() => handleItemClick('create-resume')}>
            <img src={createResumeIcon} className='icon' />
            Create AI Resume
          </MenuItem>
          <MenuItem isSelected={currentItem === 'enhance-resume'} onClick={() => handleItemClick('enhance-resume')}>
            <img src={enhanceResumeIcon} className='icon' />
            Enhance Resume
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel4' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel4' ? 'selected' : ''}`}>Interview</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'interview-dashboard'} onClick={() => handleItemClick('interview-dashboard')}>
            <img src={interviewDashboardIcon} className='icon' />
            <Link to='/dashboard/interviews'>Interview Dashboard</Link>
          </MenuItem>
          <MenuItem isSelected={currentItem === 'practice-interview'} onClick={() => handleItemClick('practice-interview')}>
            <img src={practiceInterviewIcon} className='icon' />
            <a href='/create' target='_blank' rel='noopener noreferrer'>Practice Interview</a>
            <OpenInNewIcon className='openNew' />
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ width: '100%', boxShadow: 'none', margin: '0', border: 'none' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel5' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel5' ? 'selected' : ''}`}>Profile</span>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel6' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel6' ? 'selected' : ''}`}>Support</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'create-ticket'} onClick={() => handleItemClick('create-ticket')}>
            <img src={createTicketIcon} className='icon' />
            <a href='/create-ticket' target='_blank' rel='noopener noreferrer'>Create Ticket</a>
            <OpenInNewIcon className='openNew' />
          </MenuItem>
          <MenuItem isSelected={currentItem === 'call-support'} onClick={() => handleItemClick('call-support')}>
            <img src={callSupportIcon} className='icon' />
            Call Support
          </MenuItem>
        </AccordionDetails>
      </Accordion>

    </Container >
  );
};

export default JobSeekerSidebar;
