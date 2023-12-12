import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';


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
  width: 80%;
  height: 100%;
  align-items: center;
  font-size: 0.8rem;
  gap: 1.5rem;

  #outlined-basic {
    padding: 0.5rem 0.5rem;
    background-color: #F6F6FB;
  }

  #demo-simple-select-label {
    font-size: 0.8rem;
    font-weight: 400;
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

function EmployerDetails({ handleClose }) {
  const user = useSelector(state => state.auth.userData.user);
  const [formData, setFormData] = useState({
    company: "",
    coordinatorName: user.firstName.toUpperCase(),
    industry: "",
    employees: "",
    location: user.city.toUpperCase(),
    address: user.address.toUpperCase(),
    email: user.email,
    contact: user.primaryContact.toUpperCase(),
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
    
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>

        <TextField id="outlined-basic" label="Company" variant="outlined" type='text' name="company" value={formData.company} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />

        <TextField id="outlined-basic" label="Coordinator Name" variant="outlined" type='text' name="coordinatorName" value={formData.coordinatorName} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Industry</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.industry}
            label="Industry"
            onChange={handleChange}
            name="industry"
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
              padding: '0rem 0 0.5rem 0',
            }}
          >
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="telecom">Telecom</MenuItem>
            <MenuItem value="services">Services</MenuItem>
            <MenuItem value="manufacturing">Manufacturing</MenuItem>
            <MenuItem value="engineering">Engineering</MenuItem>
            <MenuItem value="bfsi">BFSI</MenuItem>
            <MenuItem value="commerce">Commerce</MenuItem>
            <MenuItem value="construction">Construction</MenuItem>
            <MenuItem value="powerEnergy">Power & Energy</MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
            <MenuItem value="logistics">Logistics</MenuItem>
            <MenuItem value="agriculture">Agriculture</MenuItem>
            <MenuItem value="lifestyle">Lifestyle</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Number of Employees</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.employees}
            label="Number of Employees"
            onChange={handleChange}
            name="employees"
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
              padding: '0rem 0 0.5rem 0',
            }}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2-5">2-5</MenuItem>
            <MenuItem value="6-10">6-10</MenuItem>
            <MenuItem value="11-25">11-25</MenuItem>
            <MenuItem value="26-50">26-50</MenuItem>
            <MenuItem value="51-200">51-200</MenuItem>
            <MenuItem value="201-1000">201-1000</MenuItem>
            <MenuItem value="1001-10000">1001-10000</MenuItem>
            <MenuItem value="10001+">10001+</MenuItem>
          </Select>
        </FormControl>


        <TextField id="outlined-basic" label="Location" variant="outlined" type='text' name="location" value={formData.location} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />

        <TextField id="outlined-basic" label="Address" variant="outlined" type='text' name="address" value={formData.address} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />


        <TextField id="outlined-basic" label="Email" variant="outlined" type='email' name="email" value={formData.email} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />


        <TextField id="outlined-basic" label="Contact" variant="outlined" type='tel' name="contact" value={formData.contact} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />


        <TextField id="outlined-basic" label="Legal Contact" variant="outlined" type='tel' name="legalContact" value={formData.legalContact} onChange={handleChange} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          fullWidth />

        <Button type="submit">Submit</Button>
      </Form>
    </Container >
  );
}

export default EmployerDetails;


