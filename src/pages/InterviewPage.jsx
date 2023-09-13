import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import Header from "../components/Interviews/Header";
import Loader from "../components/commonComponents/Loader";
import Footer from "../components/commonComponents/Footer";
import InterviewTabs from "../components/Interviews/InterviewTabs";

const InterviewPage = () => {
    const navigate = useNavigate();
    const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        if (!accessToken) navigate("/login");
    }, []);

    return (
        <StyledContent>
            {isLoading ? (
                <Loader message="Generating Interview Questions... please wait " />
            ) : (
                <>
                    <Header
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        openNewInterviewModal={openNewInterviewModal}
                        setOpenNewInterviewModal={setOpenNewInterviewModal}
                    />
                    <InterviewTabs />
                    <Footer />
                </>
            )}
        </StyledContent>
    );
};

export default InterviewPage;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // margin: 1rem auto;
  background-color: var(--backgroundColor);
  color: var(--color);
`;
