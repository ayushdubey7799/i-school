import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";

import { useSelector } from "react-redux";
import EmployerHeader from "../components/commonComponents/EmployerHeader";
import EmployerSidebar2 from "../components/Interviews/EmployerDashboard2.jsx/EmployerSidebar2";
import EmployerProfile2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/EmployerProfile2";
import Subscription2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/Subscription2";
import Billing2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/Billing2";
import Inbox2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/Inbox2";
import CallSupport2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/CallSupport2";
import InterviewDashboard2 from "../components/Interviews/EmployerDashboard2.jsx/sidebarPages/InterviewDashboard2";



const EmployerDashboard2 = () => {
    const navigate = useNavigate();
    const accessToken = useSelector((state) => state.auth.userData?.accessToken);
    const clientCode = useSelector(state => state.auth.userData?.user?.clientCode);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState("interview-dashboard");


    useEffect(() => {
        // if (!accessToken) navigate("/login");
        if (!accessToken) navigate('/login');
        if (clientCode == 'intelliview') navigate('/access-denied');



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
                <EmployerSidebar2
                    currentItem={currentItem}
                    setCurrentItem={setCurrentItem}
                    open={open}
                    open2={open2}
                    setOpen={setOpen}
                    setOpen2={setOpen2}
                />

                <MainContent>
                    {currentItem === "interview-dashboard" && <InterviewDashboard2/>}

                    {currentItem === "profile" && <EmployerProfile2 />}
                    {currentItem === "subscriptions" && <Subscription2 />}
                    {currentItem === "billing" && <Billing2 />}
                    {currentItem === "inbox" && <Inbox2 />}

                    {currentItem === "call-support" && <CallSupport2 />}

                </MainContent>
            </StyledContent>
        </MainBox>
    );
};

export default EmployerDashboard2;


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
