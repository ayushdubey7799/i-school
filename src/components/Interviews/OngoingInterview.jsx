import React from 'react'
import { useParams } from 'react-router'

const OngoingInterview = () => {
   const {interviewId} = useParams();

  return (
    <h1>INTERVIEW FOR {interviewId}</h1>
  )
}

export default OngoingInterview