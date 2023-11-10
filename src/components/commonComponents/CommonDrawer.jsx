import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import drawerIcon from '../../assets/icons/drawerIcon.png'

const CommonDrawer = ({ toggleDrawer, state, Component }) => {

    const list = (anchor) => (
        <Box
            sx={{ width: '50vw', marginTop: '4rem', padding: '1rem', paddingLeft: '3rem', transition: 'width 3s cubic-bezier(0.23, 1, 0.32, 1)', }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <img src={drawerIcon} style={{ width: '2rem', cursor: 'pointer', position: 'absolute', top: '50%', left: '0.5rem' }} onClick={toggleDrawer(anchor, false)} />
            {Component && <Component />}
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <div key={anchor} style={{ width: '100%' }}>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
        </div>
    )
}

export default CommonDrawer


