import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DateInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 48%;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

function Projects() {
  const [formData, setFormData] = useState({
    projectTitle: '',
    client: '',
    details: '',
    status: '',
    startDate: '',
    endDate: '',
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
    // You can handle the submission of project data here.
    console.log('Project Form Data:', formData);
  };

  return (
    <FormContainer>
      <h2>Project Information</h2>
      <Form onSubmit={handleSubmit}>
        <Label>Project Title:</Label>
        <Input
          type="text"
          name="projectTitle"
          value={formData.projectTitle}
          onChange={handleChange}
        />
        <Label>Client:</Label>
        <Input
          type="text"
          name="client"
          value={formData.client}
          onChange={handleChange}
        />
        <Label>Details:</Label>
        <Input
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
        />
        <Label>Status:</Label>
        <Select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Select</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Select>
        <Label>Duration:</Label>
        <DateInput
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
        <span> to </span>
        <DateInput
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  );
}

export default Projects;
