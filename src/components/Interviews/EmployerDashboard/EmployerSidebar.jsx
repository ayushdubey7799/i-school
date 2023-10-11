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
import activeJdIcon from '../../../assets/icons/active-job-desc.png'
import createTestIcon from '../../../assets/icons/create-test.png'

import dashboardIcon from '../../../assets/icons/dashboard.png'
import billingIcon from '../../../assets/icons/billing.png'
import reportIcon from '../../../assets/icons/report.png'
import createTicketIcon from '../../../assets/icons/create-ticket.png'
import callSupportIcon from '../../../assets/icons/call-support.png'
import configureDashboardIcon from '../../../assets/icons/configure-dashboard.png'

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
    font-size: 1.1rem;
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
`;

const MenuSubmenu = styled.div`
  padding-bottom: 1rem;
  padding-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: start;
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
    width: 1.1rem;
    // padding-left: 0.5rem;
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
  padding: 0.2rem;
  cursor: pointer;
  font-size: 0.8rem;
  color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};
  a{
    color: black;
    text-decoration: none;
  }

  .submenuItem {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;


const EmployerSidebar = ({ currentItem, setCurrentItem, open, setOpen }) => {
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
          <span className={`menuTitle ${expanded === 'panel2' ? 'selected' : ''}`}>Applications</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'manage-jds'} onClick={() => handleItemClick('manage-jds')}>
            <img src={jdIcon} className='icon' />
            Manage JDs
          </MenuItem>
          <MenuItem isSelected={currentItem === 'candidate-register'} onClick={() => handleItemClick('candidate-register')}>
            <img src={candidatesIcon} className='icon' />
            Manage Candidates
          </MenuItem>

          <MenuSubmenu isSelected={currentItem === 'manage-test'} onClick={() => {
            setOpen(!open);
            // handleItemClick('manage-test');
          }}>
            <div className='manageTest'>
              <img src={testIcon} className='icon' />
              Manage Tests
            </div>
            <Submenu style={{ display: `${open ? 'block' : 'none'}` }}>
              <p onClick={() => handleItemClick('activeJds')} className='submenuItem'><img src={activeJdIcon} className='icon' /> Active JDs</p>
              <p onClick={() => handleItemClick('create-tests')} className='submenuItem'><img src={createTestIcon} className='icon' /> Create Tests</p>
            </Submenu>
          </MenuSubmenu>
          <MenuItem isSelected={currentItem === 'schedule-Interview'} onClick={() => handleItemClick('schedule')}>
            <img src={scheduleIcon} className='icon' />
            <Link to="/schedule">Manage Interviews</Link>
            <OpenInNewIcon className='arrowDown' />
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

          <span className={`menuTitle ${expanded === 'panel3' ? 'selected' : ''}`}>Profile</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
            <img src={profileIcon} className='icon' />
            Profile
          </MenuItem>
          <MenuItem isSelected={currentItem === 'subscriptions'} onClick={() => handleItemClick('subscriptions')}>
            <img src={subsIcon} className='icon' />
            Subscriptions
          </MenuItem>
          <MenuItem isSelected={currentItem === 'billing'} onClick={() => handleItemClick('billing')}>
            <img src={billingIcon} className='icon' />
            Billing
          </MenuItem>
          <MenuItem isSelected={currentItem === 'inbox'} onClick={() => handleItemClick('inbox')}>
            <img src={inboxIcon} className='icon' />
            Inbox
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
          <span className={`menuTitle ${expanded === 'panel4' ? 'selected' : ''}`}>Reports</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'report'} onClick={() => handleItemClick('report')}>
            <img src={reportIcon} className='icon' />
            Reports
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
          <span className={`menuTitle ${expanded === 'panel5' ? 'selected' : ''}`}>Support</span>
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'create-ticket'} onClick={() => handleItemClick('create-ticket')}>
            <img src={createTicketIcon} className='icon' />
            <a href='https://intelliview.zohodesk.com/portal/en/home' target='_blank' rel='noopener noreferrer'>Create Ticket</a>
            <OpenInNewIcon className='openNew' />
          </MenuItem>
          <MenuItem isSelected={currentItem === 'call-support'} onClick={() => handleItemClick('call-support')}>
            <img src={callSupportIcon} className='icon' />
            Contact Support
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default React.memo(EmployerSidebar);
