import React from 'react'
import { TextField } from "@mui/material";
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

const BasicDetails = ({ formData, setFormData, handleEdit }) => {

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <Box>
      <span className='title'>Basic Details</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Designation"
            variant="outlined"
            type="text"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
        </div>

        <div className='inputBox'>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            type="tel"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
        </div>

        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="Profile URL"
            variant="outlined"
            type="url"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Portfolio URL"
            variant="outlined"
            type="url"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
        </div>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="LinkedIn Profile URL"
            variant="outlined"
            type="url"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
          <TextField
            id="outlined-basic"
            label="Github Profile URL"
            variant="outlined"
            type="url"
            sx={{ backgroundColor: "#F6F6FB" }}
            inputProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            InputLabelProps={{
              sx: {
                color: "#626264",
                fontSize: "0.8rem",
                fontWeight: "400",
              },
            }}
            fullWidth
          />
        </div>

        <div className='inputBox' style={{ width: 'calc(50% - 1rem)' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="Date of Birth" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>

        </div>

        <Button onClick={handleEdit}>Save Changes</Button>
      </Form>
    </Box>
  )
}

export default BasicDetails

const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.3rem;


  .title {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 2rem;
    display: block;
    margin-bottom: 1rem;
  }
`

const Form = styled.div`
display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;

  .inputBox {
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 2000px) {
    #outlined-basic {
      padding: 0.75rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1700px) {
    #outlined-basic {
      padding: 0.85rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1350px) {
    #outlined-basic {
      padding: 0.95rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }

  @media (max-width: 1200px) {
    #outlined-basic {
      padding: 1rem 0.5rem;
      background-color: #F6F6FB;
      font-family: var(--font);
    }
  }


`

const Button = styled.button`
  padding: 0.7rem 1.2rem;
  background-color: var(--lightOrange);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
  font-family: var(--font);
`;

