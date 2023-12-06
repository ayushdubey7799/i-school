import React from "react";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import closeIcon from '../../../assets/icons/closeIcon.png'


export default function ModalHOC({
  openNewInterviewModal,
  setOpenNewInterviewModal,
  component,
}) {

  const handleOpen = () => {
    setOpenNewInterviewModal(true);
  };
  
  const handleClose = (event, reason) => {
    console.log(event, reason);
    setOpenNewInterviewModal(false);
  };


  return (
    <Modal
      open={openNewInterviewModal}
      onClose={handleClose}
      closeAfterTransition
    >
      <MainBox>
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
  width: 40%;
  height: 60vh;
  background-color: var(--white);
  padding-top: 2rem;
  padding-left: 6rem;
  padding-right: 6rem;
  padding-bottom: 6rem;
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