import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import JobSeekerSidebar from "../components/Interviews/SeekerDashboard/jobSeekerSidebar";
import Metrics from "../components/Interviews/SeekerDashboard/Metrics";
import JobSeekerHeader from "../components/commonComponents/JobSeekerHeader";
import CreateResume from "../components/Interviews/SeekerDashboard/sidebarPages/CreateResume";
import EnhanceResume from "../components/Interviews/SeekerDashboard/sidebarPages/EnhanceResume";
import Subscription from "../components/Interviews/SeekerDashboard/sidebarPages/Subscription";
import Inbox from "../components/Interviews/SeekerDashboard/sidebarPages/Inbox";
import CallSupport from "../components/Interviews/SeekerDashboard/sidebarPages/CallSupport";
import ProfileNew from "../components/Interviews/SeekerDashboard/sidebarPages/ProfileNew";
import ConfigureDash from "../components/Interviews/SeekerDashboard/sidebarPages/ConfigureDash";
import AllJobs from "../components/Interviews/SeekerDashboard/sidebarPages/AllJobs";
import AppliedJobs from "../components/Interviews/SeekerDashboard/sidebarPages/AppliedJobs";
import RecommendedJobs from "../components/Interviews/SeekerDashboard/sidebarPages/RecommendedJobs";
import SavedJobs from "../components/Interviews/SeekerDashboard/sidebarPages/SavedJobs";
import InterviewTabs from "../components/Interviews/InterviewTabs";


const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const accessToken = useSelector(state => state.auth.userData?.accessToken);
  const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

  const [currentItem, setCurrentItem] = useState('dashboard');

  return (
    <MainBox>
      <JobSeekerHeader setCurrentItem={setCurrentItem} />
      <StyledContent>
        <JobSeekerSidebar currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <MainContent>
          {currentItem === 'dashboard' &&
            <Metrics setCurrentItem={setCurrentItem} />
          }

          {currentItem === "configure-dashboard" && <ConfigureDash />}
          {currentItem === 'job-search' && <AllJobs />}
          {currentItem === 'applied-jobs' && <AppliedJobs />}
          {currentItem === 'recommended-jobs' && <RecommendedJobs />}
          {currentItem === 'saved-jobs' && <SavedJobs />}
          {currentItem === 'create-resume' && <CreateResume />}
          {currentItem === 'enhance-resume' && <EnhanceResume />}

          {currentItem === 'interview-dashboard' && <InterviewTabs/>}
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
width: 100%;
background-color: #f4f4f4;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 16rem;
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
