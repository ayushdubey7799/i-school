import React, { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: bold;
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

const Textarea = styled.textarea`
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

function ReqAgencyDetails() {
  const [formData, setFormData] = useState({
    company: "",
    coordinatorName: "",
    industry: "",
    employees: "",
    location: "",
    address: "",
    email: "",
    legalContact: "",
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
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <Container>
      <h3>Recruitment Agency Profile</h3>
      <Form onSubmit={handleSubmit}>
        <Label>Company</Label>
        <Input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />

        <Label>Coordinator Name</Label>
        <Input
          type="text"
          name="coordinatorName"
          value={formData.coordinatorName}
          onChange={handleChange}
        />

        <Label>Industry</Label>
        <Select
          name="industry"
          value={formData.industry}
          onChange={handleChange}
        >
          <option value="">Select Industry</option>
          <option value="technology">Technology</option>
          <option value="telecom">Telecom</option>
          <option value="services">Services</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="engineering">Engineering</option>
          <option value="bfsi">BFSI</option>
          <option value="commerce">Commerce</option>
          <option value="construction">Construction</option>
          <option value="powerEnergy">Power & Energy</option>
          <option value="healthcare">Healthcare</option>
          <option value="logistics">Logistics</option>
          <option value="agriculture">Agriculture</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="others">Others</option>
          {/* Add more industry options here */}
        </Select>

        <Label>Number of Employees</Label>
        <Select
          name="employees"
          value={formData.employees}
          onChange={handleChange}
        >
          <option value="">Select Number of Employees</option>
          <option value="1">1</option>
          <option value="2-5">2-5</option>
          <option value="6-10">6-10</option>
          <option value="11-25">11-25</option>
          <option value="26-50">26-50</option>
          <option value="51-200">51-200</option>
          <option value="201-1000">201-1000</option>
          <option value="1001-10000">1001-10000</option>
          <option value="10001+">10001+</option>
          {/* Add more employee range options here */}
        </Select>

        <Label>Location</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <Label>Address</Label>
        <Textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label>Legal Contact</Label>
        <Input
          type="text"
          name="legalContact"
          value={formData.legalContact}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default ReqAgencyDetails;
