import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';
import { getMappings } from '../../functions/api/employers/agency/getMapping';
import { useSelector } from 'react-redux';
import { addJdShare } from '../../functions/api/employers/agency/addJdShare';


const AgencyShareDialogContent = ({ handleClose, jdId }) => {
    const [selectedAgency, setSelectedAgency] = useState('');
    const [mapped, setMapped] = useState([]);

    const accessToken = useSelector(state => state.auth.userData?.accessToken);
    const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);


    useEffect(() => {
        try {
            const getData = async () => {
                const res = await getMappings(accessToken, clientCode);
                console.log(res);
                if (res) setMapped(res?.data);
            }
            getData();
        }
        catch (error) {
            const errMsg =
                error.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, 8000);
        }
    }, []);

    const handleShare = async () => {
        try {
            const payload = {
                agencyIds: [
                    selectedAgency
                ],
                jdId
            }
            const res = await addJdShare(jdId, payload, accessToken, clientCode);
            if (res) toast.success(`Shared with ${selectedAgency}`);
            handleClose();
        }
        catch (error) {
            const errMsg =
                error?.response?.data?.notify?.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, 8000);
        }
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
                        mapped.map((item, i) => (
                            <MenuItem value={item.agencyCode}>{item.agencyName}</MenuItem>
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
width: 30rem;
margin-top: 2rem;
padding: 2rem 5rem;
box-sizing: border-box;


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
