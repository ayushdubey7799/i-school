import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import closeIcon from '../../../assets/icons/closeIcon.png'


const style = {
  display: "flex",
  margin: "0 auto",
  width: "40%",
  height: "65vh",
  bgcolor: "background.paper",
  border: "0.08rem solid #000",
  boxShadow: 24,
  pt: 3,
  px: 6,
  pb: 6,
  mb: 2,
  borderRadius: 2,
  marginTop: "6rem",
  overflowY: "auto",
  position: 'relative'
};

export default function ModalHOC({
  openNewInterviewModal,
  setOpenNewInterviewModal,
  Component,
  array = []
}) {

  const handleOpen = () => {
    setOpenNewInterviewModal(true);
  };
  const handleClose = (event, reason) => {
    console.log(event, reason);
    if (reason && reason == "backdropClick") {
      toast.warn("WARNING")
      return;
    }
    setOpenNewInterviewModal(false);
  };


  return (
    <Modal
      open={openNewInterviewModal}
      onClose={handleClose}
      closeAfterTransition
      disableBackdropClick
    >
      <Box sx={{ ...style }}>
        <Btn onClick={handleClose}><img src={closeIcon}/></Btn>
        <Component array={array} handleClose={handleClose}/>
      </Box>
    </Modal>
  )



}



const Btn = styled.button`
position: absolute;
right: 0.5rem;
top: 0.5rem;
background-color: transparent;
border: none;
cursor: pointer;

img {
  width: 2rem;
}

`