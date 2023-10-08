import React, { Component, useEffect, useState } from 'react';
import styled from 'styled-components';

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

  return (
    <>{
    start?
    <Container>
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


