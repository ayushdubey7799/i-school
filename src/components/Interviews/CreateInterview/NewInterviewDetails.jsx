import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ProfileInterview from "./ProfileInterview";
import SkillInterview from "./SkillInterview";
import Header from "./Header";
import Footer from "../../commonComponents/Footer";

export default function NewInterviewDetails() {
  const [value, setValue] = useState("profile-interview");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <StyledCreateInterview>
      <Header/>
      <Box sx={{ width: "95%", position: "relative", top: "7rem", margin: "0 2rem" }}>
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
      {/* <Footer /> */}

    </StyledCreateInterview>
  );
}

const StyledCreateInterview = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin: 0rem auto;
`


