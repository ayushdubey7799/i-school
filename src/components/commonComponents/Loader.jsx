import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const style = {
    backgroundColor: 'white',
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
}

function Loader({ message }) {
    return (
        <Box sx={style}>
            <CircularProgress />
            <span>{message}</span>
        </Box>
    );
}

export default Loader;



