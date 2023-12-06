import { TextField } from '@mui/material';
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

  form {
    display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
  gap: 1rem;

  .MuiFormHelperText-root {
    font-size: 0.6rem;
  }
  
  @media (max-width: 2000px) {
    #outlined-basic {
      padding: 0.75rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1700px) {
    #outlined-basic {
      padding: 0.85rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1350px) {
    #outlined-basic {
      padding: 0.95rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

  @media (max-width: 1200px) {
    #outlined-basic {
      padding: 1rem 0.5rem;
      background-color: #F6F6FB;
    }
  }

//   #demo-simple-select-label {
//     font-size: 0.8rem;
//   }
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
`;

function ManageUserForm({ array, handleClose }) {
    const [mode, setMode] = useState("create");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        role: '',
        agencyName: '',
        agencyContact: '',
    });


    useEffect(() => {
        if (array[0]) {
            setFormData(array[0]);
        }
        setMode(array[1])
        console.log("props", array[1]);
    }, [])

    console.log(formData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <Container>
            <h3>User Registration</h3>

            <ValidatorForm onSubmit={handleSubmit} instantFeedback={false}>

                <TextValidator id="outlined-basic" label="Name" variant="outlined"
                    type="text"
                    name="name"
                    value={formData.name}
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

                <TextValidator id="outlined-basic" label="Email" variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
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

                <TextValidator id="outlined-basic" label="Contact" variant="outlined"
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    disabled={mode == "edit"}
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


                <FormControl sx={{ backgroundColor: '#F6F6FB', padding: '0' }} fullWidth required>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        name="role"
                        value={formData.role}
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
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Agency">Agency</MenuItem>
                        <MenuItem value="Recruiter">Recruiter</MenuItem>
                        <MenuItem value="Operator">Operator (Read Only)</MenuItem>
                    </Select>
                </FormControl>

                {
                    formData.role === 'Agency' &&
                    <>
                        <TextValidator id="outlined-basic" label="Agency Name" variant="outlined"
                            type="text"
                            name="agencyName"
                            value={formData.agencyName}
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
                        <TextValidator id="outlined-basic" label="Agency Contact" variant="outlined"
                            type="tel"
                            name="agencyContact"
                            value={formData.agencyContact}
                            onChange={handleChange}
                            fullWidth
                            errorMessages={["This field is required", 'Must be a number', 'Must be at least 10 characters long',]}
                            validators={['required', 'isNumber', 'minStringLength:10']}
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
                    </>
                }

                <Button type="submit">{mode == "create" ? "Add User" : "Edit User"}</Button>
            </ValidatorForm>
        </Container>
    );
}

export default ManageUserForm;
