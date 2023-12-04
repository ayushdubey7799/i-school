import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

const jds = ['jd1', 'jd2', 'jd3', 'jd4', 'jd5', 'jd6']

const CloneJDForm = ({array}) => {
    const [selectedJd, setSelectedJd] = useState(null);
    const jdData = useSelector(state => state.jd.cloneSpecificData);
    useEffect(() => {
        array[2](selectedJd);
    },[selectedJd])

    const handleClone = () => {
        array[0](true);
        array[1](false);
    }

    return (
        <Box>
            <span className='title'>Clone Existing JD</span>
            <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
                <InputLabel id="demo-simple-select-label">All JDs</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedJd?.jdId}
                    label="All JDs"
                    onChange={(e) => setSelectedJd(e.target.value)}
                >
                    {
                        jdData?.map((item, i) => (
                            <MenuItem value={item}>{item?.jdId}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Button onClick={handleClone}>Clone JD</Button>
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