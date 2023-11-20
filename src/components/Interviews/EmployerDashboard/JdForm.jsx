import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { addJd } from '../../../functions/api/employers/addJd';
import { useSelector } from 'react-redux';
import { editJd } from '../../../functions/api/employers/editJd';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { toast } from 'react-toastify';


const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.3rem;

  .check {
    width: 100%;
    display: flex;
    justify-content: start;
  }

  .fileInputBox {
    position: relative;
    width: 100%;

    textarea {
      width: 100%;
      border: 1px solid #ccc;
  background-color: #F6F6FB;
  outline-color: #ccc;
  border-radius: 0.5rem;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 400;

    }

    textarea:focus {
      outline-color: #1976D2;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;

  #outlined-basic {
    padding: 0.5rem 0.5rem;
    background-color: #F6F6FB;
  }

  #demo-simple-select-label {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  margin-bottom: 8px;
  font-weight: 500;
  color: grey;
  position: absolute;
  top: -0.5rem;
  left: 1rem;
  background-color: var(--white);
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #F6F6FB;
  outline-color: #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
`;


const Button = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: var(--lightOrange);
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  align-self: center;
`;


function JdForm({ array, handleClose }) {
  const [mode, setMode] = useState("create");
  const [autoReq, setAutoReq] = useState(false);
  const [formData, setFormData] = useState({
    jdId: '',
    reqNumber: '',
    numOfReqs: 0,
    title: '',
    description: '',
    skills: '',
    bu: '',
    exp: '',
    location: '',
    certification: '',
    workType: '',
    ctc: '',
    keywords: '',
    jd: '',
    noticePeriod: '',
    companyType: '',
    candidateAvl: '',
    hiringManager: '',
    recruiter: '',
    // jobSummary: '',
    jdUpload: null,
    visibility: '',
    autoReqNumbers: true
  });



  // {
  // {
  //   "autoReqNumbers": true,
  //   "bu": "engineering",
  //   "certification": "cert-uit",
  //   "ctc": "10LPA",
  //   "department": "Software",
  //   "description": "Seeking a Software Engineer 2 with strong coding skills and 2+ years of experience to develop and maintain software applications, collaborate with cross-functional teams, and contribute to the design and implementation of scalable solutions",
  //   "exp": "3",
  //   "hiringManager": "testing",
  //   "jdId": "xyz-uit5.1",
  //   "jobSummary": "Seeking a Software Engineer 2 with strong coding skills and 2+ years of experience to develop and maintain software applications, collaborate with cross-functional teams, and contribute to the design and implementation of scalable solutions",
  //   "keywords": "Software Development Coding Programming Java Python C++",
  //   "location": "Delhi",
  //   "numOfReqs": 0,
  //   "skills": "Programming Agile Problem-solving Algorithms Communication",
  //   "title": "SDE 2",
  //   "visibility": "PUBLIC",
  //   "workType": "Contract"
  // }
  // }


  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);
  useEffect(() => {
    console.log(array[0])
    if (array[0]) {
      setFormData(array[0]);
    }
    setMode(array[1])
    console.log("props", array[1]);
  }, [])

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode == "create") {
      const resObj = await addJd(formData, accessToken, clientCode);
      if (resObj) toast.success("JD successfully created");
      handleClose();
      console.log(resObj);
    }
    else {
      const editRes = await editJd(formData, accessToken, clientCode);
      if (editRes) toast.success("JD successfully Edited");
      handleClose();
      console.log(editRes);
    }
  };


  return (
    <Container>
      <h3>JD Registration</h3>
      <Form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="JD ID (ABC_XX__)" variant="outlined" type='text' name="jdId" value={formData.jdId} onChange={handleChange} disabled={mode == "edit"} sx={{ backgroundColor: '#F6F6FB' }} size='small'
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
          }} required />

        <TextField id="outlined-basic" label="Req Number (From Employer System)" variant="outlined" name="reqNumber"
          type='text'
          value={autoReq ? "" : formData.reqNumber}
          onChange={handleChange}
          disabled={autoReq}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />


        <FormControlLabel control={<Checkbox type='checkbox'
          onClick={() => setAutoReq(!autoReq)} />} label="Auto Generate Req Number" sx={{ width: '100%', fontSize: '0.8rem', fontWeight: '400' }} />


        <TextField id="outlined-basic" label="Number of Reqs" variant="outlined"
          type="text"
          name="numOfReqs"
          value={formData.numOfReqs}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          required />

        <TextField id="outlined-basic" label="Title" variant="outlined"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        {/* <TextField id="outlined-basic" label="Description" variant="outlined"
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
        /> */}

<div className='fileInputBox'>
          <Label>Job Description</Label>
          <textarea name='description' value={formData.description} onChange={handleChange} rows={5}></textarea>
        </div>



        <TextField id="outlined-basic" label="Skills" variant="outlined"
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          required />


        <TextField id="outlined-basic" label="BU" variant="outlined"
          type="text"
          name="bu"
          value={formData.bu}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        <TextField id="outlined-basic" label="Exp" variant="outlined"
          type="text"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          required />

        <TextField id="outlined-basic" label="Location" variant="outlined"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        <TextField id="outlined-basic" label="Certification" variant="outlined"
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        <TextField id="outlined-basic" label="CTC" variant="outlined"
          type="text"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />



        <TextField id="outlined-basic" label="Keywords" variant="outlined"
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        <TextField id="outlined-basic" label="Hiring Manager" variant="outlined"
          type="text"
          name="hiringManager"
          value={formData.hiringManager}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />

        <TextField id="outlined-basic" label="Recruiter" variant="outlined"
          type="text"
          name="recruiter"
          value={formData.recruiter}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }}
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
          }} />


        {/* <div className='fileInputBox'>
          <Label>Job Description</Label>
          <textarea name='jobSummary' value={formData.jobSummary} onChange={handleChange} rows={5}></textarea>
        </div> */}

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Worker Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.workType}
            label="Worker Type"
            onChange={handleChange}
            name="workType"
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
            <MenuItem value='Full-time'>Full-time</MenuItem>
            <MenuItem value='Part-time'>Part-time</MenuItem>
            <MenuItem value='Contract'>Contract</MenuItem>
          </Select>
        </FormControl>


        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Notice Period"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
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
            <MenuItem value='Immediate'>Immediate</MenuItem>
            <MenuItem value='1week'>1 Week</MenuItem>
            <MenuItem value='2weeks'>2 Weeks</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="2months">2 Months</MenuItem>
            <MenuItem value="3months">3 Months</MenuItem>
            <MenuItem value="6months">6 Months</MenuItem>
          </Select>
        </FormControl>


        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Company Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Company Type"
            name="companyType"
            value={formData.companyType}
            onChange={handleChange}
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
            <MenuItem value="service">Service</MenuItem>
            <MenuItem value="product">Product</MenuItem>
            <MenuItem value="serviceStartup">Service Start up</MenuItem>
            <MenuItem value="productStartup">Product Start up</MenuItem>
          </Select>
        </FormControl>


        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Candidate Availability</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Candidate Availability"
            name="candidateAvl"
            value={formData.candidateAvl}
            onChange={handleChange}
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
            <MenuItem value="Immediate">Immediate</MenuItem>
            <MenuItem value="1week">1 Week</MenuItem>
            <MenuItem value="2weeks">2 Weeks</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="2months">2 Months</MenuItem>
            <MenuItem value="3months">3 Months</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth required>
          <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Visibility"
            name="visibility"
            value={formData.visibility}
            onChange={handleChange}
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
            <MenuItem value="PUBLIC">Public</MenuItem>
            <MenuItem value="PRIVATE">Private</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit">{mode == "create" ? "Submit" : "Edit Changes"}</Button>

      </Form>
    </Container>
  );
}

export default JdForm;
