import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

const Label = styled.label`
font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  background-color: #F6F6FB;
  outline-color: #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;


const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #F6F6FB;
  outline-color: #ccc;
  box-sizing: border-box;
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
                <Label>Name</Label>
                <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={mode == "edit"}
                />


                <Label>Contact</Label>
                <Input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                />


                <Label>Role</Label>
                <Select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Agency">Agency</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Operator">Operator (Read Only)</option>
                </Select>

                <Button type="submit">{mode == "create" ? "Add User" : "Edit User"}</Button>
            </Form>
        </Container>
    );
}

export default ManageUserForm;
