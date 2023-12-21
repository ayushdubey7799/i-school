import React, { useState } from 'react'
import styled from 'styled-components';

const McqQueInterface = ({ queComp, options, value, setValue }) => {

    const [selectedOption, setSelectedOption] = useState();

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    }

    return (
        <Box>
            <div className='queText'>{queComp && queComp}</div>

            <div className='mcqOptions'>
                {options.map((option, index) => (
                    <div
                        className={`mcqOption`}
                        onClick={() => {
                            handleOptionSelect(index);
                            setValue(option);
                        }}
                        style={{
                            cursor: selectedOption == index ? "" : "pointer",
                        }}>
                        <span className='optionNumber'>{option.split(".")[0]}.</span>
                        <span
                            id="optionCheckBox"
                            style={{
                                borderColor:
                                    selectedOption === index
                                        ? "var(--lightOrange)"
                                        : "grey",
                            }}
                        >
                            <span
                                className='innerBox'
                                style={{
                                    backgroundColor:
                                        selectedOption === index
                                            ? "var(--lightOrange)"
                                            : "transparent",
                                }}></span>
                        </span>
                        <span className='mcqOptionText'
                            style={{
                                color:
                                    selectedOption === index
                                        ? "var(--lightOrange)"
                                        : "var(--color)",
                            }}>{option.split(".")[1]}</span>
                    </div>
                ))}
            </div>
        </Box>
    )
}

export default McqQueInterface


const Box = styled.div`
width: 100%;
margin: 1rem 0;
display: flex;
flex-direction: column;
gap: 2rem;

.queText {
    display: flex;
    width: 99%;
}

  .mcqOptions {
    display: flex;
    width: 50%;
    flex-direction: column;
    gap: 1rem;
  }
  
  .mcqOption {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  #optionCheckBox {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.075rem solid grey;
    border-radius: 50%;

    .innerBox {
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: var(--white);
    border-radius: 50%; 
    margin: 0.2rem;
    }
  }
  
  .mcqOptionText {
    display: flex;
    flex-flow: row wrap;
    border: 0.075rem solid grey;
    padding: 0.7rem 1rem;
    width: 75%;
    border-radius: 0.3rem;
  }


`