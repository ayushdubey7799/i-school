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
import addUser from '../../../assets/icons/addUser.png'
import availableTestIcon from '../../../assets/icons/test.png'
import manageUsersIcon from '../../../assets/icons/manageUsers.png'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Container = styled.div`

width: 17rem;
height: calc(90% - 2rem);
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
    font-size: 1rem;
    font-weight: 600;
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

  .icon {
    width: 1.1rem;
    height: 1.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .childMenuTitle {
    font-size: 0.9rem;
    display: flex;
    gap: 0.5rem;
  }

  .childMenuTitle.selected {
    color: var(--lightOrange);
  }

  .arrowLink {
    width: 1.1rem;
  }
`;

const MenuItem = styled.div`
  padding-bottom: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
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

  .arrowLink {
    width: 1.1rem;
  }

  .link {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color);
    padding-left: 1.5rem;
  }

  .linkBox {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

`;


const Submenu = styled.div`
  padding: 0.2rem;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  
  a{
    color: black;
    text-decoration: none;
  }

  .submenuItem {
  
  }

  .icon {
    width: 1.1rem;
    padding-right: 0.5rem;
  }

  a{
    color: var(--color);
    text-decoration: none;
  }

  .linkBox {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SubPara = styled.p`
color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};
display: flex;
align-items: center;
gap: 0.5rem;

`

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-right: 1rem solid #e3e3e3;
    margin-left: auto;
    transition: transform 0.2s;
    position: absolute;
    right: 0px;

`;


const EmployerSidebar = ({ currentItem, setCurrentItem }) => {
  const [expanded, setExpanded] = useState(false);
  const [nestedExpanded, setNestedExpanded] = useState('');

  const handleItemClick = (item) => {
    setCurrentItem(item);
  };

  const handleChange = (panel, isNested = false) => (event, isExpanded) => {
    if (isNested) {
      setNestedExpanded(isExpanded ? panel : '');
    } else {
      setExpanded(isExpanded ? panel : '');
      setNestedExpanded('');
    }
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
          {expanded === 'panel1' && <Arrow></Arrow>}
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

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel7' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel7' ? 'selected' : ''}`}>Manage JDs</span>
          {expanded === 'panel7' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: '-22px' }}>
          <Submenu>
            <SubPara isSelected={currentItem === 'activeJds'} onClick={() => handleItemClick('activeJds')} className='submenuItem'><img src={activeJdIcon} className='icon' /> Active JDs</SubPara>
            <SubPara isSelected={currentItem === 'manage-jds'} onClick={() => handleItemClick('manage-jds')} className='submenuItem'><img src={jdIcon} className='icon' />Available JDs</SubPara>
          </Submenu>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel8' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel8' ? 'selected' : ''}`}>Manage Candidates</span>
          {expanded === 'panel8' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: '-22px' }}>
          <Submenu>
            <SubPara isSelected={currentItem === 'candidate-register'} onClick={() => handleItemClick('candidate-register')} className='submenuItem'><img src={addUser} className='icon' />Add Candidates</SubPara>
            <SubPara isSelected={currentItem === 'candidate-registered'} onClick={() => handleItemClick('candidate-registered')} className='submenuItem'><img src={createTestIcon} className='icon' />Candidates Pool</SubPara>
          </Submenu>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel9' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel9' ? 'selected' : ''}`}>Manage Tests</span>
          {expanded === 'panel9' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: '-22px' }}>
          <Submenu>
            <SubPara isSelected={currentItem === 'create-tests'} onClick={() => handleItemClick('create-tests')} className='submenuItem'><img src={createTestIcon} className='icon' /> Create Tests</SubPara>
            <SubPara isSelected={currentItem === 'available-tests'} onClick={() => handleItemClick('available-tests')} className='submenuItem'><img src={availableTestIcon} className='icon' /> Available Tests</SubPara>
          </Submenu>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel10' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel10' ? 'selected' : ''}`}>Manage Interviews</span>
          {expanded === 'panel10' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: '-22px' }}>
          <Submenu>
            <SubPara isSelected={currentItem === 'interview-dashboard'} onClick={() => handleItemClick('interview-dashboard')} className='submenuItem'><img src={dashboardIcon} className='icon' />Interview Dashboard</SubPara>
            <div className='linkBox'>
              <Link to="/schedule" className='link'><img src={scheduleIcon} className='icon' />Schedule Interview</Link>
              <OpenInNewIcon className='arrowLink' />
            </div>
          </Submenu>
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
          {expanded === 'panel4' && <Arrow></Arrow>}
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
          {expanded === 'panel5' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails>
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
          {expanded === 'panel3' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails>
          <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
            <img src={profileIcon} className='icon' />
            Profile
          </MenuItem>
          <MenuItem isSelected={currentItem === 'manage-users'} onClick={() => handleItemClick('manage-users')}>
            <img src={manageUsersIcon} className='icon' />
            Manage Users
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
            Notifications
          </MenuItem>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default React.memo(EmployerSidebar);

