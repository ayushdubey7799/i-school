
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InterviewList from "./InterviewList";
import '../../App.css';
import { getInterviewByStatus } from "../../functions/api/getInterviewByStatus";
import styled from "styled-components";
import Loader from "../commonComponents/Loader";
import ScheduledInterviewList from "./ScheduledInterviewList";
import MockInterviews from "./SeekerDashboard/sidebarPages/MockInterviews";

export default function InterviewTabs() {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [value, setValue] = useState("COMPLETED");
  const [filteredData, setFilteredData] = useState({});
  const [mock, setMock] = useState(false);

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);
  const [total, setTotal] = useState(0);

  const handleSizeChange = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handlePageChange = (change) => {
    if (change && page < Math.ceil(+total / +size)) {
      setPage((prev) => prev + 1);
    } else if (!change && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  if (filteredData.status == 'SUCCESS') {
    console.log(filteredData?.data?.data);
  }

  const handleChange = (event, newValue) => {
    if (newValue == "MOCK") {
      setMock(true);
      setValue("COMPLETED");

    }
    else {
      setMock(false);
      setValue(newValue);
    }
  };

  useEffect(() => {
    async function getData(value) {
      const response = await getInterviewByStatus(value, accessToken, page, size);
      if (response) {
        setFilteredData(response);
        setTotal(response?.data?.total);
      }
    }
    getData(value);
  }, [value, size, page]);



  return (
    <>
      {filteredData.status !== 'SUCCESS' ? <Loader /> :
        <StyledBox>
          <Tabs
            style={{
              width: '50%',
              borderRadius: '3rem',
              backgroundColor: 'var(--lightOrange)'
            }}
            value={mock ? "MOCK" : value}
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
            <Tab
              value="MOCK"
              label="Mock"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
          </Tabs>
          {value === 'COMPLETED' && !mock && <InterviewList filteredData={filteredData} page={page} setPage={setPage} size={size} setSize={setSize} total={total} handlePageChange={handlePageChange} handleSizeChange={handleSizeChange} />}
          {value === 'NOT_STARTED' && <ScheduledInterviewList />}
          {mock && <MockInterviews filteredData={filteredData} page={page} setPage={setPage} size={size} setSize={setSize} total={total} handlePageChange={handlePageChange} handleSizeChange={handleSizeChange} />}
        </StyledBox>
      }
    </>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;


const StyledBox = styled.div`
    width: 99%;
    min-height: 30rem;
    margin: 0 auto;
    margin-top: 0rem;
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

