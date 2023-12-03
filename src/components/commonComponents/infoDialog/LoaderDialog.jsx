import React from 'react'
import styled from 'styled-components'

const LoaderDialog = () => {
    return (
        <Box>
            <iframe src="https://lottie.host/embed/9dba8e12-cd91-4060-bd90-7764990671d0/e0U0LcjhCB.json" style={{ backgroundColor: 'transparent', border: 'none' }}></iframe>
        </Box>
    )
}

export default LoaderDialog

const Box = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);


`