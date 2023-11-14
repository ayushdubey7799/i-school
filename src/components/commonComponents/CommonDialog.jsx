import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


const CommonDialog = ({ handleClickOpen, handleClose, open, Component }) => {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {Component && <Component />}
                <p style={{ padding: '2rem' }}></p>
            </Dialog>
        </React.Fragment>
    );
}

export default CommonDialog

