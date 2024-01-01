import React from 'react'
import styled from 'styled-components'

const DeactivateDialogContent = ({ text, handleClose, handleDeactivate }) => {
    return (
        <Box>
            <span className='title'>Are you sure you want to deactivate this {text}</span>
            <span className='subTitle'>This will deactivate this {text} permanently. You cannot undo this action.</span>

            <div className='btnBox'>
                <button className='btn btn1' onClick={handleClose}>Cancel</button>
                <button className='btn btn2' onClick={() => handleDeactivate()}>Deactivate</button>
            </div>
        </Box>
    )
}

export default DeactivateDialogContent

const Box = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding: 1.5rem 2rem;
gap: 2rem;
justify-content: center;
align-items: center;
box-sizing: border-box;


.title {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 700;
}

.subTitle {
    width: 100%;
    font-size: 0.9rem;
    font-weight: 500;
}


.btnBox {
    display: flex;
    gap: 1rem;


    .btn {
        padding: 0.8rem 1.7rem;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
    }

    .btn1 {
        background-color: var(--white);
        border: 0.1rem solid var(--color);
    }

    .btn2 {
        background-color: var(--color);
        border: 0.1rem solid var(--color);
        color: var(--white);
    }
}
`

