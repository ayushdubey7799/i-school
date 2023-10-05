import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

import Footer from "../components/commonComponents/Footer";
import Loader from "../components/commonComponents/Loader";
import InterviewTabs from "../components/Interviews/InterviewTabs";
import { useSelector } from "react-redux";
import JobSeekerSidebar from "../components/Interviews/SeekerDashboard/jobSeekerSidebar";
import Profile from "../components/Interviews/SeekerDashboard/Profile";
import JobSearchBar from "../components/Interviews/SeekerDashboard/JobSearchBar";
import EmployeMetrics from "../components/Interviews/EmployerDashboard/EmployerMetrics";
import EmployerSidebar from "../components/Interviews/EmployerDashboard/EmployerSidebar";
import EmployeProfile from "../components/Interviews/EmployerDashboard/EmployerProfile";
import JdRegistration from "../components/Interviews/EmployerDashboard/JdRegistration";
import CreateQuestion from "../components/Interviews/EmployerDashboard/CreateQuestion";
import ScheduleInterview from "../components/Interviews/EmployerDashboard/Schedule/ScheduleInterview";
import ActiveJds from "../components/Interviews/EmployerDashboard/ActiveJds";
import ManageTests from "../components/Interviews/EmployerDashboard/ManageTests";
import ManageJds from "../components/Interviews/EmployerDashboard/Schedule/ManageJds";
import EmployerHeader from "../components/commonComponents/EmployerHeader";

// const JobSearch = () => <div>Job Search Content</div>;
// const Profile = () => <div>Profile Content</div>;

const Verification = () => <div>Verification Content</div>;
const Inbox = () => <div>Inbox Content</div>;
const PracticeInterview = () => <div>Practice Interview Content</div>;

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [open, setOpen] = useState(false);

  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState("profile");

  useEffect(() => {
    if (!accessToken) navigate("/login");
    let initialOpen =
      currentItem === "activeJds" || currentItem === "create-tests";
    if (initialOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [currentItem]);

  console.log("ITEM-->", currentItem);
  return (
    <MainBox>
      <EmployerHeader />
      <StyledContent>
        <EmployerSidebar
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          open={open}
          setOpen={setOpen}
        />
        <MainContent>
          <EmployeMetrics />
          {currentItem === "profile" && <EmployeProfile />}
          {currentItem === "jd-register" && <JdRegistration />}
          {currentItem === "manage-jds" && <JdRegistration/>}
          {currentItem === "manage-ssubscriptions" && <JdRegistration />}

          {currentItem === "candidate-register" && <Profile />}
          {currentItem === "manage-tests" && <CreateQuestion />}
          {currentItem === "activeJds" && <ActiveJds />}
          {currentItem === "create-tests" && <ManageTests />}
          {currentItem === "inbox" && <Inbox />}
        </MainContent>
      </StyledContent>
    </MainBox>
  );
};

export default EmployerDashboard;


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
  background-color: var(--white);
  color: var(--color);
`;
