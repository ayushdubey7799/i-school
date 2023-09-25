import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import OngoingInterview from "./pages/OngoingInterview"
import Scorecard from "./pages/Scorecard"
import ProfilePage from "./pages/ProfilePage"
import SettingPage from "./pages/SettingPage"
import NewInterviewDetails from "./pages/NewInterviewDetails"

import Activate from "./pages/Activate"
import About from "./pages/menuPages/About"
import Products from "./pages/menuPages/Products"
import Service from "./pages/menuPages/Service"
import ResearchPaper from "./pages/menuPages/ResearchPaper"
import CaseStudies from './pages/menuPages/CaseStudies'
import Support from './pages/menuPages/Support'
import Privacy from './pages/menuPages/Privacy'
import Terms from './pages/menuPages/Terms'
import Disclaimer from './pages/menuPages/Disclaimer'
import ScrollToTop from "./components/commonComponents/ScrollToTop"
import { ToastContainer } from 'react-toastify';
import Reset from "./pages/Reset"
import Contact from "./pages/menuPages/Contact"
import JobDescriptions from "./pages/JobDescriptions"
import JdDetails from "./pages/JdDetails"
import Home from "./pages/Home"
import InterviewPage from "./pages/InterviewPage"
import Demo from "./pages/Demo"
import Forgot from "./pages/Forgot"
import Intelliview from "./pages/submenuPages/Intelliview"
import IntelliBoard from "./pages/submenuPages/IntelliBoard"
import IntelliSource from "./pages/submenuPages/IntelliSource"
import Screening from "./pages/submenuPages/Screening"
import DataAnalytics from "./pages/submenuPages/DataAnalytics"
import TalentManagement from "./pages/submenuPages/TalentManagement"
import Enterprises from "./pages/submenuPages/Enterprises"
import RecruitmentAgency from "./pages/submenuPages/RecruitmentAgency"
import JobSeeker from "./pages/submenuPages/JobSeeker"
import Career from "./pages/menuPages/Career"
import Sales from "./pages/menuPages/Sales"



const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/pwdreset/:id" element={<Reset />} />
          <Route path="/reset" element={<Forgot />} />
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
          <Route path="/career" element={<Career />} />
          <Route path="/sales" element={<Sales />} />

          <Route path="/employers/jds" element={<JobDescriptions />} />
          <Route path="/employers/:jobSummaryHash" element={<JdDetails />} />
          <Route path="/demo" element={<Demo />} />

          {/* Submenu Pages  */}
          <Route path="/product/intelliview" element={<Intelliview />} />
          <Route path="/product/intellisource" element={<IntelliSource />} />
          <Route path="/product/intelliboard" element={<IntelliBoard />} />

          <Route path="/service/screening" element={<Screening />} />
          <Route path="/service/data-analytics" element={<DataAnalytics />} />
          <Route path="/service/talent-management" element={<TalentManagement />} />

          <Route path="/solution/enterprise" element={<Enterprises />} />
          <Route path="/solution/recruitment-agency" element={<RecruitmentAgency />} />
          <Route path="/solution/job-seeker" element={<JobSeeker />} />

        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}

// git@bitbucket.org:crystalsky/intelliview-web.git

export default App
