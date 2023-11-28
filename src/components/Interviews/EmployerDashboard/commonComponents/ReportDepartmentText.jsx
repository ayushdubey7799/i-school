import React from 'react'
import styled from 'styled-components'

const ReportDepartmentText = ({ text, color }) => {
    return (
        <Box>
            <span className='icon' style={{backgroundColor: color}}>
                <span className='innerIcon'></span>
            </span>
            <span>{text}</span>
        </Box>
    )
}

export default ReportDepartmentText

const Box = styled.span`
display: flex;
font-size: 0.75rem;
font-weight: 500;
gap: 0.3rem;

.icon {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: relative;
}

.innerIcon {
    width: 0.5rem;
    height: 0.5rem;
    background-color: var(--white);
    position: absolute;
    top: 25%;
    left: 25%;
    border-radius: 50%;
}

`