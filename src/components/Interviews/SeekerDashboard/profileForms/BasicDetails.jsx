import React, { useEffect, useState } from 'react'
import { TextField } from "@mui/material";
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import moment from 'moment-timezone';
import { updateResource } from '../../../../functions/api/jobSeekers/updateResource';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const BasicDetails = ({ data, mode, handleClose, id, trigger, setTrigger }) => {

  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [formData, setFormData] = useState();
  const [dob, setDob] = useState(dayjs(new Date()));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (mode === 'edit') {
      setFormData(data);
      setDob(dayjs(data?.dob));
    }
  }, [])

  const handleSubmit = async () => {
    try {
      const dobData = moment(dob.format("YYYY-MM-DD")).format('YYYY-MM-DD');

      const payload = {
        active: true,
        address: formData?.address,
        city: formData?.city,
        dob: dobData,
        email: formData?.email,
        firstName: formData?.firstName,
        lastName: formData?.lastName,
        primaryContact: formData?.primaryContact,
        username: formData?.username,
        linkedin: formData?.linkedin,
        github: formData?.github
      }

      const res = await updateResource(id, payload, accessToken)

      if (res) {
        toast.success('Basic Details updated successfully')
        handleClose();
        setTrigger(!trigger)
    }

    } catch(error) {
      const errMsg = error?.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, 5000);
    }
  }


  return (
    <Box>
      <span className='title'>Basic Details</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            type="text"
            name='firstName'
            value={formData?.firstName}
            onChange={handleChange}
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
            label="Last Name"
            variant="outlined"
            type="text"
            name='lastName'
            value={formData?.lastName}
            onChange={handleChange}
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
            name='email'
            value={formData?.email}
            onChange={handleChange}
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
            name='primaryContact'
            value={formData?.primaryContact}
            onChange={handleChange}
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
            name='linkedin'
            value={formData?.linkedin}
            onChange={handleChange}
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
            name='github'
            value={formData?.github}
            onChange={handleChange}
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
            label="Address"
            variant="outlined"
            type="text"
            name='address'
            value={formData?.address}
            onChange={handleChange}
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
            label="City"
            variant="outlined"
            type="text"
            name='city'
            value={formData?.city}
            onChange={handleChange}
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
              <DatePicker label="Date of Birth" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={dob} onChange={(newValue) => setDob(dayjs(newValue))} />
            </DemoContainer>
          </LocalizationProvider>

        </div>

        <Button onClick={handleSubmit}>Save Changes</Button>
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

