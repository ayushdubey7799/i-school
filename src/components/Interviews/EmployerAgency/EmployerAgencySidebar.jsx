import React, { useState } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import titleIcon1 from '../../../assets/icons/titleIcon1.png'

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
    </Container>
  );
};
export default React.memo(EmployerAgencySidebar);