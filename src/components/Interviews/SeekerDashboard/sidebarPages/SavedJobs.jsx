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
import save from '../../../../assets/icons/save.png'
import share from '../../../../assets/icons/share.png'
import searchBlack from '../../../../assets/icons/searchBlack.png'
import ProfileFilter from '../ProfileFilter';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';
import searchIcon from '../../../../assets/icons/searchIcon.png'

function Row(props) {
  const { row, index } = props;

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
          <Link to={`/apply/${row.jobId}`} className="btn">Apply</Link>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const SavedJobs = () => {
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const [skill, setSkill] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skillDropdownVisible, setSkillDropdownVisible] = useState(false);
  const skillDropdownRef = useRef(null);

  const [exp, setExp] = useState();

  useEffect(() => {
    if (skill != '') {
      const inputAfterComma = skill.split(",").pop().trim();
      var filteredData = technicalSkills.filter(s => s.toLocaleLowerCase().includes(inputAfterComma.toLocaleLowerCase()));
      setFilteredSkills(filteredData);
      setSkillDropdownVisible(true);
    } else {
      var filteredData = '';
      setFilteredSkills(filteredData);
      setSkillDropdownVisible(false);
    }

  }, [skill])


  useEffect(() => {
    if (location != '') {
      const inputAfterComma = location.split(",").pop().trim();
      var filteredLocation = locations.filter(locate => locate.toLocaleLowerCase().includes(inputAfterComma.toLocaleLowerCase()));
      setFilteredLocations(filteredLocation);
      setDropdownVisible(true);
    } else {
      var filteredLocation = '';
      setFilteredLocations(filteredLocation);
      setDropdownVisible(false);
    }

  }, [location])

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  useEffect(() => {
    window.addEventListener('mousedown', handleSkillClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleSkillClickOutside);
    };
  }, []);

  const handleLocationClick = (selectedLocation) => {

    if (location !== '') {
      const remainLocation = location.split(",");

      if (remainLocation.length > 1) {
        const showLocations = location.split(",").slice(0, -1);
        setLocation(showLocations);
      } else {
        setLocation('');
      }
    }


    setLocation((prevLocation) => (prevLocation ? prevLocation + ", " + selectedLocation + ", " : selectedLocation + ", "));

    setFilteredLocations([]);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleSkillClick = (selectedSkill) => {

    if (skill !== '') {
      const remainSkills = skill.split(",");

      if (remainSkills.length > 1) {
        const showSkills = skill.split(",").slice(0, -1);
        setSkill(showSkills);
      } else {
        setSkill('');
      }
    }


    setSkill((prevSkill) => (prevSkill ? prevSkill + ", " + selectedSkill + ", " : selectedSkill + ", "));

    setFilteredSkills([]);
    setSkillDropdownVisible(false);
  }

  const handleSkillClickOutside = (event) => {
    if (skillDropdownRef.current && !skillDropdownRef.current.contains(event.target)) {
      setSkillDropdownVisible(false);
    }
  };

  const handleJobSearch = () => {
    console.log("Job search");
  }


  return (
    <Container1>
      <div className='mainBox'>
        <SearchBarContainer dropdownVisible={dropdownVisible} skillDropdownVisible={skillDropdownVisible}>
          <div className='skillBox' ref={skillDropdownRef}>
            <input
              className='skillInput'
              type="text"
              placeholder="Enter your skills, role and title."
              value={skill}
              onChange={(e) => {
                setSkill(e.target.value);
                setSkillDropdownVisible(true);
              }}
            />
            <div class="skillDropdown" id="skillDropdown" ref={skillDropdownRef}>
              {(filteredSkills.length > 0 && skillDropdownVisible) &&
                <div className='skillDropdownContent'>
                  {
                    filteredSkills.length > 8 ? filteredSkills.slice(0, 8).map((skill) => (
                      <span className='skill' key={skill} onClick={() => handleSkillClick(skill)}>{skill}</span>
                    )) : filteredSkills.map((skill) => (
                      <span className='skill' key={skill} onClick={() => handleSkillClick(skill)}>{skill}</span>
                    ))
                  }
                </div>
              }
            </div>
          </div>
          <FilterDropdown value={exp} onChange={(e) => setExp(e.target.value)}>
            <option value="" disabled selected>Select Experience</option>
            <option value="">Fresher</option>
            <option value="1">1 year</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-8">6-8 years</option>
            <option value="9-12">9-12 years</option>
            <option value="13-17">13-17 years</option>
            <option value="17-21">17-21 years</option>
            <option value="21+">21+ years</option>
          </FilterDropdown>

          <div className='locationBox' ref={dropdownRef}>
            <input
              className='locationInput'
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setDropdownVisible(true);
              }}
            />
            <div class="dropdown" id="dropdown" ref={dropdownRef}>
              {(filteredLocations.length > 0 && dropdownVisible) &&
                <div className='dropdownContent'>
                  {
                    filteredLocations.length > 8 ? filteredLocations.slice(0, 8).map((location) => (
                      <span className='location' key={location} onClick={() => handleLocationClick(location)}>{location}</span>
                    )) : filteredLocations.map((location) => (
                      <span className='location' key={location} onClick={() => handleLocationClick(location)}>{location}</span>
                    ))
                  }
                </div>
              }
            </div>
          </div>

          <button className='btn' onClick={() => handleJobSearch()}><img src={searchIcon} />Search</button>
        </SearchBarContainer>
        <div className='profileBox'>
        <ProfileFilter />
        </div>
      </div>
      <StyledBox>
        <TableContainer component={Paper} className="tableBox">
          <span className='title'>Saved Jobs</span>
          <Table aria-label="collapsible table">
            <TableHead className="tableHead">
              <TableRow>
                <TableCell align='center'></TableCell>
                <TableCell align='center'>Job Title</TableCell>
                <TableCell align='center'>Company</TableCell>
                <TableCell align='center'>Location</TableCell>
                <TableCell align='center'>Posted Date</TableCell>
                <TableCell align='center'>% Match with Profile</TableCell>
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

export default SavedJobs;


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

  .locationBox {
    position: relative;
  }

  .locationInput {
  height: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background-color: var(--white);
  outline: none;
  }

  #dropdown {
    display: ${(props) => (props.dropdownVisible ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.25);
    z-index: 1;
    border-radius: 1rem;
  }

  .dropdownContent {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 1rem 1rem;
    gap: 0.8rem;
  }

  .location {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }


  .skillBox {
    position: relative;
    width: 40%;
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  height: 100%;
  width: 90%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: var(--white);
  outline: none;
  }

  #skillDropdown {
    display: ${(props) => (props.skillDropdownVisible ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    background-color: var(--white);
    box-shadow: 0 0.15rem 0.2rem rgba(0, 0, 0, 0.25);
    z-index: 1;
    border-radius: 1rem;
  }

  .skillDropdownContent {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 1rem 1rem;
    gap: 0.8rem;
  }

  .skill {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
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

  option{
    font-size: 0.9rem;
    border: none;
}
`;

