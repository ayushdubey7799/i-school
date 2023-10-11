import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";


const style = {
  display: "flex",
  margin: "0 auto",
  width: "35%",
  height: "70vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 3,
  px: 6,
  pb: 6,
  mb: 2,
  borderRadius: 2,
  marginTop: "6rem",
  overflowY: "auto"
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
  const handleClose = () => {
    setOpenNewInterviewModal(false);
  };
  

  return (
        <Modal
        open={openNewInterviewModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
         <Component array={array}/>
        </Box>
      </Modal>
    )
  
     
  
}


