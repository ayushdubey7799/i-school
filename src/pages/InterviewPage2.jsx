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
import JobSearchBar from "../components/Interviews/SeekerDashboard/JobSearchBar";

// const JobSearch = () => <div>Job Search Content</div>;
// const Profile = () => <div>Profile Content</div>;
const Verification = () => <div>Verification Content</div>;
const Inbox = () => <div style={{padding: '2rem'}}>Inbox Content</div>;
const PracticeInterview = () => <div>Practice Interview Content</div>;

const InterviewPage2 = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!accessToken) navigate("/login");
  }, []);

  const [currentItem, setCurrentItem] = useState('profile');

  return (
    <MainBox>
      <Header />
      <StyledContent>
        <JobSeekerSidebar currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <MainContent>
          <Metrics />
          {currentItem === 'profile' && <Profile />}
          {currentItem === 'job-search' && <JobSearchBar />}
          {currentItem === 'inbox' && <Inbox />}
          {currentItem === 'practice interview' && <PracticeInterview />}
        </MainContent>
      </StyledContent>
    </MainBox>
  );
};

export default InterviewPage2;


const MainBox = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 16rem;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 4rem);
  margin-top: 4rem;
  color: var(--color);
`;
