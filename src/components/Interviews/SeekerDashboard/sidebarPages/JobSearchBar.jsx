import React from 'react';
import styled from 'styled-components';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';
import searchIcon from '../../../../assets/icons/searchIcon.png'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import SelectInput from '../seekerCommonComponents/SelectInput';


const ExpOptionsArr = [
  { value: "0", text: "Fresher" },
  { value: "1", text: "1 year" },
  { value: "1-3", text: "1-3 years" },
  { value: "3-5", text: "3-5 years" },
  { value: "6-8", text: "6-8 years" },
  { value: "9-12", text: "9-12 years" },
  { value: "13-17", text: "13-17 years" },
  { value: "17-21", text: "17-21 years" },
  { value: "21+", text: "21+ years" },
];


const JobSearchBar = ({exp, setExp, selectedLocations, setSelectedLocations, selectedSkills, setSelectedSkills}) => {

  const handleLocationsChange = (_, newLocations) => {
    setSelectedLocations(newLocations);
  }

  const handleSkillsChange = (_, newSkills) => {
    setSelectedSkills(newSkills);
  };

  const handleJobSearch = () => {
    
  }


  return (
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
                freeSolo
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
                freeSolo
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

          <SelectInput value={exp} setValue={setExp} optionsArr={ExpOptionsArr} titleText='Experience' />

          <button className='btn' onClick={() => handleJobSearch()}><img src={searchIcon} />Search</button>
        </SearchBarContainer>
  );
};

export default JobSearchBar;


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

  #tags-standard {
    font-family: var(--font);
    font-size: 0.9rem;
    font-weight: 400;
  }

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
    font-size: 0.9rem;
    font-weight: 600;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;
    font-family: var(--font);
  }

  .btn img {
    width: 1rem;
  }
`;


