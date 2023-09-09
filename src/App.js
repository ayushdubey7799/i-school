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
import About from "./components/menuPages/About"
import Products from "./components/menuPages/Products"
import Service from "./components/menuPages/Service"
import ResearchPaper from "./components/menuPages/ResearchPaper"
import CaseStudies from './components/menuPages/CaseStudies'
import Support from './components/menuPages/Support'
import Privacy from './components/menuPages/Privacy'
import Terms from './components/menuPages/Terms'
import Disclaimer from './components/menuPages/Disclaimer'
import ScrollToTop from "./components/commonComponents/ScrollToTop"
import { ToastContainer } from 'react-toastify';
import Reset from "./components/Authentication/Reset"
import Contact from "./components/menuPages/Contact"
import JobDescriptions from "./components/recruitersComponents/JobDescriptions"
import JdDetails from "./components/recruitersComponents/JdDetails"
import Timer from "./components/Interviews/CurrentInterview/Timer"



const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/interview" element={<InterviewPage />} />
          <Route path="/create" element={<NewInterviewDetails />} />
          <Route path="/ongoing-interview/:interviewId" element={<OngoingInterview />} />
          <Route path="/score/:interviewId" element={<Scorecard />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Service />} />
          <Route path="/research-paper" element={<ResearchPaper />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employers/jds" element={<JobDescriptions />} />
          <Route path="/employers/:jobSummary" element={<JdDetails />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

// git@bitbucket.org:crystalsky/intelliview-web.git

export default App
