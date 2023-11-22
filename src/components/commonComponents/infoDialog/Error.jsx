import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import errorIcon from '../../../assets/alertBox/errorIcon.png'

const Error = ({ handleClose, open, msg, handleRetryFunc }) => {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box>
                    <img src={errorIcon} className='icon' />

                    <div className='middleBox'>
                        <span className='title'>Error</span>
                        <span className='text'>{msg}</span>
                    </div>

                    <button className='btn' onClick={handleRetryFunc}>Try again</button>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}

export default Error


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
        color: #FF0F0F;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 500;
    }
}

.btn {
    background-color: #FF0F0F;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
}

`