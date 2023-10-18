import React from 'react';

const SkillProgressBar = ({ score }) => {
    const filledWidth = (score / 5) * 100; // Calculate the filled width based on the skill score

    const progressBarStyle = {
        width: '100%', 
        height: '0.3rem',
        background: 'lightgrey', 
        position: 'relative',
        marginLeft: '0.5rem'
    };

    const filledStyle = {
        width: `${filledWidth}%`,
        height: '100%',
        background: 'grey',
        position: 'absolute',
        transition: 'width 0.5s ease-in-out',
    };

    return (
        <div style={progressBarStyle}>
            <div style={filledStyle}></div>
        </div>
    );
};

export default SkillProgressBar;
