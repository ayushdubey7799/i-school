import React, { useState } from 'react'
import styled from 'styled-components'
import DemoHeader from '../components/commonComponents/DemoHeader'
import Footer from '../components/commonComponents/Footer'
import demoPageImg from '../assets/demoPageImg.png'
import { Box, MenuItem, TextField } from '@mui/material'
import { MuiTelInput } from 'mui-tel-input'

const Demo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState();
    const [company, setCompany] = useState('');
    const [website, setWebsite] = useState('');
    const [employees, setEmployees] = useState('');


    const handleSubmit = () => {

    }

    const handleContactChange = (newInput) => {
        setContact(newInput)
    }

    return (
        <StyledDiv>
            <DemoHeader />

            <div className='content'>
                <div className='left'>
                    <img src={demoPageImg} />
                </div>
                <div className='right'>
                    <span className='title'>Get a Free Demo</span>

                    <TextField id="outlined-basic" className='textInput' label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} required />
                    <TextField id="outlined-basic" className='textInput' label="Email" variant="outlined" type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <MuiTelInput defaultCountry="IN" className='textInput' forceCallingCode preferredCountries={['IN', 'US']} value={contact} onChange={handleContactChange} required />
                    <TextField id="outlined-basic" className='textInput' label="Company" variant="outlined" value={company} onChange={(e) => setCompany(e.target.value)} />
                    <TextField id="outlined-basic" className='textInput' label="Website URL" variant="outlined" value={website} onChange={(e) => setWebsite(e.target.value)} />

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select number of Employees"
                        defaultValue="Select number of Employees"
                        className='textInput'
                        value={employees}
                        onChange={(e) => setEmployees(e.target.value)}
                    >
                        <MenuItem value='Select number of Employees' disabled>
                            Select number of Employees
                        </MenuItem>
                        <MenuItem value='1'>
                            1
                        </MenuItem>
                        <MenuItem value='2-5'>
                            2-5
                        </MenuItem>
                        <MenuItem value='6-10'>
                            6-10
                        </MenuItem>
                        <MenuItem value='11-25'>
                            11-25
                        </MenuItem>
                        <MenuItem value='26-50'>
                            26-50
                        </MenuItem>
                        <MenuItem value='51-200'>
                            51-200
                        </MenuItem>
                        <MenuItem value='201-1000'>
                            201-1000
                        </MenuItem>
                        <MenuItem value='1001-10000'>
                            1001-10000
                        </MenuItem>
                        <MenuItem value='10001+'>
                            10001+
                        </MenuItem>
                    </TextField>

                    <button className='btn' onClick={handleSubmit}>Request a free Demo</button>
                </div>
            </div>
            <Footer />
        </StyledDiv>
    )
}

export default Demo


const StyledDiv = styled.div`
display: flex;
flex-direction: column;

.content {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
}

.left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left > img {
    width: 75%;
}

.textInput {
    width: 80%;
}

.right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
}


.btn {
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  @media(max-width: 800px) {

    .left {
        display: none;
    }

    .right {
        width: 100%;
    }

    form {
        width: 90%;
    }

    select {
        width: 80%;
    }

  }


`



