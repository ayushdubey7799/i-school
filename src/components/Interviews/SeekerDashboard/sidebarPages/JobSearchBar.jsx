import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProfileFilter from '../ProfileFilter';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';
import searchIcon from '../../../../assets/icons/searchIcon.png'
import FilteredJobs from './FilteredJobs';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 1rem auto;
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


const JobSearchBar = () => {
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

  console.log("Skills", selectedSkills);

  return (
    <JobSearchBox>
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
        <ProfileFilter />
      </div>
      <StyledJobSearch>
        <FilteredJobs />
      </StyledJobSearch>
    </JobSearchBox>

  );
};

export default JobSearchBar;


const JobSearchBox = styled.div`
padding-bottom: 4rem;
display: flex;
flex-direction: column;
width: 100%;


.mainBox {
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 9fr 1fr;
}

`

const StyledJobSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

