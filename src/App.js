import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./components/LandingPage"
import Signup from "./components/Authentication/Signup"
import Login from "./components/Authentication/Login"
import InterviewPage from "./components/Interviews"
import OngoingInterview from "./components/Interviews/CurrentInterview/OngoingInterview"
import Scorecard from "./components/Interviews/CurrentInterview/Scorecard"
import ScorecardTemplate from "./components/Interviews/CurrentInterview/ScorecardTemplate"
import ProfilePage from "./components/ProfilePage"
import SettingPage from "./components/SettingPage"
import NewInterviewDetails from "./components/Interviews/CreateInterview/NewInterviewDetails"
import Activate from "./components/Authentication/Activate"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activation" element={<Activate />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/create" element={<NewInterviewDetails />} />
        <Route path="/ongoing-interview/:interviewId" element={<OngoingInterview />} />
        <Route path="/score/:interviewId" element={<Scorecard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </BrowserRouter>
  )
}
// http://localhost:3000/score/f437ad9e-2429-4bca-aea1-6c812d237fc4
export default App

// git@bitbucket.org:crystalsky/intelliview-web.git
