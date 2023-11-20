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
import save from '../../../assets/icons/save.png'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import titleIcon1 from '../../../assets/icons/titleIcon1.png'
import titleIcon2 from '../../../assets/icons/titleIcon2.2.png'
import titleIcon3 from '../../../assets/icons/titleIcon2.3.png'
import titleIcon4 from '../../../assets/icons/titleIcon2.4.png'
import titleIcon5 from '../../../assets/icons/titleIcon2.5.png'
import titleIcon6 from '../../../assets/icons/titleIcon2.6.png'
import titleIcon7 from '../../../assets/icons/titleIcon2.7.png'

const Container = styled.div`
  width: 17rem;
  height: calc(98% - 2rem);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 0.9rem;
  font-weight: 500;
  background-color: var(--white);
  // box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  overflow-y: scroll;

  & {
    scrollbar-width: none;
  }  

  &::-webkit-scrollbar {
    width: 0rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  // &:hover::-webkit-scrollbar-thumb {
  //   background-color: lightgrey;
  // }

  .menuTitle {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color);
    padding-left: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;


    img {
      width: 1.3rem;
    }
  }

  .menuTitle.selected {
    color: var(--lightOrange);
  }

  .custom-accordion-root.MuiAccordion-root:before {
    display: none;
  }
  
  .custom-accordion-summary-root {
    border-bottom: none;
    margin-top: -8px;
  }

  .details {
    margin-bottom: -22px;
    margin-top: -10px;
  }

  .hrLine {
    width: 90%;
    border-top: 0.06rem solid lightgrey;
    border-radius: 0.2rem;
    margin: 0.8rem 0 0.8rem 0;
    align-self: center;
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
  }
`;

const MenuItem = styled.div`
  padding-bottom: 1rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  font-weight: 400;
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
    width: 1.2rem;
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

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-right: 1rem solid #f4f4f4;
    transition: transform 0.2s;
    position: absolute;
    right: 0px;

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
          <span className={`menuTitle ${expanded === 'panel1' ? 'selected' : ''}`}><img src={titleIcon1} /> Home</span>
          {expanded === 'panel1' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
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

      <span className='hrLine'></span>
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
          <span className={`menuTitle ${expanded === 'panel2' ? 'selected' : ''}`}><img src={titleIcon2} /> Jobs</span>
          {expanded === 'panel2' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
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
          <MenuItem isSelected={currentItem === 'saved-jobs'} onClick={() => handleItemClick('saved-jobs')}>
            <img src={save} className='icon' />
            Saved Jobs
          </MenuItem>

        </AccordionDetails>
      </Accordion>

      <span className='hrLine'></span>
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
          <span className={`menuTitle ${expanded === 'panel3' ? 'selected' : ''}`}><img src={titleIcon3} /> CV Builder</span>
          {expanded === 'panel3' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'create-resume'} onClick={() => handleItemClick('create-resume')}>
            <img src={createResumeIcon} className='icon' />
            Create AI Resume
          </MenuItem>
          <MenuItem isSelected={currentItem === 'enhance-resume'} onClick={() => handleItemClick('enhance-resume')}>
            <img src={enhanceResumeIcon} className='icon' />
            Create Cover Letter
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <span className='hrLine'></span>
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
          <span className={`menuTitle ${expanded === 'panel4' ? 'selected' : ''}`}><img src={titleIcon4} /> Interview</span>
          {expanded === 'panel4' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'interview-dashboard'} onClick={() => handleItemClick('interview-dashboard')}>
            <img src={interviewDashboardIcon} className='icon' />
            <Link to='/dashboard/interviews'>Interview Dashboard</Link>
          </MenuItem>
          <MenuItem isSelected={currentItem === 'practice-interview'} onClick={() => handleItemClick('practice-interview')}>
            <img src={practiceInterviewIcon} className='icon' />
            <a href='/create' target='_blank' rel='noopener noreferrer'>Mock Interview</a>
            <OpenInNewIcon className='openNew' />
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <span className='hrLine'></span>
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
          <span className={`menuTitle ${expanded === 'panel5' ? 'selected' : ''}`}><img src={titleIcon5} /> Profile</span>
          {expanded === 'panel5' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
            <img src={profileIcon} className='icon' />
            Profile
          </MenuItem>
          <MenuItem isSelected={currentItem === 'subscriptions'} onClick={() => handleItemClick('subscriptions')}>
            <img src={subsIcon} className='icon' />
            Subscriptions
          </MenuItem>
          {/* <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
            <img src={inboxIcon} className='icon' />
            Notifications
          </MenuItem> */}
        </AccordionDetails>
      </Accordion>


      <span className='hrLine'></span>
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
          <span className={`menuTitle ${expanded === 'panel6' ? 'selected' : ''}`}><img src={titleIcon6} /> Support</span>
          {expanded === 'panel6' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'create-ticket'} onClick={() => handleItemClick('create-ticket')}>
            <img src={createTicketIcon} className='icon' />
            <a href='https://intelliview.zohodesk.com/portal/en/newticket' target='_blank' rel='noopener noreferrer'>Create Ticket</a>
            <OpenInNewIcon className='openNew' />
          </MenuItem>
          <MenuItem isSelected={currentItem === 'call-support'} onClick={() => handleItemClick('call-support')}>
            <img src={callSupportIcon} className='icon' />
            Contact Support
          </MenuItem>
        </AccordionDetails>
      </Accordion>

      <span className='hrLine'></span>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }} onClick={() => handleItemClick('inbox')} isSelected={currentItem === 'inbox'}>
        <AccordionSummary
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel7' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel7' ? 'selected' : ''}`}><img src={titleIcon7} /> Notifications</span>
          {expanded === 'panel7' && <Arrow></Arrow>}
        </AccordionSummary>
      </Accordion>

    </Container >
  );
};

export default JobSeekerSidebar;
