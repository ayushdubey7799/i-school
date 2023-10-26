import React, { useState } from 'react'
import styled from 'styled-components'


const optionsArr = [1, 2, 3, 4, 5, 6, 7];

const ConfigureDash = () => {

    const [selected, setSelected] = useState(0);

    const handleOptionClick = (option) => {
        setSelected(option);
    }

    return (
        <Box>
            {
                optionsArr.map((option, i) => (
                    <div className={`option ${selected == i ? 'selected' : ''}`} onClick={() => handleOptionClick(i)}>Option {i + 1}</div>
                ))
            }
        </Box>
    )
}

export default ConfigureDash


const Box = styled.div`
width: 90%;
display: flex;
justify-content: start;
gap: 2rem;
margin: 4rem auto;
flex-flow: row wrap;

.option {
    background-color: var(--white);
    font-size: 1.05rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;

}

.selected {
    background-color: var(--lightOrange);
    color: var(--white);

}

`