import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { createInterview } from "../../functions/api/createInterview";
import { updateStatus } from "../../functions/api/updateStatus";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 3,
  px: 6,
  pb: 6,
  borderRadius: 2
};

export default function NewInterviewModal({
  openNewInterviewModal,
  setOpenNewInterviewModal,
  isLoading,
  setIsLoading
}) {
const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [interviewDetails,setInterviewDetails] = useState({
    jobRole : "developer",
    skill: "Programming",
    experience: "Beginner"
  });




  const handleOpen = () => {
    setOpenNewInterviewModal(true);
  };
  const handleClose = () => {
    setOpenNewInterviewModal(false);
  };
  const handleCreateInterview = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const ongoing = await createInterview()
    console.log(ongoing);
    if(ongoing?.data?.id){
      console.log("data");
      const statusResponse = await updateStatus(ongoing.data.id,"started");
      console.log(statusResponse);
      setIsLoading(false);
      if(statusResponse?.status == "SUCCESS")navigate(`/ongoing-interview/${ongoing.data.id}`);
    }
  }

  const handleSelect = (e) => {
    const name = e.target.name;
    const val = e.target.value;
   console.log(name,val);
    switch (name) {
      case 'jobRole':
        setInterviewDetails({...interviewDetails,jobRole : val})
        break;
      case 'skill':
        setInterviewDetails({...interviewDetails,skill : val})
        break;
      case 'experience':
        setInterviewDetails({...interviewDetails,experience : val})
        break;
      default:
        console.log('Hello there!');
    }
    console.log(interviewDetails)
  }

  return (
    <div>
      <Modal
        open={openNewInterviewModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1>Create Interview</h1>
          <StyledForm>
            <div>
              <label for="jobRole">Job Role:</label>
              <br />
              <select id="jobRole" name="jobRole" onChange={(e) => handleSelect(e)}>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            <div>
              <label for="skills">Skills:</label>
              <br />
              <select id="skill" name="skill" onChange={(e) => handleSelect(e)}>
                <option value="programming">Programming</option>
                <option value="design">Design</option>
                <option value="communication">Communication</option>
              </select>
            </div>

            <div>
              <label for="experience">Level of Experience:</label>
              <br />
              <select id="experience" name="experience" onChange={(e) => handleSelect(e)}>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            <div>
              <button onClick={(e) => handleCreateInterview(e)}>
                Create Interview
              </button>
            </div>
          </StyledForm>
        </Box>
      </Modal>
    </div>
  );
}


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label{
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  select{
    height: 3rem;
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    font-size: 1rem;
  }

  option{
    height: 1.5rem;
  }

  button{
    background-color: green;
    color: white;
    height: 3rem;
    border-radius: 0.4rem;
    width: 100%
  }

`
