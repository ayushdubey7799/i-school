
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../../App.css';
import styled from "styled-components";
import Loader from "../../components/commonComponents/Loader";
import JDListing from "./JdListing";
import { getJds } from "../../functions/api/employers/getJds";
export default function JdListingTabs() {
  const accessToken = useSelector(state => state?.auth?.userData?.accessToken);
  const clientCode = useSelector(state => state?.auth?.userData?.user?.clientCode);
    const [value, setValue] = useState("ACTIVE");
  const [filteredData, setFilteredData] = useState([]);

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
       const res = await getJds(accessToken,clientCode);
       console.log(res?.data?.data);
       if(res)setFilteredData(res?.data?.data);
    }
    getData();
  }, [value, size, page]);



  return (
    <>
      {filteredData.status == 'SUCCESS' ? <Loader /> :
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
              value="ACTIVE"
              label="active"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
            <Tab
              value="INACTIVE"
              label="inactive"
              sx={{
                color: "var(--lightOrange)",
                fontSize: "0.8rem",
              }}
              classes={{ root: 'custom-tab', selected: 'custom-tab-selected' }}
            />
          </Tabs>
          {value === 'ACTIVE' && <JDListing filteredData={filteredData}/>}
          {value === 'INACTIVE' && <JDListing/>}
        </StyledBox>
      }
    </>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;


const StyledBox = styled.div`
    width: 90%;
    min-height: 30rem;
    margin: 0 auto;
    margin-top: 2rem;
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

