import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from 'styled-components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ReactQuill from 'react-quill';

const ProjectDetails = ({ data }) => {

  const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Box>
      <span className='title'>Add Project</span>

      <Form>
        <div className="inputBox">
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
            type="text"
            name="title"
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
              <DatePicker label="Start Date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>


          <LocalizationProvider dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DatePicker']} sx={{ width: '100%' }}>
              <DatePicker label="End date" sx={{ backgroundColor: '#F6F6FB', width: '100%' }} />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div className="textAreaBox">
          <label className="textAreaLabel">
            Description
          </label>
          <ReactQuill theme="snow" className="textEditor" />
        </div>

        <Button>Save Changes</Button>
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

