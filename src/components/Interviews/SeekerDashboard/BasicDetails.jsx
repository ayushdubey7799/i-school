import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";



export default function BasicDetails() {
  const [formData, setFormData] = useState({
    name: '',
    experience: 'freshers',
    mobile: '',
    email: '',
    availability: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };



  
  

  return (
    
          <FormContainer>
          <h1>Basic Details</h1>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Label>Experience:</Label>
        <div>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="experience"
              value="freshers"
              checked={formData.experience === 'freshers'}
              onChange={handleChange}
            />
            Freshers
          </RadioLabel>
          <RadioLabel>
            <RadioInput
              type="radio"
              name="experience"
              value="experienced"
              checked={formData.experience === 'experienced'}
              onChange={handleChange}
            />
            Experienced
          </RadioLabel>
          </div>
        <Label>Mobile Number:</Label>
        <Input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
        />
        <Label>Email Address:</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
         <Label>Current CTC (in Lakhs):</Label>
        <Input
          type="text"
          name="current"
          value={formData.current}
          onChange={handleChange}
        />
         <Label>Expected CTC (in Lakhs):</Label>
        <Input
          type="text"
          name="expected"
          value={formData.expected}
          onChange={handleChange}
        />
        <Label>Availability to Join (in days):</Label>
        <Input
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  )
}



const FormContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 5px;
  h1{
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
  font-size: 0.8rem;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 0.8rem;

`;

const RadioInput = styled.input`
  margin: 0.5rem 0.5rem;

`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1.4rem;
`;
