import React, { useState } from 'react'
import { styled } from 'styled-components';
import NewInterviewModal from '../Modals/NewInterviewModal';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import MyDrawer from './Drawer';
import { Link } from 'react-router-dom';

const Header = ({ openNewInterviewModal, setOpenNewInterviewModal, isLoading, setIsLoading }) => {
  const [openDrawer, setOpenDrawer] = useState(false);



  return (
    <StyledHeading>
      <div id="heading">
        <IconButton onClick={() => setOpenDrawer(true)}><MenuRoundedIcon className='link' /></IconButton>
        <MyDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <h1>My Interviews</h1>
      </div>

      <div id="start">
        <Link to='/create'>
        <button>
          Start New Interview
        </button>
        </Link>
        {/* <NewInterviewModal openNewInterviewModal={openNewInterviewModal} setOpenNewInterviewModal={setOpenNewInterviewModal} isLoading={isLoading} setIsLoading={setIsLoading} /> */}
      </div>
    </StyledHeading>
  )
}

export default Header

const StyledHeading = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: space-between;
  align-items: center;

  button{
    background-color: var(--lightBlue);
    color: var(--color);
    font-size; 1.5rem;
    height: 3rem;
    border-radius: 0.3rem;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.2rem 1rem;
    cursor: pointer;
  }
`


