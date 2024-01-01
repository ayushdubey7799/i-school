import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";


export default function CommonModal({
    open,
    setOpen,
    component,
}) {

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (event) => {
        setOpen(false);
    };


    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
        >
            <MainBox>
                {component && component}
            </MainBox>
        </Modal>
    )



}




const MainBox = styled.div`

display: flex;
  margin: 0 auto;
  min-width: 50%;
  max-width: 70%;
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

