import React from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/LandingPage"
import Signup from "./components/Authentication/Signup"
import Login from "./components/Authentication/Login"
import InterviewPage from "./components/Interviews"
import OngoingInterview from "./components/Interviews/OngoingInterview"
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/ongoing-interview/:interviewId" element={<OngoingInterview/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
