import React, { useEffect, useState } from "react";
import Header from "./Header";
import InterviewTabs from "./InterviewTabs";
import { getData } from "../../functions/getData";
import { styled } from "styled-components";
import Loader from "../commonComponents/Loader";
import { useNavigate } from "react-router";

const InterviewPage = () => {
  const navigate = useNavigate();
  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if(!accessToken)navigate("/login")
  },[])

  return (
    <StyledContent>
      {isLoading ? (
        <Loader message="Generating Interview Questions " />
      ) : (
        <>
          <Header
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            openNewInterviewModal={openNewInterviewModal}
            setOpenNewInterviewModal={setOpenNewInterviewModal}
          />
          <InterviewTabs />
        </>
      )}
    </StyledContent>
  );
};

export default InterviewPage;

const StyledContent = styled.div`
  width: 80%;
  margin: 1rem auto;
  background-color: var(--backgroundColor);
  color: var(--color);
`;
