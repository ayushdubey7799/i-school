import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 5px;

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;


  #outlined-basic {
    padding-top: 0.9rem;
    padding-bottom: 0.8rem;
    font-size: 0.9rem;
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
            <Form onSubmit={handleSubmit}>

                <TextField id="outlined-basic" label="Name" variant="outlined"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ backgroundColor: '#F6F6FB' }}
                />

                <TextField id="outlined-basic" label="Email" variant="outlined"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={mode == "edit"}
                    sx={{ backgroundColor: '#F6F6FB' }}
                />

                <TextField id="outlined-basic" label="Contact" variant="outlined"
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    disabled={mode == "edit"}
                    sx={{ backgroundColor: '#F6F6FB' }}
                />


                <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    >
                        <MenuItem value="Admin">Admin</MenuItem>
                        <MenuItem value="Agency">Agency</MenuItem>
                        <MenuItem value="Recruiter">Recruiter</MenuItem>
                        <MenuItem value="Operator">Operator (Read Only)</MenuItem>
                    </Select>
                </FormControl>

                <Button type="submit">{mode == "create" ? "Add User" : "Edit User"}</Button>
            </Form>
        </Container>
    );
}

export default ManageUserForm;
