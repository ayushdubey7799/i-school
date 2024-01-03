import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import Backdrop from '@mui/material/Backdrop';
import closeIcon from "../../../../assets/icons/closeIcon.png"

export default function ConfigurableModal({
  open,
  setOpen,
  component,
  style
}) {

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    setOpen(false);
  };


  return (
    <Modal
    open={open}
    onClose={handleClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      invisible: true, // This will make the backdrop invisible
      onClick: (event) => event.stopPropagation(), // Prevent closing on backdrop click
    }}
   
    >
      <MainBox  style={style}>
        <Btn onClick={handleClose}><img src={closeIcon} /></Btn>
        {component && component}
      </MainBox>
    </Modal>
  )
}



const Btn = styled.button`
position: absolute;
right: 1rem;
top: 1rem;
background-color: transparent;
border: none;
cursor: pointer;


img {
  width: 1.2rem;
}

`


const MainBox = styled.div`

display: flex;
  margin: 0 auto;
  background-color: var(--white);
  padding: 2rem 3rem 3rem 2rem;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
  border-radius: 0.3rem;
  margin-top: 5rem;
  overflow-y: auto;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.4rem;
}

  &::-webkit-scrollbar-track {
    background: lightgrey;
    border-radius: 0.4rem;
}

  &::-webkit-scrollbar-thumb {
    background: grey;
    width: 0.4rem;
    border-radius: 0.4rem;
}

& {
  scrollbar-width: none;
} 

`