import React from "react";
import { getData } from "../../functions/getData";
import InterviewCard from "./InterviewCard";
import { styled } from "styled-components";

const InterviewList = ({ filteredData }) => {
    console.log(filteredData);
  return (
    <StyledInterviews>
      {filteredData.map((item) => {
        return <InterviewCard item={item} />;
      })}
    </StyledInterviews>
  );
};

export default InterviewList;

const StyledInterviews = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
