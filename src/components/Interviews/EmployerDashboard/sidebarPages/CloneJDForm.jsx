import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

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
            <div className='box'>
            <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
                <InputLabel id="demo-simple-select-label" sx={{fontStyle: 'Quicksand, sans-serif', fontSize: '0.9rem'}}>All JDs</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedJd?.jdId}
                    label="All JDs"
                    onChange={(e) => setSelectedJd(e.target.value)}
                    sx={{fontStyle: 'Quicksand, sans-serif', fontSize: '0.9rem'}}
                >
                    {
                        jdData?.map((item, i) => (
                            <MenuItem value={item} sx={{fontStyle: 'Quicksand, sans-serif', fontSize: '0.9rem'}}>{item?.jdId}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <div className='btnBox'>
                <Button onClick={handleClone}>Clone JD</Button>
                </div>
            </div>
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

.box {
    display: grid;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    grid-template-columns: 3fr 2.5fr;

    .btnBox {
        display: flex;
        width: 100%;
        justify-content: end;
        align-items: center;
    }
}

input {
    width: 50%;
}

.title {
    align-self: start;
    font-size: 0.9rem;
    font-weight: 600;
}

`

const Button = styled.button`
background-color: var(--lightOrange);
color: var(--white);
padding: 0.5rem 1rem;
font-size: 0.9rem;
font-weight: 600;
border-radius: 0.3rem;
border: none;
cursor: pointer;
font-family: Quicksand, sans-serif;


`