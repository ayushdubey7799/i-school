
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InterviewList from "./InterviewList";
import '../../App.css';
import { getInterviewByStatus } from "../../functions/api/getInterviewByStatus";

export default function InterviewTabs() {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [value, setValue] = useState("COMPLETED");
  const [filteredData, setFilteredData] = useState({});

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

  const style = {
    width: '95%',
    minHeight: '30rem',
    margin: '0 3rem',
    marginTop: '6rem'
  }

  return (
    <Box sx={style}>
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
          }}
        />
        <Tab
          value="NOT_STARTED"
          label="Scheduled"
          sx={{
            color: "var(--lightOrange)",
          }}
        />
      </Tabs>
      <InterviewList filteredData={filteredData} />
    </Box>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;
