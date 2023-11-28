import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Footer from "../components/commonComponents/Footer";
import Header from '../components/Interviews/CreateInterview/Header'
import ProfileInterview from '../components/Interviews/CreateInterview/ProfileInterview'
import SkillInterview from '../components/Interviews/CreateInterview/SkillInterview'



export default function NewInterviewDetails() {
    const [value, setValue] = useState("profile-interview");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <StyledCreateInterview>
            <Header />
            <Box sx={{ width: "55%", position: "relative", top: "7rem", margin: "0 2rem", marginBottom: '7rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className='box'>
                <Tabs
                    style={{ width: '100%', borderRadius: '3rem', backgroundColor: 'var(--lightOrange)' }}
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
                            fontSize: "1rem;"
                        }}
                        classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
                    />
                    <Tab
                        value="skill-interview"
                        label="Skill Interview"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "1rem;"
                        }}
                        classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
                    />
                </Tabs>
                {
                    value == 'profile-interview' ?
                        <ProfileInterview />
                        :
                        <SkillInterview />
                }

            </Box>
            <Footer />

        </StyledCreateInterview>
    );
}

const StyledCreateInterview = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin: 0rem auto;

   .box {
    min-height: 38rem;

    @media(max-width: 720px){
      min-height: 45rem;
    }

    @media(max-width: 680px){
      min-height: 52rem;
    }

    // Custom styled for tabs

.custom-tab {
  color: white;
  background-color: var(--lightOrange);
  transition: background-color 0.3s;
  text-decoration: none !important;
}

.custom-tab-selected {
  background-color: var(--white);
  color: var(--lightOrange) !important;
  border: 0.1rem solid var(--lightOrange);
  border-radius: 3rem;
  text-decoration: none !important;
}

.custom-tab-selected .MuiTab-label {
  text-transform: none;
}

   }
`





