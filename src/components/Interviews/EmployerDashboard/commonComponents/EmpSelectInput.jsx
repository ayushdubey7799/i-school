import React from "react";
import styled from "styled-components";

const EmpSelectInput = ({ value, setValue, optionsArr }) => {
  return <Select value={value} onChange={(e) => setValue(e.target.value)}>
    <option value="" disabled selected>Filter By</option>
    {
      optionsArr?.map((option, i) => (
        <option value={option.value} key={i} className="option">{option.text}</option>
      ))
    }
  </Select>;
};

export default EmpSelectInput;



const Select = styled.select`
  height: 2.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  background-color: #ececec;
  outline: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: #7D87A9;
  font-family: var(--font);

  .option {
    font-size: 0.9rem;
    font-weight: 500;
    border: none;
    color: var(--color);
  }
`;
