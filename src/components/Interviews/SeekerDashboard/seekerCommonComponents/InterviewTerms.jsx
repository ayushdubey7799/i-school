import React from 'react'
import styled from 'styled-components'

const InterviewTerms = () => {
  return (
    <Box>
        <span className='title'>Introduction</span>
        <span className='text'>Welcome to the online AI interview/test! This is an opportunity for you to demonstrate your skills and knowledge in a variety of areas. Please review the following terms and instructions carefully before beginning the Interview.</span>

        <span className='title'>Eligibility</span>
        <span className='text'>To be attepmt this Interview, you must meet the following criteria:</span>

        <span className='text'>You must have a computer with a stable internet connection.</span>
        <span className='text'>You must have a webcam and microphone</span>
        <span className='text'>Read Instructions Carefully:</span>
        <span className='text'>Before starting the Interview, thoroughly read and understand the instructions provided.
Time Management: Allocate your time effectively for each section of the test. Prioritize questions you feel confident about first and then return to challenging ones later.</span>
        <span className='text'>Avoid Distractions: Minimize distractions during the test. Focus on the questions and avoid browsing other websites or applications.</span>
        <span className='text'>Work Independently: Complete the test independently without seeking assistance from others. Maintain academic integrity.</span>
        <span className='text'>Review Answers: Before submitting the test, review your answers carefully to ensure there are no mistakes or omissions.</span>
        <span className='text'>Submit on Time: Submit the test within the allotted time frame. Avoid exceeding the time limit.</span>
        <span className='text'>Communication Clarity: Speak clearly and concisely, avoiding filler words like "um" or "uh." Project your voice and enunciate properly.</span>
        <span className='text'>Scoring: Your score will be based on your performance on the multiple-choice questions, coding challenges, and video interview</span>
        <span className='text'>Length of Test: The test will take approximately 60 minutes to complete.
Format of Test :The test will consist of a series of multiple-choice questions, coding challenges, and video interviews.</span>
        <span className='text'>Scoring: Your score will be based on your performance on the multiple-choice questions, coding challenges, and video interviews.</span>
        <span className='text'>Please find a quiet and comfortable place to take the test.</span>
        <span className='text'>Make sure that your computer is fully charged and that you have a stable internet connection.
Close all other programs and applications on your computer.</span>
        <span className='text'>Launch the Interview by clicking on Start Interview.</span>
        <span className='text'>Review the consent form and click on the "I agree" button.</span>
        <span className='title'>Additional Instructions</span>
        <span className='text'>You will not be allowed to take breaks during the interview.</span>
        <span className='text'>You will not be allowed to use any other reference materials.</span>
        <span className='text'>Begin the test.</span>
        <span className='title'>Terms of Service</span>
        <span className='text'>By participating in this test, you agree to the following terms of service:</span>
        <span className='text'>You agree to provide truthful and accurate information.</span>
        <span className='text'>You agree to not cheat or attempt to cheat on the Interview.</span>
        <span className='text'>You agree to not use any unauthorized software or programs during the test.</span>
        <span className='text'>You agree to not share your test results with anyone else.</span>
        <span className='text'>Review the consent / Terms and click on the "I agree" button.</span>
    </Box>
  )
}

export default InterviewTerms

const Box = styled.div`
display: flex;
flex-direction: column;
gap: 0.2rem;
height: 40vh;
width: 60%;
font-size: 0.85rem;
font-weight: 400;
line-height: 1rem;
border: 0.075rem solid grey;
border-radius: 1rem;
overflow: auto;
padding: 1rem;
box-sizing: border-box;

.title {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 0.5rem 0;
}



&::-webkit-scrollbar {
    width: 0.2rem;
}

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 0.2rem;
    margin: 0.5rem 0;
}

  &::-webkit-scrollbar-thumb {
    background: grey;
    width: 0.2rem;
    border-radius: 0.2rem;
}

& {
  scrollbar-width: none;
} 

`