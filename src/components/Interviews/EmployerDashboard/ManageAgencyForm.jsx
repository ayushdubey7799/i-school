import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;
  background-color: var(--white);

  .title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: block;
  }

  form {
    display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
  gap: 1rem;

  .inputBox {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }
  .input {
    width: 50%;
  }

  .MuiFormHelperText-root {
    font-size: 0.6rem;
  }
  
  @media (max-width: 2000px) {
    #outlined-basic {
      padding: 0.75rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1700px) {
    #outlined-basic {
      padding: 0.85rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1350px) {
    #outlined-basic {
      padding: 0.95rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1200px) {
    #outlined-basic {
      padding: 1rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  }
`;




const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--lightOrange);
  color: #fff;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-family: var(--font);
  font-size: 0.9rem;
  font-weight: 600;
`;

function ManageAgencyForm({ array }) {
    const [mode, setMode] = useState(array[1]);
    const [formData, setFormData] = useState({
        agencyCode: '',
        agencySpocName: '',
        agencySpocEmail: '',
        agencySpocContact: '',
    });


    useEffect(() => {
        if (array[0]) {
            setFormData(array[0]);
        }
        setMode(array[1])
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    };


    return (
        <Container>
            <span className='title'>Add Agency</span>

            <ValidatorForm onSubmit={handleSubmit} instantFeedback={false}>
                <div className="inputBox">
                    <div className='input'>
                        <FormControl sx={{ backgroundColor: '#F6F6FB', padding: '0' }} fullWidth required>
                            <InputLabel id="demo-simple-select-label">Agency</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Agency"
                                name="agencyCode"
                                value={formData.agencyCode}
                                onChange={handleChange}
                                size='small'
                                inputProps={{
                                    sx: {
                                        color: '#626264',
                                        fontSize: '0.8rem',
                                        fontWeight: '400'
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: '#626264',
                                        fontSize: '0.8rem',
                                        fontWeight: '400'
                                    },
                                }}
                                sx={{
                                    padding: '0rem 0 0.6rem 0',
                                }}
                            >
                                <MenuItem value="ag1">Agency 1</MenuItem>
                                <MenuItem value="ag2">Agency 2</MenuItem>
                                <MenuItem value="ag3">Agency 3</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='input'>
                        <TextValidator id="outlined-basic" label="Spoc Contact" variant="outlined"
                            type="tel"
                            name="agencySpocContact"
                            value={formData.agencySpocContact}
                            onChange={handleChange}
                            errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
                            validators={['required', 'isNumber', 'minStringLength:10']}
                            fullWidth
                            inputProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                        />

                    </div>
                </div>

                <div className="inputBox">
                    <div className='input'>
                        <TextValidator id="outlined-basic" label="Spoc Name" variant="outlined"
                            type="text"
                            name="agencySpocName"
                            value={formData.agencySpocName}
                            onChange={handleChange}
                            errorMessages={["This field is required", 'Must be a least 3 characters long', 'Must be less than 30 chatacters long']}
                            validators={['required', 'minStringLength:3', 'maxStringLength:29']}
                            fullWidth
                            inputProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                        />
                    </div>

                    <div className='input'>
                        <TextValidator id="outlined-basic" label="Spoc Email" variant="outlined"
                            type="email"
                            name="agencySpocEmail"
                            value={formData.agencySpocEmail}
                            onChange={handleChange}
                            disabled={mode == "edit"}
                            errorMessages={["This field is required", 'Email is not valid']}
                            validators={['required', 'isEmail']}
                            fullWidth
                            inputProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: '#626264',
                                    fontSize: '0.8rem',
                                    fontWeight: '400'
                                },
                            }}
                        />
                    </div>
                </div>

                <Button type="submit">{mode == "create" ? "Add Agency" : "Edit Agency"}</Button>
            </ValidatorForm>
        </Container>
    );
}

export default ManageAgencyForm;
