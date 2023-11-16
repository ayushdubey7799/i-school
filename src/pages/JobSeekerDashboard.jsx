import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import JobSeekerSidebar from "../components/Interviews/SeekerDashboard/jobSeekerSidebar";
import Metrics from "../components/Interviews/SeekerDashboard/Metrics";
import Profile from "../components/Interviews/SeekerDashboard/sidebarPages/Profile";
import JobSearchBar from "../components/Interviews/SeekerDashboard/sidebarPages/JobSearchBar";
import JobSeekerHeader from "../components/commonComponents/JobSeekerHeader";
import JobApplication from "../components/Interviews/SeekerDashboard/sidebarPages/JobApplication";
import CreateResume from "../components/Interviews/SeekerDashboard/sidebarPages/CreateResume";
import EnhanceResume from "../components/Interviews/SeekerDashboard/sidebarPages/EnhanceResume";
import Subscription from "../components/Interviews/SeekerDashboard/sidebarPages/Subscription";
import Inbox from "../components/Interviews/SeekerDashboard/sidebarPages/Inbox";
import CallSupport from "../components/Interviews/SeekerDashboard/sidebarPages/CallSupport";
import RecommendedJobs from "../components/Interviews/SeekerDashboard/sidebarPages/RecommendedJobs";
import InterviewTabs from "../components/Interviews/InterviewTabs";
import SavedJobs from "../components/Interviews/SeekerDashboard/sidebarPages/SavedJobs";
import ProfileNew from "../components/Interviews/SeekerDashboard/sidebarPages/ProfileNew";
import ConfigureDash from "../components/Interviews/SeekerDashboard/sidebarPages/ConfigureDash";


const Verification = () => <div>Verification Content</div>;
const PracticeInterview = () => <div>Practice Interview Content</div>;

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // if (!accessToken) navigate("/login");

    const key = localStorage.getItem('key');
    const token = localStorage.getItem('token');
    if (key == "invite") {
      navigate(`/slot-selection/${token}`)
    }


  }, []);

  const [currentItem, setCurrentItem] = useState('dashboard');

  return (
    <MainBox>
      <JobSeekerHeader />
      <StyledContent>
        <JobSeekerSidebar currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <MainContent>
          {currentItem === 'dashboard' &&
            <Metrics setCurrentItem={setCurrentItem} />
          }

          {currentItem === "configure-dashboard" && <ConfigureDash />}
          {currentItem === 'job-search' && <JobSearchBar />}
          {currentItem === 'interviewDash' && <InterviewTabs />}
          {currentItem === 'applied-jobs' && <JobApplication />}
          {currentItem === 'recommended-jobs' && <RecommendedJobs />}
          {currentItem === 'saved-jobs' && <SavedJobs />}
          {currentItem === 'create-resume' && <CreateResume />}
          {currentItem === 'enhance-resume' && <EnhanceResume />}

          {currentItem === 'profile' && <ProfileNew />}
          {currentItem === 'subscriptions' && <Subscription />}
          {currentItem === 'inbox' && <Inbox />}

          {currentItem === 'call-support' && <CallSupport />}
        </MainContent>
      </StyledContent>
    </MainBox>
  );
};

export default JobSeekerDashboard;


const MainBox = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: #f4f4f4;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 17rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #f4f4f4;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 4rem);
  margin-top: 4rem;
  color: var(--color);
`;
