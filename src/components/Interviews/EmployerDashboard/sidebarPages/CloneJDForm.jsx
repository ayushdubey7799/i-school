import React, { useState } from 'react'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const jds = ['jd1', 'jd2', 'jd3', 'jd4', 'jd5', 'jd6']

const CloneJDForm = () => {
    const [selectedJd, setSelectedJd] = useState('');

    return (
        <Box>
            <span className='title'>Clone Existing JD</span>
            <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
                <InputLabel id="demo-simple-select-label">All JDs</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedJd}
                    label="All JDs"
                    onChange={(e) => setSelectedJd(e.target.value)}
                >
                    {
                        jds.map((jd, i) => (
                            <MenuItem value={jd}>{jd}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Button>Clone JD</Button>
        </Box>
    )
}

export default CloneJDForm

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
width: 100%;
margin-top: 2rem;

input {
    width: 100%;
}

.title {
    align-self: start;
    font-size: 1.2rem;
    font-weight: 700;

}

`

const Button = styled.button`
background-color: var(--lightOrange);
color: var(--white);
padding: 0.4rem 0.9rem;
font-size: 0.8rem;
border-radius: 0.3rem;
border: none;
cursor: pointer;


`