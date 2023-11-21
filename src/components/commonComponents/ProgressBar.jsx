import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
    const [completedWidth, setCompletedWidth] = useState(0);

    useEffect(() => {
        // Update completed width when progress changes
        setCompletedWidth(progress);
    }, [progress]);

    const progressBarStyle = {
        height: '0.6rem',
        width: '5rem',
        borderRadius: '0.3rem',
        border: '0.08rem solid grey',
        overflow: 'hidden',
    };

    const completedStyle = {
        height: '100%',
        width: `${completedWidth}%`,
        backgroundColor: 'green',
    };

    const remainingStyle = {
        height: '100%',
        width: `${100 - completedWidth}%`,
        backgroundColor: 'lightgrey',
    };

    return (
        <div style={progressBarStyle}>
            <div style={completedStyle}></div>
            <div style={remainingStyle}></div>
        </div>
    );
};


export default ProgressBar;
