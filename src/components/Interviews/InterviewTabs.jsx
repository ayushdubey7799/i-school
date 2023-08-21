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

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function InterviewTabs() {
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="green"
        indicatorColor="green"
        aria-label="wrapped label tabs example"
      >
       <Tab value="one" label="Item one" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value="four" label="Item four" />
      </Tabs>
    </Box>
  );
}
