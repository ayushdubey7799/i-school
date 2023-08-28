import React, { useState } from "react";
import Header from "./Header";
import InterviewTabs from "./InterviewTabs";
import { getData } from "../../functions/getData";
import { styled } from "styled-components";

const InterviewPage = () => {
  const [openNewInterviewModal, setOpenNewInterviewModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = getData();

  return (
    <StyledContent>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <>
          <Header
          isLoading={isLoading}
          setIsLoading={setIsLoading}
            openNewInterviewModal={openNewInterviewModal}
            setOpenNewInterviewModal={setOpenNewInterviewModal}
          />
          <InterviewTabs data={data} />
        </>
      )}
    </StyledContent>
  );
};

export default InterviewPage;

const StyledContent = styled.div`
  width: 70%;
  margin: 0 auto;
`;
