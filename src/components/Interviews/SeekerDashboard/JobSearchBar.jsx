import React, { useEffect, useRef, useState } from 'react';
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

const locations = ['Delhi', 'Mumbai', 'Bengaluru', 'Bengaluru/Bangalore', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad', 'Noida', 'Gurgaon', 'Gurugram', 'Jaipur', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Patna', 'Chandigarh', 'Coimbatore', 'Vadodara', 'Ludhiana', 'Agra', 'Kochi', 'Surat', 'Visakhapatnam', 'Bhopal', 'Amritsar', 'Raipur', 'Ranchi', 'Varanasi', 'Jodhpur', 'Udaipur', 'Shimla', 'Manali', 'Mysuru/Mysore', 'Goa', 'Kochi',
  'Thiruvananthapuram', 'Ooty'];



const JobSearchBar = () => {
  const [location, setLocation] = useState('');
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);



  useEffect(() => {
    if (location != '') {
      var filteredLocation = locations.filter(locate => locate.toLocaleLowerCase().includes(location.toLocaleLowerCase().trim()));
      setFilteredLocations(filteredLocation);
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

  const handleLocationClick = (selectedLocation) => {
    setLocation(selectedLocation);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };



  return (
    <JobSearchBox>
      <SearchBarContainer dropdownVisible={dropdownVisible}>
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


