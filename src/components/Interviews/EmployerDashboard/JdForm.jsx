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
import { MuiFileInput } from 'mui-file-input'

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
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap: 1rem;

  #outlined-basic {
    padding-top: 0.9rem;
    padding-bottom: 0.8rem;
    font-size: 0.9rem;
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
  padding: 0.5rem 1rem;
  background-color: var(--lightOrange);
  color: #fff;
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
    noticePeriod: '',
    companyType: '',
    candidateAvl: '',
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
      handleClose();
      console.log(resObj);
    }
    else {
      const editRes = await editJd(formData, accessToken, clientCode);
      handleClose();
      console.log(editRes);
    }
  };


  return (
    <Container>
      <h3>JD Registration</h3>
      <Form onSubmit={handleSubmit}>

        <TextField id="outlined-basic" label="JD ID (ABC_XX__)" variant="outlined" type='text' name="jdId" value={formData.jdId} onChange={handleChange} disabled={mode == "edit"} sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Req Number (From Employer System)" variant="outlined" name="reqNumber"
          type='text'
          value={autoReq?"":formData.reqNumber}
          onChange={handleChange}
          disabled={autoReq || mode == "edit"}
          sx={{ backgroundColor: '#F6F6FB' }} />


        <FormControlLabel control={<Checkbox type='checkbox'
          onClick={() => setAutoReq(!autoReq)} />} label="Auto Generate Req Number" sx={{ width: '100%' }} />


        <TextField id="outlined-basic" label="Number of Reqs" variant="outlined"
          type="text"
          name="reqNumber"
          value={formData.reqNumber}
          onChange={handleChange}
          disabled={autoReq || mode == "edit"}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Title" variant="outlined"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Description" variant="outlined"
          name="description"
          value={formData.description}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />



        <TextField id="outlined-basic" label="Skills" variant="outlined"
          type="text"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />


        <TextField id="outlined-basic" label="BU" variant="outlined"
          type="text"
          name="bu"
          value={formData.bu}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Exp" variant="outlined"
          type="text"
          name="exp"
          value={formData.exp}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Location" variant="outlined"
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Certification" variant="outlined"
          type="text"
          name="certification"
          value={formData.certification}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Worker Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formData.workType}
            label="Worker Type"
            onChange={handleChange}
            name="workType"
          >
            <MenuItem value='Full-time'>Full-time</MenuItem>
            <MenuItem value='Part-time'>Part-time</MenuItem>
            <MenuItem value='Contract'>Contract</MenuItem>
          </Select>
        </FormControl>

        <TextField id="outlined-basic" label="CTC" variant="outlined"
          type="text"
          name="ctc"
          value={formData.ctc}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />

        <TextField id="outlined-basic" label="Keywords" variant="outlined"
          type="text"
          name="keywords"
          value={formData.keywords}
          onChange={handleChange}
          sx={{ backgroundColor: '#F6F6FB' }} />


        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Notice Period</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Notice Period"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
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
          >
            <MenuItem value="startup">Start up</MenuItem>
            <MenuItem value="itService">IT Service</MenuItem>
            <MenuItem value="productBased">Product Based</MenuItem>
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
          >
            <MenuItem value="Immediate">Immediate</MenuItem>
            <MenuItem value="1week">1 Week</MenuItem>
            <MenuItem value="2weeks">2 Weeks</MenuItem>
            <MenuItem value="1month">1 Month</MenuItem>
            <MenuItem value="2months">2 Months</MenuItem>
            <MenuItem value="3months">3 Months</MenuItem>
          </Select>
        </FormControl>

        <div className='fileInputBox'>
          <Label>JD Upload</Label>
          <Input
            type="file"
            name="jdUpload"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
        </div>

        <FormControl sx={{ backgroundColor: '#F6F6FB' }} fullWidth>
          <InputLabel id="demo-simple-select-label">Visibility</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Visibility"
            name="visibility"
            value={formData.visibility}
            onChange={handleChange}
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
