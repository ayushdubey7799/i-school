import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ProfileInterview from "./ProfileInterview";
import SkillInterview from "./SkillInterview";

export default function NewInterviewDetails() {
  const [value, setValue] = useState("profile-interview");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <StyledCreateInterview>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--lightOrange)",
            },
          }}
          variant="fullWidth"
          aria-label="wrapped label tabs example"
        >
          <Tab
            value="profile-interview"
            label="Profile Interview"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1.5rem;"
            }}
          />
          <Tab
            value="skill-interview"
            label="Skill Interview"
            sx={{
              color: "var(--lightOrange)",
              fontSize: "1.5rem;"
            }}
          />
        </Tabs>
        {
          value == 'profile-interview' ?
            <ProfileInterview />
            :
            <SkillInterview />
        }

      </Box>
    </StyledCreateInterview>
  );
}

const StyledCreateInterview = styled.div`
   display: flex;
   width: 70%;
   margin: 2rem auto;
`


