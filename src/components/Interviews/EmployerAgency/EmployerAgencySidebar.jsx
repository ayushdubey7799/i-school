import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import titleIcon1 from '../../../assets/icons/titleIcon1.png'
import titleIcon2 from '../../../assets/icons/titleIcon2.png'
import titleIcon3 from '../../../assets/icons/titleIcon3.png'
import titleIcon4 from '../../../assets/icons/titleIcon4.png'
import titleIcon5 from '../../../assets/icons/titleIcon5.png'
import titleIcon6 from '../../../assets/icons/titleIcon6.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import uploadProfileIcon from '../../../assets/icons/uploadProfileIcon.png'
import configureDashboardIcon from '../../../assets/icons/configure-dashboard.png'
import dashboardIcon from '../../../assets/icons/dashboard.png'
import billingIcon from '../../../assets/icons/billing.png'
import reportIcon from '../../../assets/icons/report.png'
import configureReportIcon from '../../../assets/icons/configure-reports.png'
import profileIcon from '../../../assets/icons/profile.png'
import notificationIcon from '../../../assets/icons/notification.png'
import manageUsersIcon from '../../../assets/icons/manageUsers.png'
import subsIcon from '../../../assets/icons/subscription.png'
import activeJdIcon from '../../../assets/icons/active-job-desc.png'


const Container = styled.div`
width: 15rem;
height: calc(98% - 4rem);
padding-top: 1.5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
font-size: 0.9rem;
font-weight: 500;
background-color: var(--white);
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
  
  
  .menuTitle {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color);
    padding-left: 1rem;
    text-decoration: none;
  }

  .menuTitle.selected {
    color: var(--lightOrange);
  }
  .custom-accordion-root.MuiAccordion-root:before {
    display: none;
  }
  
  .custom-accordion-summary-root {
    border-bottom: none;
    margin-bottom: -13px;
  }


  .icon {
    width: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

`;

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-bottom: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-right: 1rem solid #f4f4f4;
    margin-left: auto;
    transition: transform 0.2s;
    position: absolute;
    right: 0px;
`;



const CatTitle = styled.span`
font-size: 0.9rem;
font-weight: 600;
margin-left: 1rem;
margin-top: 1rem;
display: flex;
align-items: center;
gap: 0.5rem;


img {
  width: 1.3rem;
}

`

const MenuItem = styled.div`
  padding-bottom: 1rem;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
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
    font-size: 0.8rem;
    font-weight: 400;
  }
  
  .icon {
    width: 1.2rem;
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
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
const SubPara = styled.p`
color: ${(props) => (props.isSelected ? 'var(--lightOrange)' : 'var(--color)')};
display: flex;
align-items: center;
gap: 0.5rem;
`


const EmployerAgencySidebar = ({ currentItem, setCurrentItem }) => {
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

      <CatTitle className='categoryTitle' onClick={() => handleItemClick('dashboard')} style={{ cursor: 'pointer' }}><img src={titleIcon1} /> Home</CatTitle>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel1' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel1' ? 'selected' : ''} ${currentItem === 'dashboard' ? 'selected' : ''}`} isSelected={currentItem === 'dashboard'} onClick={() => handleItemClick('dashboard')}>Dashboard</span>
        </AccordionSummary>
      </Accordion>

      
      <span className='hrLine'></span>
      <CatTitle className='categoryTitle'><img src={titleIcon2} /> Sourcing</CatTitle>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          classes={{
            root: 'custom-accordion-summary-root topTitle',
            expanded: expanded === 'panel7' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel7' ? 'selected' : ''}`}>Manage JDs</span>
          {expanded === 'panel7' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails style={{ marginTop: '-15px' }} className='details'>
          <Submenu>
            <SubPara isSelected={currentItem === 'activeJds'} onClick={() => handleItemClick('jdListing')} className='submenuItem'><img src={activeJdIcon} className='icon' /> JD Listings</SubPara>
            {/* <SubPara isSelected={currentItem === 'manage-jds'} onClick={() => handleItemClick('manage-jds')} className='submenuItem'><img src={jdIcon} className='icon' />Available JDs</SubPara> */}
          </Submenu>
        </AccordionDetails>
      </Accordion>

      <span className='hrLine'></span>
      <CatTitle className='categoryTitle'><img src={titleIcon4} /> Analytics</CatTitle>
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
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'report'} onClick={() => handleItemClick('report')}>
            <img src={reportIcon} className='icon' />
            Reports
          </MenuItem>
          <MenuItem isSelected={currentItem === 'configure-report'} onClick={() => handleItemClick('configure-report')}>
            <img src={configureReportIcon} className='icon' />
            Configure Reports
          </MenuItem>
        </AccordionDetails>
      </Accordion>


      <span className='hrLine'></span>
      <CatTitle className='categoryTitle'><img src={titleIcon5} /> Admin</CatTitle>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ width: '100%', boxShadow: 'none', margin: '0' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          classes={{
            root: 'custom-accordion-summary-root topTitle',
            expanded: expanded === 'panel3' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel3' ? 'selected' : ''}`}>Manage Profile</span>
          {expanded === 'panel3' && <Arrow></Arrow>}
        </AccordionSummary>
        <AccordionDetails className='details'>
          <MenuItem isSelected={currentItem === 'profile'} onClick={() => handleItemClick('profile')}>
            <img src={profileIcon} className='icon' />
            Profile
          </MenuItem>
          <MenuItem isSelected={currentItem === 'manage-users'} onClick={() => handleItemClick('manage-users')}>
            <img src={manageUsersIcon} className='icon' />
            Manage Users
          </MenuItem>
          <MenuItem isSelected={currentItem === 'manage-agencies'} onClick={() => handleItemClick('manage-agencies')}>
            <img src={manageUsersIcon} className='icon' />
            Manage Agencies
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
            <img src={notificationIcon} className='icon' />
            Notifications
          </MenuItem>
        </AccordionDetails>
      </Accordion>


      <span className='hrLine'></span>
      <CatTitle className='categoryTitle'><img src={titleIcon6} /> Support</CatTitle>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ width: '100%', boxShadow: 'none', margin: '0', marginBottom: '-10px', border: 'none' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel5' ? 'expanded' : ''
          }}
        >
          <a className={`menuTitle ${expanded === 'panel5' ? 'selected' : ''}`} href='https://intelliview.zohodesk.com/portal/en/newticket' target='_blank' rel='noopener noreferrer'>Create Ticket</a>
          {/* <img src={createTicketIcon} className='icon' /> */}
        </AccordionSummary>
      </Accordion>

      <Accordion expanded={expanded === 'panel5.2'} onChange={handleChange('panel5.2')} style={{ width: '100%', boxShadow: 'none', marginTop: '0.5rem', border: 'none' }} classes={{ root: 'custom-accordion-root' }}>
        <AccordionSummary
          aria-controls="panel5.2bh-content"
          id="panel5.2bh-header"
          classes={{
            root: 'custom-accordion-summary-root',
            expanded: expanded === 'panel5.2' ? 'expanded' : ''
          }}
        >
          <span className={`menuTitle ${expanded === 'panel5.2' ? 'selected' : ''}`} isSelected={currentItem === 'call-support'} onClick={() => handleItemClick('call-support')} style={{ marginTop: '-1rem' }}>Contact Support</span>
          {/* <img src={callSupportIcon} className='icon' /> */}
        </AccordionSummary>
      </Accordion>
    </Container>
  );
};
export default React.memo(EmployerAgencySidebar);