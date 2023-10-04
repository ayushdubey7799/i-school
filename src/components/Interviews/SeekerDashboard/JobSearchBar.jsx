import React from 'react';
import styled from 'styled-components';
import ProfileFilter from './ProfileFilter';

// Styled Components
const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 1rem auto;
  height: 4rem;
  background-color: #f2f2f2;
  border-radius: 0.5rem;;
  padding: 0.5rem;
  
`;

const SkillInput = styled.input`
  flex-grow: 1;
  border: none;
  height: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #f2f2f2;
  outline: none;
`;

const FilterDropdown = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 0.5rem;
  background-color: #f2f2f2;
  outline: none;
  font-size: 0.9rem;

  option{
    font-size: 0.7rem;
}
`;

const LocationInput = styled.input`
  height: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f2f2f2;
  outline: none;
`;

const JobSearchBar = () => {
  return (
    <JobSearchBox>
      <SearchBarContainer>
        <SkillInput
          type="text"
          placeholder="Enter your skills..."
        />
        <FilterDropdown>
          <option value="">Select Experience</option>
          <option value="0-1">0-1 Years</option>
          <option value="1-3">1-3 Years</option>
          <option value="3+">3+ Years</option>
        </FilterDropdown>
        <LocationInput
          type="text"
          placeholder="Location"
        />
      </SearchBarContainer>
      <StyledJobSearch>
        <ProfileFilter />
      </StyledJobSearch>
    </JobSearchBox>

  );
};

export default JobSearchBar;


const JobSearchBox = styled.div`
padding-bottom: 4rem;
`

const StyledJobSearch = styled.div`
    display: flex;
    justify-content: flex-end;
`