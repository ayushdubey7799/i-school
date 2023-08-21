import React from "react"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./components/LandingPage"
import Signup from "./components/Authentication/Signup"
import Login from "./components/Authentication/Login"
import InterviewPage from "./components/Interviews"
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/interview" element={<InterviewPage />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
