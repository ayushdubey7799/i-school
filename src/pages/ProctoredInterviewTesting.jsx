import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ModalHOC from '../components/Interviews/SeekerDashboard/ModalHOC';
import { useNavigate } from 'react-router';
import OngoingInterview from './OngoingInterview';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;


const Proctored = () => {
  const [start, setStart] = useState(false);
  const [open, setOpen] = useState(false);
  const idRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      if (idRef) clearTimeout(idRef);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const handleVisibilityChange = (event) => {
    console.log("Cleared", idRef?.current)

    if (document.visibilityState === "visible") {
      console.log("start")
      if (idRef.current) {
        console.log("Clearing")
        clearTimeout(idRef.current)
      };
      console.log("End")
    }

    if (document.visibilityState === "hidden") {
      idRef.current = setTimeout(() => {
        navigate('/dashboard/interviews')
      }, 3000)

    }
  };


  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      toast.warn('Developer tools are disabled during test.');
    }
  };
  console.log("USEeffect ran")

  const handleFullScreenChange = (event) => {
    if (!document.fullscreenElement) {
      setOpen(true);
    }
  };


  const handleStart = () => {
    document.documentElement.requestFullscreen();

    setStart(true);

  };



  const handlePrevent = (e) => {
    e.preventDefault();
    toast.warn("Copy Pasting not allowed in test");
  }
  console.log(idRef);
  return (
    <Container onCopy={handlePrevent} onPaste={handlePrevent} onCut={handlePrevent}>
      <ModalHOC openNewInterviewModal={open} setOpenNewInterviewModal={setOpen} Component={Warning} array={[setOpen]} />
      <OngoingInterview start={start} handleStart={handleStart} />
    </Container>

  );
};

export default (Proctored);



const Warning = ({ array }) => {
  const navigate = useNavigate();
  const setOpen = array[0];
  return <div>
    <p>All the warnings for the interviewee</p>
    <button onClick={() => {
      document.documentElement.requestFullscreen();
      setOpen(false)
    }}>Back to Interview</button>
    <button onClick={() => {
      navigate("/dashboard/interviews")
      toast.success("Interview submitted")
    }}>Submit Interview</button>
  </div>
}







