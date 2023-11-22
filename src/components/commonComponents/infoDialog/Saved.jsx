import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import styled from 'styled-components';
import savedIcon from '../../../assets/alertBox/savedIcon.png'

const Saved = ({ handleClose, open, msg }) => {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box>
                    <img src={savedIcon} className='icon' />

                    <div className='middleBox'>
                        <span className='title'>Saved Successfully</span>
                        <span className='text'>{msg}</span>
                    </div>

                    <button className='btn' onClick={handleClose}>Continue</button>
                </Box>
            </Dialog>
        </React.Fragment>
    )
}

export default Saved


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
        color: #69D539;
    }

    .text {
        font-size: 0.9rem;
        font-weight: 500;
    }
}

.btn {
    background-color: #69D539;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
}

`