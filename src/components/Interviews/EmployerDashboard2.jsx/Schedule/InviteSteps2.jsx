import React from 'react'
import styled from "styled-components";


const InviteSteps2 = ({ step, setStep }) => {
    return (
        <Box>
            <div className='topBox'>
                <div className={`checkBox checkBox1 ${step >= 1 ? "active" : ""}`}>1</div>
                <span>Select Date and Time</span>
            </div>
            <div className='topBox'>
                <div className={`checkBox ${step >= 2 ? "active" : ""}`}>2</div>
                <span>Select Interview Parameters</span>
            </div>
            <div className='topBox'>
                <div className={`checkBox ${step >= 3 ? "active" : ""}`}>3</div>
                <span>Review and Confirm</span>
            </div>
        </Box>
    )
}

export default InviteSteps2



const Box = styled.div`
width: 90%;
margin: 0 5%;
display: flex;
justify-content: space-evenly;
position: fixed;
top: 4.5rem;
background-color: var(--white);
border-radius: 1rem;
z-index: 100;
padding: 0.2rem 0;


.checkBox {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
    width: 1.7rem;
    height: 1.7rem;
    background-color: lightgrey;
    border: 0.05rem solid white;
    border-radius: 50%;
}


.topBox > span {
    font-size: 0.9rem;
    font-weight: 600;
}

.active {
    background-color: var(--lightOrange);
    color: white;
}


.topBox {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.2rem;
}



`