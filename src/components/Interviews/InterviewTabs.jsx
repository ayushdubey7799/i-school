
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InterviewList from "./InterviewList";
import '../../App.css';
import { getInterviewByStatus } from "../../functions/api/getInterviewByStatus";
import styled from "styled-components";
import Loader from "../commonComponents/Loader";

export default function InterviewTabs() {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [value, setValue] = useState("COMPLETED");
  const [filteredData, setFilteredData] = useState({});


  if (filteredData.status == 'SUCCESS') {
    console.log(filteredData.data.data);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getData(value) {
      const response = await getInterviewByStatus(value, accessToken);
      if (response) {
        setFilteredData(response);
      }
    }
    getData(value);
  }, [value]);



  return (
    <>
      {filteredData.status !== 'SUCCESS' ? <Loader /> :
        <StyledBox>
          <h1>My Interviews</h1>
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--lightOrange)",
              },
            }}
            aria-label="wrapped label tabs example"
          >
            <Tab
              value="COMPLETED"
              label="Completed"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
            <Tab
              value="NOT_STARTED"
              label="Scheduled"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
          </Tabs>
          <InterviewList filteredData={filteredData} />
        </StyledBox>
      }
    </>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;


const StyledBox = styled.div`
    width: 90%;
    min-height: 30rem;
    margin: 0 5%;
    margin-top: 6rem;



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
  text-decoration: none !important;
}

.custom-tab-selected .MuiTab-label {
  text-transform: none;
}
`

