import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h3{
    font-size: 1rem;
  }

  span{
    font-size: 0.7rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 0.7rem;
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
`;

function Education() {
  const [formData, setFormData] = useState({
    education: '',
    university: '',
    course: '',
    specialization: '',
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
    // You can handle the submission of education data here.
    console.log('Education Form Data:', formData);
  };

  return (

    <FormContainer>
    <h3>Add Education</h3>

      <Form onSubmit={handleSubmit}>
        <Label>Education:</Label>
        <Select
          name="education"
          value={formData.education}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="high_school">High School</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
        </Select>
        <Label>University/Institute:</Label>
        <Input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
        />
        <Label>Course:</Label>
        <Input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />
        <Label>Specialization:</Label>
        <Input
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
        <Label>Course Duration:</Label>
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

export default Education;
