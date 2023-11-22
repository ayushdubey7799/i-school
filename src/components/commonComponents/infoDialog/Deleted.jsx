import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import deleteIcon from '../../../assets/alertBox/deleteIcon.png'

const Deleted = ({ handleClose, open, msg }) => {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box>
                    <img src={deleteIcon} className='icon' />

                    <div className='middleBox'>
                        <span className='title'>Deleted Successfully</span>
                        <span className='text'>{msg}</span>
                    </div>

                    <button className='btn' onClick={handleClose}>Continue</button>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}

export default Deleted


const Box = styled.div`
display: flex;
width: 28vw;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1.5rem;
padding: 2rem 2rem;
box-sizing: border-box;
border-radius: 2rem;

.icon {
    width: 5rem;
}

.middleBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .title {
        font-size: 1.7rem;
        font-weight: 700;
        color: #0000FF;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 500;
    }
}

.btn {
    background-color: #0000FF;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
}

`

