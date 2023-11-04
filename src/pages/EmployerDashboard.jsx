import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import EmployeMetrics from "../components/Interviews/EmployerDashboard/EmployerMetrics";
import EmployerSidebar from "../components/Interviews/EmployerDashboard/EmployerSidebar";
import EmployeProfile from "../components/Interviews/EmployerDashboard/sidebarPages/EmployerProfile";
import JdRegistration from "../components/Interviews/EmployerDashboard/sidebarPages/JdRegistration";
import CreateQuestion from "../components/Interviews/EmployerDashboard/sidebarPages/CreateQuestion";
import ScheduleInterview from "../components/Interviews/EmployerDashboard/Schedule/ScheduleInterview";
import ActiveJds from "../components/Interviews/EmployerDashboard/sidebarPages/ActiveJds";
import ManageTests from "../components/Interviews/EmployerDashboard/sidebarPages/ManageTests";
import ManageJds from "../components/Interviews/EmployerDashboard/Schedule/ManageJds";
import EmployerHeader from "../components/commonComponents/EmployerHeader";
import Subscription from "../components/Interviews/EmployerDashboard/sidebarPages/Subscription";
import Report from "../components/Interviews/EmployerDashboard/sidebarPages/Report";
import CallSupport from "../components/Interviews/EmployerDashboard/sidebarPages/CallSupport";
import Inbox from "../components/Interviews/EmployerDashboard/sidebarPages/Inbox";
import Billing from "../components/Interviews/EmployerDashboard/sidebarPages/Billing";
import RegisterCandidate from "../components/Interviews/EmployerDashboard/sidebarPages/RegisterCandidate";
import RegisteredCandidates from "../components/Interviews/EmployerDashboard/sidebarPages/RegisteredCandidates";
import AvailableTest from "../components/Interviews/EmployerDashboard/sidebarPages/AvailableTest";
import ConfigureDash from "../components/Interviews/EmployerDashboard/sidebarPages/ConfigureDash";
import ManageUsers from "../components/Interviews/EmployerDashboard/sidebarPages/ManageUsers";
import ConfigureReports from "../components/Interviews/EmployerDashboard/sidebarPages/ConfigureReports";
import InterviewDashboard from "../components/Interviews/EmployerDashboard/sidebarPages/InterviewDashboard";
// const JobSearch = () => <div>Job Search Content</div>;
// const Profile = () => <div>Profile Content</div>;

const Verification = () => <div>Verification Content</div>;
const PracticeInterview = () => <div>Practice Interview Content</div>;

const EmployerDashboard = () => {
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.userData?.accessToken);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentItem, setCurrentItem] = useState("dashboard");

  useEffect(() => {
    // if (!accessToken) navigate("/login");
    let initialOpen =
      currentItem === "activeJds" || currentItem === "create-tests" || currentItem === "available-tests";
    if (initialOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [currentItem]);


  useEffect(() => {
    // if (!accessToken) navigate("/login");
    let initialOpen =
      currentItem === "candidate-register" || currentItem === "candidate-registered";
    if (initialOpen) {
      setOpen2(true);
    } else {
      setOpen2(false);
    }
  }, [currentItem]);

  console.log("ITEM-->", currentItem);
  return (
    <MainBox>
      <EmployerHeader setCurrentItem={setCurrentItem} />
      <StyledContent>
        <EmployerSidebar
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
          open={open}
          open2={open2}
          setOpen={setOpen}
          setOpen2={setOpen2}
        />
        <MainContent>
          {currentItem === 'dashboard' &&
            <EmployeMetrics setCurrentItem={setCurrentItem} />
          }

          {currentItem === "configure-dashboard" && <ConfigureDash />}
          {currentItem === "jd-register" && <JdRegistration />}
          {currentItem === "manage-jds" && <JdRegistration />}
          {currentItem === "manage-ssubscriptions" && <JdRegistration />}

          {currentItem === "candidate-register" && <RegisterCandidate />}
          {currentItem === "candidate-registered" && <RegisteredCandidates setCurrentItem={setCurrentItem} />}
          {currentItem === "manage-tests" && <CreateQuestion />}
          {currentItem === "activeJds" && <ActiveJds />}
          {currentItem === "create-tests" && <ManageTests />}
          {currentItem === "available-tests" && <AvailableTest />}
          {currentItem === "interview-dashboard" && <InterviewDashboard />}

          {currentItem === "profile" && <EmployeProfile />}
          {currentItem === "manage-users" && <ManageUsers />}
          {currentItem === "subscriptions" && <Subscription />}
          {currentItem === "billing" && <Billing />}
          {currentItem === "inbox" && <Inbox />}
          {currentItem === "report" && <Report />}
          {currentItem === "configure-report" && <ConfigureReports />}

          {currentItem === "call-support" && <CallSupport />}

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
background-color: #f4f4f4;
`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 17rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f4f4f4;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  height: calc(100% - 4rem);
  margin-top: 4rem;
  background-color: var(--white);
  color: var(--color);
`;
