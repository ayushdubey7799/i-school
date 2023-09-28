import React, { useState } from "react";
import styled from "styled-components";

export default function ProfessionalInfo() {
  const [formData, setFormData] = useState({
    experience: "freshers",
    location: "",
    currentCompany: "",
    currentRole: "",
    totalExperience: "",
    relevantExperience: "",
    skillsTechnologies: "",
    jobHistory: "",
    workerType: "",
    noticePeriod: "",
    certifications: "",
    references: "",
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
      <h3>Professional Information</h3>
      <StyledForm onSubmit={handleSubmit}>

        <Label>Location:</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <Label>Current Company:</Label>
        <Input
          type="text"
          name="currentCompany"
          value={formData.currentCompany}
          onChange={handleChange}
        />

        <Label>Current Role:</Label>
        <Input
          type="text"
          name="currentRole"
          value={formData.currentRole}
          onChange={handleChange}
        />

        <Label>Total Experience:</Label>
        <Input
          type="text"
          name="totalExperience"
          value={formData.totalExperience}
          onChange={handleChange}
        />

        <Label>Relevant Experience:</Label>
        <Input
          type="text"
          name="relevantExperience"
          value={formData.relevantExperience}
          onChange={handleChange}
        />

        <Label>Skills and Technologies:</Label>
        <Textarea
          name="skillsTechnologies"
          value={formData.skillsTechnologies}
          onChange={handleChange}
          rows="4"
        ></Textarea>

        {/* <Label>Job History (from Naukri):</Label>
        <Textarea
          name="jobHistory"
          value={formData.jobHistory}
          onChange={handleChange}
          rows="4"
        ></Textarea> */}

        <Label>Worker Type:</Label>
        <Input
          type="text"
          name="workerType"
          value={formData.workerType}
          onChange={handleChange}
        />

        <Label>Notice Period (in days):</Label>
        <Input
          type="text"
          name="noticePeriod"
          value={formData.noticePeriod}
          onChange={handleChange}
        />

        <Label>Certifications:</Label>
        <Textarea
          name="certifications"
          value={formData.certifications}
          onChange={handleChange}
          rows="4"
        ></Textarea>

        <Label>References:</Label>
        <Textarea
          name="references"
          value={formData.references}
          onChange={handleChange}
          rows="4"
        ></Textarea>

        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  p{
    font-size: 1rem;
  }

  overflow: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.7rem;
    font-weight: bold;
  }

  textarea {
    width: 95%;
    margin-top: 0rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    resize: vertical; /* Allow vertical resizing */
    overflow-y: auto; /* Add vertical scrollbar when needed */
  }

  button {
    background-color: #007bff;
    color: #fff;
    height: 3rem;
    border-radius: 0.4rem;
    width: 100%;
  }
`;



const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  margin-top: 0.3rem;
  border-radius: 0.5rem;
  padding: 0.3rem;
  font-size: 1rem;
  resize: vertical; 
  overflow-y: scrollable; 
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
