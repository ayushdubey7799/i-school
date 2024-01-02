import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ReactQuill from 'react-quill';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import { addProjects } from '../../../../functions/api/jobSeekers/addProjects';
import { updateProjects } from '../../../../functions/api/jobSeekers/updateProject';

const ProjectDetails = ({ data, mode, handleClose, id, trigger, setTrigger }) => {

  const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [formData, setFormData] = useState();

  const [issueDate, setIssueDate] = useState(dayjs(new Date()));
  const [expirationDate, setExpirationDate] = useState(dayjs(new Date()));
  const [projectDesc, setProjectDesc] = useState('');

  useEffect(() => {
    if (mode === 'edit') {
      setFormData(data);
      setIssueDate(dayjs(data?.startDate))
      setExpirationDate(dayjs(data?.endDate))
      setProjectDesc(data?.description)
    }
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const startDate = moment(issueDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');
      const endDate = moment(expirationDate.format("YYYY-MM-DD")).utc().format('YYYY-MM-DD');

      if (mode === 'create') {
        const payload = {
          title: formData?.title,
          description: projectDesc,
          status: formData?.status,
          projectUrl: formData?.projectUrl,
          role: formData?.role,
          startDate: startDate,
          endDate: endDate
        }

        const res = await addProjects(profileId, payload, accessToken);

        if (res) {
          toast.success('Project added successfully')
          handleClose();
          setTrigger(!trigger)
        }
      } else {
        const payload = {
          title: formData?.title,
          description: projectDesc,
          status: formData?.status,
          projectUrl: formData?.projectUrl,
          role: formData?.role,
          startDate: startDate,
          endDate: endDate
        }

        const res = await updateProjects(id, payload, accessToken)

        if (res) {
          toast.success('Project updated successfully')
          handleClose();
          setTrigger(!trigger)
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
      <span className='title'>{mode === 'create' ? 'Add Project' : 'Update Project'}</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
            type="text"
            name="title"
            value={formData?.title}
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
            label="Role (your role on project)"
            variant="outlined"
            type="text"
            name="role"
            value={formData?.role}
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
            label="Project URL"
            variant="outlined"
            type="url"
            name="projectUrl"
            value={formData?.projectUrl}
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
          <FormControl sx={{ backgroundColor: '#F6F6FB', padding: '0' }} fullWidth>
            <InputLabel id="demo-simple-select-label">Current Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Current Status"
              size='small'
              name="status"
              value={formData?.status.length > 0 && formData?.status}
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
              <MenuItem value="ongoing">Ongoing</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='inputBox'>
          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="Start Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={issueDate} onChange={(newValue) => setIssueDate(dayjs(newValue))} />
            </DemoContainer>
          </LocalizationProvider>

          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="End Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} value={expirationDate} onChange={(newValue) => setExpirationDate(dayjs(newValue))} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="textAreaBox">
          <label className="textAreaLabel">
            Description
          </label>
          <ReactQuill theme="snow" className="textEditor" value={projectDesc} onChange={setProjectDesc} />
        </div>

        <Button onClick={handleSubmit}>{mode === 'create' ? 'Add' : 'Save Changes'}</Button>
      </Form>
    </Box>
  )
}

export default ProjectDetails

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

  .textAreaBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .textEditor {
      background-color: #F6F6FB;
     }

    .textAreaLabel {
        font-size: 0.8rem;
        font-weight: 500;
    }
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

