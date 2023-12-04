import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
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
    // if (reason && reason == "backdropClick") {
    //   toast.warn("WARNING")
    //   return;
    // }
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
right: 0.8rem;
top: 0.8rem;
background-color: transparent;
border: none;
cursor: pointer;


img {
  width: 2rem;
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