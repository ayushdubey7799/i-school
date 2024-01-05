
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../../App.css';
import styled from "styled-components";
import Loader from "../../components/commonComponents/Loader";
import JDListing from "./JdListing";
import CandidateListing from "./CandidateListing";
import EmployerAgencyHeader from "../../components/Interviews/EmployerAgency/EmployerAgencyHeader";

export default function CandidateListingTabs() {
  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [value, setValue] = useState("UPLOADED");
  const [filteredData, setFilteredData] = useState({});

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

  const handleChange = (event, newValue) => {
   
      setValue(newValue);
    
  };

  useEffect(() => {
    async function getData(value) {
     
    }
    getData();
  }, [value, size, page]);



  return (
    <>
          <EmployerAgencyHeader/>

      {filteredData.status == 'SUCCESS' ? <Loader /> :
      <>
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
              value="UPLOADED"
              label="uploaded"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
            <Tab
              value="SHORTLISTED"
              label="shortlisted"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
             <Tab
              value="PROCESSED"
              label="processed"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
          </Tabs>
          {value === 'UPLOADED' && <CandidateListing/>}
          {value === 'SHORTLISTED' && <CandidateListing/>}
          {value === 'PROCESSED' && <CandidateListing/>}

        </StyledBox>
        </>
      }
    </>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;


const StyledBox = styled.div`
    width: 90%;
    min-height: 30rem;
    margin: 0 auto;
    padding-top: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

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

