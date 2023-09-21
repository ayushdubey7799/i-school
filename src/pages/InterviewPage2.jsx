import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import Header from "../components/Interviews/Header";

import Footer from '../components/commonComponents/Footer'
import Loader from "../components/commonComponents/Loader";
import InterviewTabs from "../components/Interviews/InterviewTabs";
import { useSelector } from "react-redux";
import JobSeekerSidebar from "../components/Interviews/SeekerDashboard/jobSeekerSidebar";
import Metrics from "../components/Interviews/SeekerDashboard/Metrics";
import Profile from "../components/Interviews/SeekerDashboard/Profile";

const JobSearch = () => <div>Job Search Content</div>;
// const Profile = () => <div>Profile Content</div>;
const Verification = () => <div>Verification Content</div>;
const Inbox = () => <div>Inbox Content</div>;
const PracticeInterview = () => <div>Practice Interview Content</div>;

const InterviewPage2 = () => {
    const navigate = useNavigate();
    const accessToken = useSelector(state => state.auth.userData?.accessToken)
    const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!accessToken) navigate("/login");
    }, []);

    const [currentItem, setCurrentItem] = useState('job search');

  return (
    <>
    <Header/>
    <StyledContent>
      <JobSeekerSidebar currentItem={currentItem} setCurrentItem={setCurrentItem} />
      <MainContent>
        <Metrics/>
        {currentItem === 'job search' && <JobSearch />}
        {currentItem === 'profile' && <Profile />}
        {currentItem === 'verification' && <Verification />}
        {currentItem === 'inbox' && <Inbox />}
        {currentItem === 'practice interview' && <PracticeInterview />}
      </MainContent>
    </StyledContent>
    </>
  );
};

export default InterviewPage2;



const MainContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-top: 4rem;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  height: 70vh;
//   margin: 5rem auto;
  background-color: var(--backgroundColor);
  color: var(--color);
`;
