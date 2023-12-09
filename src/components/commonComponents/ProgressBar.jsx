import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ProgressBar = ({ progress, maxScore }) => {

    const scorePercentage = ((progress * 100) / maxScore);

    const completedStyle = {
        height: '100%',
        width: `${scorePercentage}%`,
        backgroundColor: 'green',
    };

    const remainingStyle = {
        height: '100%',
        width: `${100 - scorePercentage}%`,
        backgroundColor: 'lightgrey',
    };

    return (
        <Box>
            <ProgressBarStyle>
                <div style={completedStyle}></div>
                <div style={remainingStyle}></div>

            </ProgressBarStyle>
            <span className='altText'>{scorePercentage.toFixed(2)}%</span>
        </Box>
    );
};


export default ProgressBar;


const ProgressBarStyle = styled.div`
height: 0.7rem;
width: 5rem;
border-radius: 0.3rem;
border: 0.08rem solid grey;
overflow: hidden;


`

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
position: relative;


.altText {
    background-color: transparent;
    position: absolute;
    top: 0;
    font-size: 0.6rem;
    display: none;
}


&:hover {

    .altText {
        display: block;
    }
}

`