import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  width: 100%;
  height: 100%;
  align-items: center;
  font-size: 0.8rem;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 0.8rem;
  font-weight: 400;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: #F6F6FB;
  outline-color: #ccc;
  box-sizing: border-box;
  font-size: 0.8rem;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: #F6F6FB;
  outline-color: #ccc;
  box-sizing: border-box;
  font-size: 0.8rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  background-color: #F6F6FB;
  outline-color: #ccc;
  box-sizing: border-box;
  font-size: 0.8rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

function EmployerDetails({ handleClose }) {
  const user = useSelector(state => state.auth.userData.user);
  const [formData, setFormData] = useState({
    company: "",
    coordinatorName: "",
    industry: "",
    employees: "",
    location: "",
    address: "",
    email: "",
    contact: "",
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
    handleClose();
  };

  return (
    <Container>
      <div>
      <h2>User Information</h2>
      <ul>
        <li>First Name: {user.firstName}</li>
        <li>Last Name: {user.lastName}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Phone Number: {user.primaryContact}</li>
        <li>Address: {user.address}</li>
        <li>City: {user.city}</li>
        <li>State: {user.state}</li>
        <li>Client Code: {user.clientCode}</li>
        <li>Created At: {user.createdAt}</li>
        <li>Updated At: {user.updatedAt}</li>
        <li>Created By: {user.createdBy}</li>
        <li>Last Modified By: {user.lastModifiedBy}</li>
        <li>ID: {user.id}</li>
        <li>Activation Required: {user.activationRequired ? 'Yes' : 'No'}</li>
        <li>Active: {user.active ? 'Yes' : 'No'}</li>
        <li>Enforce Password Change: {user.enforcePwdChange ? 'Yes' : 'No'}</li>
        <li>Profile ID: {user.profileId}</li>
        <li>User State: {user.userState}</li>
        <li>User Type: {user.userType}</li>
      </ul>
    </div>
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
          rows={3}
        />

        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <Label>Contact</Label>
        <Input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <Label>Legal Contact</Label>
        <Input
          type="tel"
          name="legalContact"
          value={formData.legalContact}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default EmployerDetails;


