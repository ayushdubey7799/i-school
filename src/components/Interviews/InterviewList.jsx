import React from "react";
import { getData } from "../../functions/getData";
import InterviewCard from "./InterviewCard";
import { styled } from "styled-components";

const InterviewList = ({ filteredData }) => {
  console.log(filteredData?.data?.data.length);

  if (!filteredData?.data?.data.length) {
    console.log("working");
    return <h6 style={{ fontSize: '1.2rem' }}>No interview Here</h6>
  }

  

  return (
    <StyledInterviews>
      {filteredData?.data?.data?.map((item, ind) => {
        return <InterviewCard key={ind} data={item} />
      })}
    </StyledInterviews>
  );
};

export default InterviewList;

const StyledInterviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`;
