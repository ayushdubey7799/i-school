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



// function SpeechToText() {
//   const [text, setText] = useState('');
//   const [voices, setVoices] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const synth = window.speechSynthesis;

//   const fetchVoices = () => {
//     const availableVoices = synth.getVoices();
//     setVoices(availableVoices);
//   };

//   const speak = () => {
//     if (!selectedVoice) {
//       alert('Please select a voice first.');
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.voice = selectedVoice;
//     synth.speak(utterance);
//   };

//   return (
//     <div>
//       <h1>Text to Speech Conversion</h1>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Enter text to speak"
//       />
//       <select
//         onChange={(e) => setSelectedVoice(voices[e.target.value])}
//         value={voices.indexOf(selectedVoice)}
//       >
//         {voices.map((voice, index) => (
//           <option key={index} value={index}>
//             {voice.name}
//           </option>
//         ))}
//       </select>
//       <button onClick={speak}>Speak</button>
//       <button onClick={fetchVoices}>Fetch Voices</button>
//     </div>
//   );
// }

// export default SpeechToText;


import React, { useState } from 'react';

function SpeechToText() {
  const [transcript, setTranscript] = useState('');
  const [listening, setListening] = useState(false);

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setListening(true);
      setTranscript('');
    };

    recognition.onresult = (event) => {
      const result = event.results[event.resultIndex];
      const text = result[0].transcript;
      setTranscript(text);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  return (
    <div>
      <h1>Speech to Text Conversion</h1>
      <button onClick={startListening} disabled={listening}>
        Start Listening
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default SpeechToText;
