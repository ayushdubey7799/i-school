import React, { useState } from 'react'
import { styled } from 'styled-components'
import { createInterview } from '../../../functions/api/interview/createInterview';
import { updateStatus } from '../../../functions/api/interview/updateStatus';
import { useNavigate } from 'react-router';
import Loader from "../../commonComponents/Loader";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const SkillInterview = () => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [interviewDetails, setInterviewDetails] = useState({
    skills: "",
    experience: "",
    difficulty: "easy",
    interviewType: "mcq"
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    switch (name) {
      case 'skill':
        setInterviewDetails({ ...interviewDetails, skills: val })
        break;
      case 'experience':
        setInterviewDetails({ ...interviewDetails, experience: val })
        break;
      case 'difficulty':
        setInterviewDetails({ ...interviewDetails, difficulty: val })
        break;
      case 'interviewType':
        setInterviewDetails({ ...interviewDetails, interviewType: val })
        break;
      default:
        console.log('Hello there!');
    }
    console.log(interviewDetails)
  }

  const handleCreateInterview = async (e) => {
    e.preventDefault();
    setLoaderMessage("Creating Interview... please wait");
    setIsLoading(true);

    if (!interviewDetails.skills || !interviewDetails.experience || !interviewDetails.difficulty || !interviewDetails.interviewType) {

      toast.warning('Please fill all inputs');
      setIsLoading(false);
      setLoaderMessage('');
      return;
    }

    const ongoing = await createInterview(interviewDetails.skills.trim(), `Experience ${interviewDetails.experience.trim()}`, accessToken)
    console.log(ongoing);
    if (ongoing?.data?.id) {
      console.log("data");
      const statusResponse = await updateStatus(ongoing.data.id, "started", accessToken);
      console.log(statusResponse);
      setIsLoading(false);
      if (statusResponse?.status == "SUCCESS") navigate(`/ongoing-interview/${ongoing.data.id}`);
    }
  }


  return (
    <div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledSkillForm>

          <TextField id="outlined-basic" label="Skills" variant="outlined" name="skill"
            type='text'
            value={interviewDetails.skills}
            onChange={handleInputChange} />

          <TextField id="outlined-basic" label="Experience (in years)" variant="outlined" name="experience"
            type='text'
            value={interviewDetails.experience}
            onChange={handleInputChange} />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulty Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={interviewDetails.difficulty}
              label="Difficulty Level"
              onChange={handleInputChange}
              name="difficulty"
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="moderate">Moderate</MenuItem>
              <MenuItem value="difficult">Difficult</MenuItem>
            </Select>
          </FormControl>


          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Interview</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={interviewDetails.interviewType}
              label="Type of Interview"
              onChange={handleInputChange}
              name="interviewType"
            >
              <MenuItem value="mcq">MCQ</MenuItem>
              <MenuItem value="coding">Coding</MenuItem>
              <MenuItem value="general">General Subjective</MenuItem>
            </Select>
          </FormControl>

          <button onClick={handleCreateInterview}>Start Interview</button>
        </StyledSkillForm>
      )
      }
    </div>

  )
}

export default SkillInterview


const StyledSkillForm = styled.form`display: flex;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
margin-top: 3rem;
margin-bottom: 2rem;
width: 50rem;


div {
  width: 100%;
}

label{
  font-size: 1rem;
  font-weight: 600;
}



input{
    width: 100%;
    font-size: 1rem;
}


button{
  background-color: var(--backgroundColor);
    color: var(--color);
    padding: 0.7rem 1rem;
    border: 0.1rem solid var(--lightOrange);
    border-radius: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
}

@media (max-width: 500px) {
  width: 40rem;
}

`


