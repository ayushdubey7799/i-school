import React, { useState } from 'react'
import styled from 'styled-components'
import { seekerMetricOptions } from '../../../../utils/contantData';


const ConfigureDash = () => {

    const [selected, setSelected] = useState(1);

    const handleOptionClick = (option) => {
        setSelected(option);
    }

    return (
        <MainBox>
            <div className='optionBox'>
                {
                    seekerMetricOptions.map((option, i) => (
                        <div className={`option ${selected == i + 1 ? 'selected' : ''}`} onClick={() => handleOptionClick(i + 1)}>Metric {i + 1}</div>
                    ))
                }
            </div>

            <div className='contentBox'>
                {
                    seekerMetricOptions.map((option, i) => (
                        <label>
                            <input
                                type="radio"
                            />
                            <span>{option.title}</span>
                        </label>
                    ))
                }
            </div>
            <Button>Save Changes</Button>
        </MainBox>
    )
}

export default ConfigureDash


const MainBox = styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
gap: 2.5%;
margin: 1rem auto;

.optionBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2.5%;
}

.option {
    background-color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 19%;
    height: 3rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.08rem solid lightgrey;
}

.selected {
    background-color: var(--lightOrange);
    color: var(--white);

}

.contentBox {
    width: 100%;
    // height: 20rem;
    background-color: var(--white);
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border: 0.08rem solid lightgrey;
    gap: 0.5rem;


     
label {
	display: flex;
	cursor: pointer;
	font-weight: 500;
	position: relative;
	margin-bottom: 0rem;
    padding: 0 1rem;

	input {
		position: absolute;
		left: -9999px;
		&:checked + span {
			// background-color: #f0f0f6;
			&:before {
				box-shadow: inset 0 0 0 0.3rem var(--lightOrange);
			}
		}
	}
	span {
		display: flex;
		align-items: center;
        font-size: 0.9rem;
		padding: 0.3rem 0.75rem 0.3rem 0.3rem;
		border-radius: 99rem; // or something higher...
		transition: 0.25s ease;
		&:hover {
			background-color: mix(#fff, var(--lightOrange), 84%);
		}
		&:before {
			display: flex;
			flex-shrink: 0;
			content: "";
			background-color: #fff;
			width: 1rem;
			height: 1rem;
			border-radius: 50%;
			margin-right: 0.375em;
			transition: 0.25s ease;
			box-shadow: inset 0 0 0 0.125em var(--lightOrange);
		}
	}
}
}



`

const Button = styled.button`
background-color: var(--lightOrange);
padding: 0.5rem 1rem;
border: none;
border-radius: 0.5rem;
margin-top: 1rem;
color: var(--white);
font-size: 0.9rem;
font-weight: 600;
cursor: pointer;

`