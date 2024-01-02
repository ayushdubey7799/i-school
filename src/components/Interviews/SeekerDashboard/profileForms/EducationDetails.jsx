import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import { updateEducation } from '../../../../functions/api/jobSeekers/updateEducation';
import { addEducations } from '../../../../functions/api/jobSeekers/addEducations';

const EducationDetails = ({ data, mode, handleClose, id }) => {

  const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [formData, setFormData] = useState();

  const [issueDate, setIssueDate] = useState(dayjs(new Date()));
  const [expirationDate, setExpirationDate] = useState(dayjs(new Date()));

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
      setIssueDate(dayjs(data?.startDate))
      setExpirationDate(dayjs(data?.endDate))
    }
  }, [])


  const handleSubmit = async () => {
    try {
      const startDate = moment(issueDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');
      const endDate = moment(expirationDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');

      if (mode === 'create') {
        const payload = {
          school: formData?.school,
          degree: formData?.degree,
          course: formData?.course,
          courseType: formData?.courseType,
          grade: formData?.grade,
          gradeType: formData?.gradeType,
          startDate: startDate,
          endDate: endDate
        }

        const res = await addEducations(profileId, payload, accessToken);

        if (res) {
          toast.success('Education added successfully')
          handleClose();
        }
      } else {
        const payload = {
          school: formData?.school,
          degree: formData?.degree,
          course: formData?.course,
          courseType: formData?.courseType,
          grade: formData?.grade,
          gradeType: formData?.gradeType,
          startDate: startDate,
          endDate: endDate
        }

        const res = await updateEducation(id, payload, accessToken)

        if (res) {
          toast.success('Education edited successfully')
          handleClose();
        }
      }
    } catch (error) {
      const errMsg =
        error?.message ||
        "An error occurred. Please try again.";
      toast.error(errMsg, 5000);
    }
  }

  return (
    <Box>
      <span className='title'>{mode === 'create' ? 'Add Your Education' : 'Update Your Education'}</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="University Name"
            variant="outlined"
            type="text"
            value={formData?.school}
            name='school'
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
            label="Degree"
            variant="outlined"
            type="tel"
            value={formData?.degree}
            name='degree'
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
            label="Course"
            variant="outlined"
            type="text"
            name='course'
            value={formData?.course}
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
            label="Course Type"
            variant="outlined"
            type="text"
            name='courseType'
            value={formData?.courseType}
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
          <FormControl sx={{ backgroundColor: '#F6F6FB', padding: '0' }} fullWidth>
            <InputLabel id="demo-simple-select-label">Grade type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Grade type"
              size='small'
              name='gradeType'
              value={formData?.gradeType}
              onChange={handleChange}
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
                padding: '0rem 0 0.3rem 0',
              }}
            >
              <MenuItem value="0-4cgpa">0 to 4 CGPA</MenuItem>
              <MenuItem value="0-10cgpa">0 to 10 CGPA</MenuItem>
              <MenuItem value="percentage">0 to 100%</MenuItem>
              <MenuItem value="a-f">A to F</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Grades"
            variant="outlined"
            type="text"
            name='grade'
            value={formData?.grade}
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
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="Start Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={issueDate} onChange={(newValue) => setIssueDate(dayjs(newValue))} />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="End Date (or Expected)" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={expirationDate} onChange={(newValue) => setExpirationDate(dayjs(newValue))} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <Button onClick={handleSubmit}>{mode === 'create' ? 'Add' : 'Save Changes'}</Button>
      </Form>
    </Box>
  )
}

export default EducationDetails

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

