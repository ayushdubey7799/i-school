import React, { useState } from 'react'
import styled from 'styled-components'

const ExportDialogContent = ({ handleClose, handleExport }) => {
    const [exportType, setExportType] = useState('');

    const handleExportTypeChange = (inp) => {
        setExportType(inp);
    }

    return (
        <Box>
            <div className='topBox'>
                <span className='title'>Format selection</span>

                <div className='inputBox'>
                    <div className='childInputBox'>
                        <label>
                            <input
                                type="radio"
                                value="xls"
                                checked={exportType === 'xls'}
                                onChange={() => handleExportTypeChange('xls')}
                            />
                            <span>Export as .xls</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="csv"
                                checked={exportType === 'csv'}
                                onChange={() => handleExportTypeChange('csv')}
                            />
                            <span>Export as .csv</span>
                        </label>
                    </div>

                    <div className='childInputBox'>
                        <label>
                            <input
                                type="radio"
                                value="pdf"
                                checked={exportType === 'pdf'}
                                onChange={() => handleExportTypeChange('pdf')}
                            />
                            <span>Export as .pdf</span>
                        </label>

                        <label>
                            <input
                                type="radio"
                                value="link"
                                checked={exportType === 'link'}
                                onChange={() => handleExportTypeChange('link')}
                            />
                            <span>Share as link</span>
                        </label>
                    </div>
                </div>
            </div>

            <span className='btnBox'>
                <button className='btn btn1' onClick={handleClose}>Cancel</button>
                <button className='btn btn2' onClick={handleExport}>{exportType === 'link' ? 'Share' : 'Export'}</button>
            </span>
        </Box>
    )
}

export default ExportDialogContent


const Box = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding: 1.5rem 5rem;
box-sizing: border-box;
gap: 2rem;
align-items: center;


.topBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;

    .inputBox {
        display: flex;
        flex-direction: row;
        align-items: start;
        gap: 1rem;

        .childInputBox {
            display: flex;
            flex-direction: column;

        }
    }
    .title {
        font-size: 0.9rem;
        font-weight: 600;
    }
}

.btnBox {
    display: flex;
    gap: 1rem;


    .btn{
        border: none;
        border-radius: 0.3rem;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        padding: 0.7rem 1.2rem;
    }

    .btn1 {
        background-color: var(--white);
        border: 0.1rem solid lightgrey;
    }

    .btn2 {
        background-color: var(--lightOrange);
        color: var(--white);

    }
}

 
label {
	display: flex;
	cursor: pointer;
	font-weight: 500;
	position: relative;
	margin-bottom: 0rem;

	input {
		position: absolute;
		left: -9999px;
		&:checked + span {
			&:before {
				box-shadow: inset 0 0 0 0.3rem var(--lightOrange);
			}
		}
	}
	span {
		display: flex;
		align-items: center;
    font-size: 0.8rem;
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