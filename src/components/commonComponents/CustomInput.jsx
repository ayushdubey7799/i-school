import React, { useState } from "react";
import styled from "styled-components";

function CustomInput({ accept, id, fileHandleFnc, text }) {
    const [fileSelected, setFileSelected] = useState("");

    const onChange = (e) => {
        console.log(e.target.files);
        setFileSelected(e.target.files[0].name);
        fileHandleFnc(e.target.files[0]);
    };

    return (
        <StyledInput>
            <label
                htmlFor={id}
                className={`customInput ${!fileSelected ? "labelInput" : "active"}`}
            >
                {fileSelected ? `${fileSelected}` : text}
            </label>
            <input
                type="file"
                accept={accept}
                id={id}
                style={{ display: "none" }}
                onChange={onChange}
            />
        </StyledInput>
    );
}

export default CustomInput;

const StyledInput = styled.div`

display: flex;
justify-content: center;

  .customInput {
    background-color: var(--lightOrange);
    color: var(--white);
    border: 0.1rem solid var(--white);
    border-radius: 0.5rem;
    padding: 0.5rem 0.8rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .customInput::placeholder {
    color: var(--white);
  }

  .labelInput {
    color: var(--white);
  }

  .active {
    border-color: var(--lightOrange);
    background-color: var(--white);
    color: var(--color);
  }
`;
