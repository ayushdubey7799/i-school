import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const style = {
    backgroundColor: 'var(--backgroundColor)',
    color: 'var(--lightOrange)',
    position: 'fixed',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.4rem',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
}

function Loader({ message }) {
    return (
        <Box sx={style}>
            <CircularProgress color="inherit" />
            <span style={{ color: 'var(--color)' }}>{message}</span>
        </Box>
    );
}

export default Loader;



