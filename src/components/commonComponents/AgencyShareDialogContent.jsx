import React, { useState } from 'react'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';

const agencies = ['agency1', 'agency2', 'agency3', 'agency4', 'agency5', 'agency6']

const AgencyShareDialogContent = ({ handleClose }) => {
    const [selectedAgency, setSelectedAgency] = useState('');

    const handleShare = () => {
        toast.success(`Shared with ${selectedAgency}`);
        handleClose();
        console.log(selectedAgency);
    }

    return (
        <Box>
            <span className='title'>Share JD with Agency</span>
            <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
                <InputLabel id="demo-simple-select-label">Agencies List</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedAgency}
                    label="All Agencies"
                    onChange={(e) => setSelectedAgency(e.target.value)}
                >
                    {
                        agencies.map((agency, i) => (
                            <MenuItem value={agency}>{agency}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>

            <Button onClick={handleShare}>Share</Button>
        </Box>
    )
}

export default AgencyShareDialogContent

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
width: 100%;
margin-top: 2rem;
padding: 2rem 5rem;
box-sizing: border-box;

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
