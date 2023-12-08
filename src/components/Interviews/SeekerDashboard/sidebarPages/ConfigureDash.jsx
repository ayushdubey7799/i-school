import React, { useState } from 'react'
import styled from 'styled-components'
import { seekerMetricOptions } from '../../../../utils/contantData';


const ConfigureDash = () => {

    const [selected, setSelected] = useState(seekerMetricOptions[0].text);
    const [selectedInput, setSelectedInput] = useState();
    const [selectedMetric1, setSelectedMetric1] = useState();
    const [selectedMetric2, setSelectedMetric2] = useState();
    const [selectedMetric3, setSelectedMetric3] = useState();
    const [selectedMetric4, setSelectedMetric4] = useState();
    const [selectedOptionCount, setSelectedOptionCount] = useState(0);

    // const availableMetrics = seekerMetricOptions.filter((metric) => selectedMetric1.text != metric.text || selectedMetric2.text != metric.text || selectedMetric3.text != metric.text || selectedMetric4.text != metric.text);


    const handleOptionClick = (option) => {
        setSelected(option);
    }

    const handleInputChange = (inp) => {
        setSelectedInput(inp.text);

        if (selected === seekerMetricOptions[0].text) {
            setSelectedMetric1(inp);
        } else if (selected === seekerMetricOptions[1].text) {
            setSelectedMetric2(inp);
        } else if (selected === seekerMetricOptions[2].text) {
            setSelectedMetric3(inp);
        } else if (selected === seekerMetricOptions[3].text) {
            setSelectedMetric4(inp);
        }
    }


    const handleSave = () => {

    }



    return (
        <MainBox>
            <Button onClick={handleSave}>Save Changes</Button>
            <div className='optionBox'>
                {
                    seekerMetricOptions.map((option, i) => (
                        <div className={`option ${selected == option.text ? 'selected' : ''}`} onClick={() => {
                            handleOptionClick(option.text)
                            setSelectedOptionCount(i);
                        }}>Metric {i + 1}</div>
                    ))
                }
            </div>

            <ContentBox selectedOptionCount={selectedOptionCount}>
                {
                    seekerMetricOptions.map((option, i) => (
                        <label>
                            <input
                                type="radio"
                                checked={selectedInput == option.text}
                                onClick={() => handleInputChange(option)}
                            />
                            <span>{option.title}</span>
                        </label>
                    ))
                }
            </ContentBox>
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
position: relative;

.optionBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2.5%;
}

.option {
    background-color: var(--white);
    font-size: 1.1rem;
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
    position: relative;
}



`

const Button = styled.button`
background-color: var(--lightOrange);
padding: 0.5rem 1rem;
border: none;
border-radius: 0.5rem;
margin-bottom: 1rem;
color: var(--white);
font-size: 0.9rem;
font-weight: 600;
cursor: pointer;
align-self: end;
font-family: var(--font);
`

const ContentBox = styled.div`
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
    position: absolute;
    top: 7rem;
    left: ${(props) => (props.selectedOptionCount < 3 && props.selectedOptionCount * 25)}%;
    right: ${(props) => (props.selectedOptionCount === 3 ? '0%' : 'auto')};
     
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

`