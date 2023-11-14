import React from 'react'
import Dialog from '@mui/material/Dialog';


const CommonDialog = ({ handleClose, open, component }) => {

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {component && component}
            </Dialog>
        </React.Fragment>
    );
}

export default CommonDialog

