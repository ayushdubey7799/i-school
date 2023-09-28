import React, { useState } from 'react';
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
  border-radius: 5px;
`;

const Textarea = styled.textarea`
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

const Button = styled.button`
  padding: 10px;
  background-color: #007;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function JdForm() {
  const [formData, setFormData] = useState({
    jdId: '',
    reqNumber: '',
    title: '',
    description: '',
    skill: '',
    bu: '',
    exp: '',
    location: '',
    certification: '',
    workerType: '',
    ctc: '',
    keywords: '',
    jdUpload: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      jdUpload: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Container>
      <h3>JD Registration</h3>
      <Form onSubmit={handleSubmit}>
        <Label>JD ID (ABC_XX__)</Label>
        <Input
          type="text"
          name="jdId"
          value={formData.jdId}
          onChange={handleChange}
        />

        <Label>Req Number (From Employer System)</Label>
        <Input
          type="text"
          name="reqNumber"
          value={formData.reqNumber}
          onChange={handleChange}
        />

        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <Label>Description</Label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <Label>Skill</Label>
        <Input
          type="text"
          name="skill"
          value={formData.skill}
          onChange={handleChange}
        />

        <Label>BU</Label>
        <Input
          type="text"
          name="bu"
          value={formData.bu}
          onChange={handleChange}
        />

        <Label>Exp</Label>
        <Input
          type="text"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
        />

        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <Label>Certification</Label>
        <Input
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
        />

        <Label>Worker Type</Label>
        <Select
          name="workerType"
          value={formData.workerType}
          onChange={handleChange}
        >
          <option value="">Select Worker Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          {/* Add more worker type options here */}
        </Select>

        <Label>CTC</Label>
        <Input
          type="text"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
        />

        <Label>Keywords</Label>
        <Input
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
        />

        <Label>JD Upload</Label>
        <Input
          type="file"
          name="jdUpload"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default JdForm;
