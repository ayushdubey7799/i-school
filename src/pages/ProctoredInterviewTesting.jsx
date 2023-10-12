// import React, { Component, useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import styled from 'styled-components';
// import ModalHOC from '../components/Interviews/SeekerDashboard/ModalHOC';

// // Sample JSON data for questions
// const questionsData = [
//     {
//       "id": 1,
//       "question": "Explain the difference between HTTP and HTTPS."
//     },
//     {
//       "id": 2,
//       "question": "What is a RESTful API, and how does it work?"
//     },
//     {
//       "id": 3,
//       "question": "What are the SOLID principles, and why are they important in software design?"
//     },
//     {
//       "id": 4,
//       "question": "Explain the concept of 'Big O' notation and its significance in algorithm analysis."
//     },
//     {
//       "id": 5,
//       "question": "What is the difference between Git and SVN, and why would you use one over the other?"
//     },
//     {
//       "id": 6,
//       "question": "What is the purpose of a containerization tool like Docker, and how does it work?"
//     },
//     {
//       "id": 7,
//       "question": "Explain the difference between unit testing and integration testing."
//     },
//     {
//       "id": 8,
//       "question": "What is the 'this' keyword in JavaScript, and how does it behave in different contexts?"
//     },
//     {
//       "id": 9,
//       "question": "What is the difference between a thread and a process in the context of operating systems?"
//     },
//     {
//       "id": 10,
//       "question": "Explain the concept of 'dependency injection' in software development."
//     }
//   ]
  
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const QuestionText = styled.p`
//   font-size: 20px;
//   margin-bottom: 10px;
// `;

// const AnswerTextarea = styled.textarea`
//   width: 300px;
//   height: 100px;
//   padding: 10px;
//   font-size: 16px;
//   margin-bottom: 20px;
// `;

// const NextButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   padding: 10px 20px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const QuestionComponent = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(Array(questionsData.length).fill(''));
//   const [start,setStart] = useState(false);
//   const [open,setOpen] = useState(false);

//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.ctrlKey && e.shiftKey && e.key === 'I') {
//         e.preventDefault();
//         toast.warn('Developer tools are disabled during test.');
//       }
//       else if(e.key === 'Escape'){
//         e.preventDefault();
//         toast.warn('...')
//       }


//     };
//     window.addEventListener("visibilitychange", (event) => {
//       if (document.visibilityState === "visible") {
//         console.log("All Good")
//       } else {
//         toast.error("Submitting Interview");
//       }
//     });
//     window.addEventListener('keydown', handleKeyPress);
//     window.addEventListener("fullscreenchange", (event) => {
//       if(!document.fullscreenElement){
//         setOpen(true);
//       }
//     });

//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);

//   const handleNextClick = () => {
//     if (currentQuestionIndex < questionsData.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleStart = () => {
//    setStart(true);
//    document.documentElement.requestFullscreen();

//   };

//   const handleAnswerChange = (e) => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentQuestionIndex] = e.target.value;
//     setAnswers(updatedAnswers);
//   };

//   const handlePrevent = (e) => {
//     e.preventDefault();
//     toast.warn("Copy Pasting not allowed in test");
//   }

//   return (
//     <>{
//     start?
    
//     <Container onCopy={handlePrevent} onPaste={handlePrevent} onCut={handlePrevent}>
//       <ModalHOC openNewInterviewModal={open} setOpenNewInterviewModal={setOpen} Component={Warning}/>
//     {currentQuestionIndex < questionsData.length ? (
//       <>
//         <QuestionText>{questionsData[currentQuestionIndex].question}</QuestionText>
//         <AnswerTextarea
//           value={answers[currentQuestionIndex]}
//           onChange={handleAnswerChange}
//         />
//         <NextButton onClick={handleNextClick}>Next</NextButton>
//       </>
//     ) : (
//       <p>Thank you for answering all questions!</p>
//     )}
//   </Container>
//   :
//   <button onClick={handleStart}>Start Interview</button>
//     }</>
   
//   );
// };

// export default (QuestionComponent);



// const Warning = () => {
//   return <div>
//     <p>All the warnings for the interviewee</p>
//     <button>Back to Interview</button>
//     <button>Submit Interview</button>
//   </div>
// }


import React, { useState, useRef } from 'react';
import { ReactMic } from 'react-mic';

function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState({
    blobURL: null,
    blob: null,
    recordedAt: null,
  });
  const audioPlaybackRef = useRef(null);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedData) => {
    // This callback is called when audio data is available
    console.log('Chunk of real-time data is: ', recordedData);
  };

  const onStop = (recordedData) => {
    // This callback is called when the recording stops
    setAudioData(recordedData);
    console.log('Recording stopped: ', recordedData);
  };

  return (
    <div>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
      />
      <button onClick={startRecording} type="button">
        Start Recording
      </button>
      <button onClick={stopRecording} type="button">
        Stop Recording
      </button>
      <audio
        ref={audioPlaybackRef}
        controls
        src={audioData.blobURL}
      />
    </div>
  );
}

export default AudioRecorder;
