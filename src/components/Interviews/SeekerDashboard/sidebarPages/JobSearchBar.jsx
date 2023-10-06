import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ProfileFilter from '../ProfileFilter';
import { technicalSkills } from '../../../../utils/contantData';
import { locations } from '../../../../utils/contantData';

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

  .locationBox {
    position: relative;
  }

  .locationInput {
  height: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  font-size: 1rem;
  background-color: #f2f2f2;
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
    width: 100%;
  }



  .skillInput {
  flex-grow: 1;
  border: none;
  height: 100%;
  width: 90%;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: #f2f2f2;
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
`;


const FilterDropdown = styled.select`
  height: 100%;
  padding: 0.5rem;
  border: none;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  background-color: #f2f2f2;
  outline: none;
  font-size: 0.9rem;

  option{
    font-size: 0.9rem;
    border: none;
}
`;


const JobSearchBar = () => {
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const [skill, setSkill] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [skillDropdownVisible, setSkillDropdownVisible] = useState(false);
  const skillDropdownRef = useRef(null);

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
    setLocation((prevLocation) => (prevLocation ? prevLocation + selectedLocation + ", " : selectedLocation));

    setFilteredLocations([]);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleSkillClick = (selectedSkill) => {
    setSkill((prevSkill) => (prevSkill ? prevSkill + selectedSkill + ", " : selectedSkill));

    setFilteredSkills([]);
    setSkillDropdownVisible(false);
  }

  const handleSkillClickOutside = (event) => {
    if (skillDropdownRef.current && !skillDropdownRef.current.contains(event.target)) {
      setSkillDropdownVisible(false);
    }
  };

  return (
    <JobSearchBox>
      <SearchBarContainer dropdownVisible={dropdownVisible} skillDropdownVisible={skillDropdownVisible}>
        <div className='skillBox' ref={skillDropdownRef}>
          <input
            className='skillInput'
            type="text"
            placeholder="Enter your skills..."
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
        <FilterDropdown>
          <option value="">Select Experience</option>
          <option value="0-1">0-1 Years</option>
          <option value="1-3">1-3 Years</option>
          <option value="3+">3+ Years</option>
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


