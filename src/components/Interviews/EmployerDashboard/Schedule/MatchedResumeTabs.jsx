import React, { useState } from 'react'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MatchedResumes from './MatchedResumes';
import styled from 'styled-components';
import LogoHeader from '../../../commonComponents/LogoHeader';

const MatchedResumeTabs = () => {
    const [value, setValue] = useState("MATCHED");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <StyledDiv>
            <LogoHeader />
            <StyledBox>
                <Tabs
                    style={{
                        width: '50%',
                        borderRadius: '3rem',
                        backgroundColor: 'var(--lightOrange)'
                    }}
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
                        value="MATCHED"
                        label="Matched"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "0.8rem",
                        }}
                        classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
                    />
                    <Tab
                        value="SHORTLISTED"
                        label="Shortlisted"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "0.8rem",
                        }}
                        classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
                    />
                    <Tab
                        value="NOT_SHORTLISTED"
                        label="Rejected"
                        sx={{
                            color: "var(--lightOrange)",
                            fontSize: "0.8rem",
                        }}
                        classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
                    />
                </Tabs>
                {value === 'MATCHED' && <MatchedResumes filterParams={value} />}
                {value === 'SHORTLISTED' && <MatchedResumes filterParams={value} />}
                {value === 'NOT_SHORTLISTED' && <MatchedResumes filterParams={value} />}
            </StyledBox>
        </StyledDiv>
    )
}



export default MatchedResumeTabs


// MATCHED, NOT_SHORTLISTED, SHORTLISTED

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;


const StyledBox = styled.div`
    width: 99%;
    min-height: 30rem;
    margin: 5rem 0% 2rem 0%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;



    // Custom styled for tabs

    .custom-tab {
      color: white;
      background-color: var(--lightOrange);
      transition: background-color 0.3s;
      text-decoration: none !important;
    }

.custom-tab-selected {
    background-color: white;
    color: var(--lightOrange) !important;
    border: 0.1rem solid var(--lightOrange);
    border-radius: 3rem;
    text-decoration: none !important;
  }

.custom-tab-selected .MuiTab-label {
  text-transform: none;
}
`
