import React from "react";
import styled from "styled-components";

const SelectInput = ({ value, setValue, optionsArr, titleText }) => {
    return <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="" disabled selected>Select {titleText}</option>
        {
            optionsArr.map((option, i) => (
                <option value={option.value} key={i}>{option.text}</option>
            ))
        }
    </Select>;
};

export default SelectInput;

const Select = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  background-color: var(--white);
  outline: none;
  font-size: 0.9rem;
  font-weight: 400;
  color: #b3b3b3;
  font-family: var(--font);

  option {
    font-size: 0.9rem;
    font-weight: 400;
    border: none;
    color: var(--color);
  }
`;
