import React, { useState } from 'react';
import styled from 'styled-components'

const CommonButton = ({ text, func, disabled = false, width }) => {

    return (
        <Button onClick={func} disabled={disabled} style={{ width: width ? width : '' }}>{text}</Button>
    )
}

export default CommonButton;

const Button = styled.button`
    background-color: var(--lightOrange);
    color: ${(props) => (props.disabled ? '#e9e9e9' : 'var(--white)')};
    border-radius: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    cursor: ${(props) => (props.disabled ? '' : 'pointer')};
    padding: 0.75rem 1.5rem;
    display: flex;
    justify-content: center;
`

