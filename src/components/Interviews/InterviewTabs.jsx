// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// const tabIndicatorStyle = {

//     borderColor: 'green',
//   };

// export default function Tabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'green'}}>
//           <TabList
//              onChange={handleChange}
//              TabIndicatorProps={{
//                 style: {
//                     borderColor: 'green',
//                   }
//            }}>
//             <Tab label="All Interviews" value="1" style={{color: 'green'}}/>
//             <Tab label="Completed" value="2" style={{color: 'green'}}/>
//             <Tab label="Not Completed" value="3" style={{color: 'green'}}/>
//             <Tab label="Not Started" value="4" style={{color: 'green'}}/>
//           </TabList>
//         </Box>
//         <TabPanel value="1">All Interviews</TabPanel>
//         <TabPanel value="2">Completed</TabPanel>
//         <TabPanel value="3">Not Completed</TabPanel>
//         <TabPanel value="4">Not Started</TabPanel>

//       </TabContext>
//     </Box>
//   );
// }

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import InterviewList from "./InterviewList";
import { getInterviewByStatus } from "../../functions/api/getInterviewByStatus";

export default function InterviewTabs() {
  const [value, setValue] = useState("STARTED");
  const [filteredData, setFilteredData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    async function getData(value) {
      const response = await getInterviewByStatus(value);
      if (response) {
        setFilteredData(response);
      }
    }
    getData(value);
  }, [value]);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            backgroundColor: "green",
          },
        }}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="STARTED"
          label="Started"
          sx={{
            color: "green",
          }}
        />
        <Tab
          value="COMPLETED"
          label="Completed"
          sx={{
            color: "green",
          }}
        />
        <Tab
          value="NOT_STARTED"
          label="Not Started"
          sx={{
            color: "green",
          }}
        />
        <Tab
          value="CANCELED"
          label="Canceled"
          sx={{
            color: "green",
          }}
        />
        <Tab
          value="EXPIRED"
          label="Expired"
          sx={{
            color: "green",
          }}
        />
      </Tabs>
      <InterviewList filteredData={filteredData} />
    </Box>
  );
}

// NOT_STARTED,CANCELED,STARTED,COMPLETED,EXPIRED;
