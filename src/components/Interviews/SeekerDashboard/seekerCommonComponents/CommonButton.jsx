import React, { useState } from 'react';
import styled from 'styled-components'

const CommonButton = ({ text, func }) => {

    return (
        <Button onClick={func}>{text}</Button>
    )
}

export default CommonButton;

const Button = styled.button`
    background-color: var(--lightOrange);
    color: var(--white);
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    padding: 0.75rem 1.5rem;
    display: flex;
    

`

