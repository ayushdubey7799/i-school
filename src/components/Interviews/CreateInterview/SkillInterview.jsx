import React, { useState, useEffect } from 'react'
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
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import { technicalSkills } from '../../../utils/contantData';

const SkillInterview = () => {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [interviewDetails, setInterviewDetails] = useState({
    skills: "",
    experience: "",
    difficultyLevel: "easy",
    testType: "mcq"
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loaderMessage, setLoaderMessage] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const handleSkillsChange = (_, newSkills) => {
    setSelectedSkills(newSkills);
  };

  useEffect(() => {
    setInterviewDetails({
      ...interviewDetails,
      skills: selectedSkills.join(", ")
    })
  }, [selectedSkills]);


  const handleInputChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    switch (name) {
      case 'experience':
        setInterviewDetails({ ...interviewDetails, experience: val })
        break;
      case 'difficultyLevel':
        setInterviewDetails({ ...interviewDetails, difficultyLevel: val })
        break;
      case 'testType':
        setInterviewDetails({ ...interviewDetails, testType: val })
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

    if (!interviewDetails.skills || !interviewDetails.experience || !interviewDetails.difficultyLevel || !interviewDetails.testType) {

      toast.warning('Please fill all inputs');
      setIsLoading(false);
      setLoaderMessage('');
      return;
    }

    const payload = {
      difficultyLevel: "string",
      testType: interviewDetails.testType,
      jobSummary: interviewDetails.skills.trim(),
      resumeText: `Experience ${interviewDetails.experience.trim()}`,
    };
    const ongoing = await createInterview(payload, accessToken)
    console.log(ongoing);

    if (ongoing?.data?.id) {
      localStorage.setItem("currentInterview", "skill");
      navigate(`/create-interview/${ongoing.data.id}`)
    }
    // if (ongoing?.data?.id) {
    //   console.log("data");
    //   const statusResponse = await updateStatus(ongoing.data.id, "started", accessToken);
    //   console.log(statusResponse);
    //   setIsLoading(false);
    //   if (statusResponse?.status == "SUCCESS") navigate(`/ongoing-interview/${ongoing.data.id}`);
    // }
  }

  return (
    <div>
      {isLoading ? (
        <Loader message={loaderMessage} />
      ) : (
        <StyledSkillForm>

          <Stack spacing={3} sx={{ width: '100%' }}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={technicalSkills}
              getOptionLabel={(option) => option}
              onChange={handleSkillsChange}
              value={selectedSkills}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Skills"
                />
              )}
            />
          </Stack>

          <TextField id="outlined-basic" label="Experience (in years)" variant="outlined" name="experience" fullWidth
            type='text'
            value={interviewDetails.experience}
            onChange={handleInputChange} />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Difficulty Level</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={interviewDetails.difficultyLevel}
              label="Difficulty Level"
              onChange={handleInputChange}
              name="difficultyLevel"
            >
              <MenuItem value="easy">Easy</MenuItem>
              <MenuItem value="moderate">Moderate</MenuItem>
              <MenuItem value="difficult">Difficult</MenuItem>
            </Select>
          </FormControl>


          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Test Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={interviewDetails.testType}
              label="Type of Interview"
              onChange={handleInputChange}
              name="testType"
            >
              <MenuItem value="mcq">MCQ</MenuItem>
              <MenuItem value="coding">Coding</MenuItem>
              <MenuItem value="general">General Subjective</MenuItem>
            </Select>
          </FormControl>

          <button onClick={handleCreateInterview} className='btn'>Start Interview</button>
        </StyledSkillForm>
      )
      }
    </div>

  )
}

export default SkillInterview


const StyledSkillForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
margin-top: 3rem;
margin-bottom: 2rem;
width: 50rem;


label{
  font-size: 1rem;
  font-weight: 600;
}


input{
    width: 100%;
    font-size: 1rem;
}


.btn{
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


