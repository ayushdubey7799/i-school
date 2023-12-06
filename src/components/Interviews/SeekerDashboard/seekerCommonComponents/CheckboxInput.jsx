import React from 'react'
import styled from 'styled-components'

const CheckboxInput = ({ value, handleInputChange, text }) => {
    return (
        <Label>
            <input
                type='checkbox'
                value={value}
                onChange={() => handleInputChange(value)}
            />
            {text}
        </Label>
    )
}

export default CheckboxInput

const Label = styled.label`
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;

  input {
    cursor: pointer;
  }

`