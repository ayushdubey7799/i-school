import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { createInterview } from "../../functions/api/createInterview";
import { updateStatus } from "../../functions/api/updateStatus";
import { getScore } from "../../functions/api/getScore";

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

export default function InterviewSubmittedModal({scoreModal,setScoreModal, interviewId}) {
  const navigate = useNavigate();
  const handleGetScore = async () => {
     navigate(`/score/${interviewId}`)
  }

  const handleClose = () => {
    setScoreModal(false);
  }
  return (
    <div>
      <Modal
        open={scoreModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h1>Interview Submitted Successfully</h1>
          <StyledForm>
            <div>
              <label for="reviews">Reviews:</label>
              <br />
              <textarea rows={7} type="text" name="reviews"/>
            </div>

           
            <div>
              <button onClick={(e) => handleGetScore(e)}>
                Get Score
              </button>
              <button onClick={(e) => navigate("/interview")}>
                Give Another Interview
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
  
  textarea{
    // height: 3rem;
    width: 100%;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem;
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
