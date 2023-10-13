import React, { Component, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import ModalHOC from '../components/Interviews/SeekerDashboard/ModalHOC';
import { useNavigate } from 'react-router';

// Sample JSON data for questions
const questionsData = [
    {
      "id": 1,
      "question": "Explain the difference between HTTP and HTTPS."
    },
    {
      "id": 2,
      "question": "What is a RESTful API, and how does it work?"
    },
    {
      "id": 3,
      "question": "What are the SOLID principles, and why are they important in software design?"
    },
    {
      "id": 4,
      "question": "Explain the concept of 'Big O' notation and its significance in algorithm analysis."
    },
    {
      "id": 5,
      "question": "What is the difference between Git and SVN, and why would you use one over the other?"
    },
    {
      "id": 6,
      "question": "What is the purpose of a containerization tool like Docker, and how does it work?"
    },
    {
      "id": 7,
      "question": "Explain the difference between unit testing and integration testing."
    },
    {
      "id": 8,
      "question": "What is the 'this' keyword in JavaScript, and how does it behave in different contexts?"
    },
    {
      "id": 9,
      "question": "What is the difference between a thread and a process in the context of operating systems?"
    },
    {
      "id": 10,
      "question": "Explain the concept of 'dependency injection' in software development."
    }
  ]
  
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const QuestionText = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

const AnswerTextarea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const NextButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuestionComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsData.length).fill(''));
  const [start,setStart] = useState(false);
  const [open,setOpen] = useState(false);
  const idRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      if(idRef)clearTimeout(idRef);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const handleVisibilityChange =  (event) => {
    console.log("Cleared",idRef?.current)

    if (document.visibilityState === "visible") {
      console.log("start")
      if(idRef.current){
        console.log("Clearing")
        clearTimeout(idRef.current)
      };
      console.log("End")
    }
    
    if (document.visibilityState === "hidden") {
      idRef.current =  setTimeout(() => {
         navigate('/dashboard/interviews')
      },3000)
     
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
    if(!document.fullscreenElement){
      setOpen(true);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleStart = () => {
   setStart(true);
   document.documentElement.requestFullscreen();

  };

  const handleAnswerChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handlePrevent = (e) => {
    e.preventDefault();
    toast.warn("Copy Pasting not allowed in test");
  }
console.log(idRef);
  return (
    <>{
    start?
    
    <Container onCopy={handlePrevent} onPaste={handlePrevent} onCut={handlePrevent}>
      <ModalHOC openNewInterviewModal={open} setOpenNewInterviewModal={setOpen} Component={Warning} array={[setOpen]}/>
    {currentQuestionIndex < questionsData.length ? (
      <>
        <QuestionText>{questionsData[currentQuestionIndex].question}</QuestionText>
        <AnswerTextarea
          value={answers[currentQuestionIndex]}
          onChange={handleAnswerChange}
        />
        <NextButton onClick={handleNextClick}>Next</NextButton>
      </>
    ) : (
      <p>Thank you for answering all questions!</p>
    )}
  </Container>
  :
  <button onClick={handleStart}>Start Interview</button>
    }</>
   
  );
};

export default (QuestionComponent);



const Warning = ({array}) => {
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
      toast.success("Interview submitted")}}>Submit Interview</button>
  </div>
}







