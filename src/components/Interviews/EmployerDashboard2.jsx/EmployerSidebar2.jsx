import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import profileIcon from '../../../assets/icons/profile.png'
import inboxIcon from '../../../assets/icons/inbox.png'
import scheduleIcon from '../../../assets/icons/schedule.png'
import subsIcon from '../../../assets/icons/subscription.png'
import dashboardIcon from '../../../assets/icons/dashboard.png'
import billingIcon from '../../../assets/icons/billing.png'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import titleIcon3 from '../../../assets/icons/titleIcon3.png'
import titleIcon5 from '../../../assets/icons/titleIcon5.png'
import titleIcon6 from '../../../assets/icons/titleIcon6.png'


const Container = styled.div`
width: 17rem;
height: calc(98% - 2rem);
padding-top: 1.5rem;
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

  
  .menuTitle {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color);
    padding-left: 0.5rem;
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

  .hrLine {
    width: 90%;
    border-top: 0.1rem groove #f6f6f6;
    border-radius: 0.2rem;
    margin: 1rem 0 0rem 0;
    align-self: center;
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
  }

  .details {
    margin-bottom: -20px;
  }

  .icon {
    width: 1.2rem;
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



const EmployerSidebar2 = ({ currentItem, setCurrentItem }) => {
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
      <CatTitle className='categoryTitle'><img src={titleIcon3} /> Interviews</CatTitle>
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
        <AccordionDetails style={{ marginTop: '-15px' }} className='details'>
          <Submenu>
            <SubPara isSelected={currentItem === 'interview-dashboard'} onClick={() => handleItemClick('interview-dashboard')} className='submenuItem'><img src={dashboardIcon} className='icon' />Interview Dashboard</SubPara>
            <div className='linkBox'>
              <Link to="/schedule/invite2" className='link'><img src={scheduleIcon} className='icon' />Schedule Interview</Link>
              <OpenInNewIcon className='arrowLink' />
            </div>
          </Submenu>
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
export default React.memo(EmployerSidebar2);
