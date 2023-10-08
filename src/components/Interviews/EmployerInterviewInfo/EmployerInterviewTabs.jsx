import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import Footer from "../../commonComponents/Footer";
import EmployerHeader from "../../commonComponents/EmployerHeader";
import { useParams } from "react-router";



export default function EmployerInterviewsStatus() {
    const { jdId } = useParams();

    const [value, setValue] = useState("scheduled");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };





    return (
        <StyledCreateInterview>
            <EmployerHeader />
            <Box sx={{ width: "75%", position: "relative", top: "4rem", margin: "0 2rem", marginBottom: '7rem' }} className='box'>
            <h2>Here are the details of aligned interviews against jd id: {jdId}</h2>

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
                        value="scheduled"
                        label="Scheduled"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "1.5rem;"
                        }}
                    />
                    <Tab
                        value="attempted"
                        label="Attempted"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "1.5rem;"
                        }}
                    />
                     <Tab
                        value="blacklist"
                        label="Blacklist"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "1.5rem;"
                        }}
                    />
                </Tabs>
                {value == 'scheduled'  && <h3>List of profiles having interview scheduled</h3>}
                {value == 'attempted'  && <h3>List of profiles who have attempted the interview</h3>}
                {value == 'blacklist'  && <h3>List of blacklisted profiles</h3>}
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

   }
`





