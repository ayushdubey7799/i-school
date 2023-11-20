import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";

import { jobListings } from '../../../../utils/contantData';
import save from '../../../../assets/icons/save2.png'
import share from '../../../../assets/icons/share.png'
import view from '../../../../assets/icons/visible.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import CommonDrawer from '../../../commonComponents/CommonDrawer';
import ProfileFilter from '../ProfileFilter';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';
import searchIcon from '../../../../assets/icons/searchIcon.png'


import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function Row(props) {
  const { row, index } = props;

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }} className={`${index % 2 == 1 ? 'colored' : ''}`}>
        <TableCell component="th" scope="row" align='center' className='logo'>
          <img src={row.companyLogo} />
        </TableCell>
        <TableCell component="th" scope="row" align='center' className='rowText'>
          {row.jobTitle}
        </TableCell>{" "}
        <TableCell component="th" scope="row" align="center" className='rowText'>
          {row.companyName}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          {row.location}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          {row.postedDate}
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          {row.matchPercentage}%
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <CommonDrawer toggleDrawer={toggleDrawer} state={state} />
            <img src={view} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} onClick={toggleDrawer('right', true)} />
            <img src={save} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
            <img src={share} style={{ width: '0.8rem', height: '0.8rem', cursor: 'pointer', border: '0.08rem solid grey', padding: '0.3rem', borderRadius: '0.3rem' }} />
          </div>
        </TableCell>
        <TableCell component="th" scope="row" align="center" className='rowText'>
          <Link to={`/apply/${row.jobId}`} className="btn">Apply</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const RecommendedJobs = () => {
  const [exp, setExp] = useState();
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  const handleLocationsChange = (_, newLocations) => {
    setSelectedLocations(newLocations);
  }

  const handleSkillsChange = (_, newSkills) => {
    setSelectedSkills(newSkills);
  };

  const handleJobSearch = () => {
    console.log("Job search");
  }

  return (
    <Container1>
      <div className='mainBox'>
        <SearchBarContainer>
          <div className='skillBox'>
            <Stack spacing={3} sx={{ width: '100%' }}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={technicalSkills}
                getOptionLabel={(option) => option}
                onChange={handleSkillsChange}
                value={selectedSkills}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Skills, role and title."
                  />
                )}
              />
            </Stack>
          </div>

          <div className='locationBox'>
            <Stack spacing={3} sx={{ width: '100%' }}>
              <Autocomplete
                multiple
                id="tags-standard"
                options={locations}
                getOptionLabel={(option) => option}
                onChange={handleLocationsChange}
                value={selectedLocations}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    placeholder="Locations"
                  />
                )}
              />
            </Stack>
          </div>

          <FilterDropdown value={exp} onChange={(e) => setExp(e.target.value)}>
            <option value="" disabled selected>Select Experience</option>
            <option value="0">Fresher</option>
            <option value="1">1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-8">6-8 years</option>
            <option value="9-12">9-12 years</option>
            <option value="13-17">13-17 years</option>
            <option value="17-21">17-21 years</option>
            <option value="21+">21+ years</option>
          </FilterDropdown>

          <button className='btn' onClick={() => handleJobSearch()}><img src={searchIcon} />Search</button>
        </SearchBarContainer>
        <div className='profileBox'>
          <ProfileFilter />
        </div>
      </div>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Recommended Jobs</span>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>Job Title</TableCell>
                <TableCell align='center'>Company</TableCell>
                <TableCell align='center'>Location</TableCell>
                <TableCell align='center'>Posted Date</TableCell>
                <TableCell align='center'>% Match with Profile</TableCell>
                <TableCell align='center'>Save/Share</TableCell>
                <TableCell align='center'>Apply</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="tableBody">
              {jobListings?.map((row, index) => (
                <Row key={row.jobId} row={row} index={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledBox>
    </Container1>
  );
};

export default RecommendedJobs;


const StyledBox = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  padding: 0;


  .colored {
    background-color: #ececec;
  }

  .tableBox {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.20);
    border-radius: 0.5rem;
    padding-top: 1rem;


    .title {
      display: block;
      padding: 0rem 0 1rem 1rem;
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  .MuiTableCell-root {
    border: none;
  }

  .MuiTableRow-root {
    border-bottom: none;
  }

  .btn {
    background-color: var(--lightOrange);
    padding: 0.3rem 0.5rem;
    border: none;
    color: var(--white);
    font-size: 0.9rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-decoration: none;
  }

  .tableHead {
    background-color: #d1fff0;
    width: 100%;
  }

  .tableBody {
    width: 100%;
  }

  .rowText {
    font-size: 0.75rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10%;
    }
  }
  
`;



const Container1 = styled.div`
  width:95%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0rem;


  .mainBox {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  .profileBox {
    margin-right: 1rem;
  }
`;



const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0rem auto;
  background-color: var(--white);
  border-radius: 0.5rem;;
  padding: 0.7rem 1rem;
  border: 0.08rem solid lightgrey;
  gap: 0.5rem;


  .locationBox {
    position: relative;
    width: 30%;
  }

  .skillBox {
    position: relative;
    width: 40%;
  }


  .btn {
    background-color: var(--lightOrange);
    padding: 0.5rem 1.1rem;
    border-radius: 1.1rem;
    color: var(--white);
    font-size: 1rem;
    font-weight: 600;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
  }

  .btn img {
    width: 1rem;
  }
`;


const FilterDropdown = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  background-color: var(--white);
  outline: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: #B3B3B3;

  option{
    font-size: 0.9rem;
    font-weight: 400;
    border: none;
    color: var(--color);
}
`;