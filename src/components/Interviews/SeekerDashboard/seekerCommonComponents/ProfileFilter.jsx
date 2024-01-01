import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import filterIcon from '../../../../assets/icons/filterIcon.png'
import closeIcon from '../../../../assets/icons/closeIcon.png'
import CheckboxInput from './CheckboxInput';


function ProfileFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const [workMode, setWorkMode] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [freshness, setFreshness] = useState('');

  const [noticePeriod, setNoticePeriod] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [candidateAvl, setCandidateAvl] = useState('');
  const [profileMatch, setProfileMatch] = useState('');

  const handleWorkModeChange = (inp) => {
    setWorkMode(inp);
  };

  const handleSalaryRangeChange = (inp) => {
    setSalaryRange(inp);
  };

  const handleFreshnessChange = (inp) => {
    setFreshness(inp);
  };

  const handleNoticePeriodChange = (inp) => {
    setNoticePeriod(inp);
  }

  const handleCompanyTypeChange = (inp) => {
    setCompanyType(inp);
  }

  const handleCandidateAvlChange = (inp) => {
    setCandidateAvl(inp);
  }

  const handleProfileMatchChange = (inp) => {
    setProfileMatch(inp);
  }


  const toggleDropdown = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom });
    }
    setIsOpen(!isOpen);
  };


  const closeDropdown = () => {
    setIsOpen(false);
  };

  const resetFilters = () => {
    setWorkMode('');
    setSalaryRange('');
    setFreshness('');
    setNoticePeriod('');
    setCompanyType('');
    setCandidateAvl('');
    setProfileMatch('');
  };

  const applyFilters = () => {

  };


  return (
    <FilterContainer>

      <button onClick={toggleDropdown} ref={buttonRef} className='mainBtn'><img src={filterIcon} /></button>

      {isOpen && (
        <div className="dropdown" style={{ top: position.top, left: position.left }}>
          <div className="buttons">
            <button onClick={resetFilters} className='button'>Reset Filters</button>
            <button onClick={applyFilters} className='button'>Apply Filters</button>
            <img src={closeIcon} className='image' onClick={closeDropdown} />
          </div>

          <div className="content">
            <InputBox>
              <span className="title">Work Mode</span>
              <div className="childInputBox">

                <CheckboxInput
                  value="WFO"
                  handleInputChange={handleWorkModeChange}
                  text='WFO'
                />

                <CheckboxInput
                  value="WFH"
                  handleInputChange={handleWorkModeChange}
                  text='WFH'
                />

                <CheckboxInput
                  value="Hybrid"
                  handleInputChange={handleWorkModeChange}
                  text='Hybrid'
                />
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Salary</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="0-3"
                  handleInputChange={handleSalaryRangeChange}
                  text='0-3 lakhs'
                />

                <CheckboxInput
                  value="3-6"
                  handleInputChange={handleSalaryRangeChange}
                  text='3-6 lakhs'
                />

                <CheckboxInput
                  value="6-10"
                  handleInputChange={handleSalaryRangeChange}
                  text='6-10 lakhs'
                />

                <CheckboxInput
                  value="10+"
                  handleInputChange={handleSalaryRangeChange}
                  text='10+ lakhs'
                />
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Freshness</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="1"
                  handleInputChange={handleFreshnessChange}
                  text='Last 1 day'
                />

                <CheckboxInput
                  value="3"
                  handleInputChange={handleFreshnessChange}
                  text='Last 3 days'
                />

                <CheckboxInput
                  value="7"
                  handleInputChange={handleFreshnessChange}
                  text='Last 7 day'
                />

                <CheckboxInput
                  value="30"
                  handleInputChange={handleFreshnessChange}
                  text='Last 30 day'
                />

                <CheckboxInput
                  value="anytime"
                  handleInputChange={handleFreshnessChange}
                  text='Anytime'
                />
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Notice Period</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="Immediate"
                  handleInputChange={handleNoticePeriodChange}
                  text='Immediate'
                />

                <CheckboxInput
                  value="1Week"
                  handleInputChange={handleNoticePeriodChange}
                  text='1 Week'
                />

                <CheckboxInput
                  value="2Weeks"
                  handleInputChange={handleNoticePeriodChange}
                  text='2 Weeks'
                />

                <CheckboxInput
                  value="1Month"
                  handleInputChange={handleNoticePeriodChange}
                  text='1 Month'
                />

                <CheckboxInput
                  value="2Months"
                  handleInputChange={handleNoticePeriodChange}
                  text='2 Months'
                />

                <CheckboxInput
                  value="3Months"
                  handleInputChange={handleNoticePeriodChange}
                  text='3 Months'
                />

                <CheckboxInput
                  value="6Months"
                  handleInputChange={handleNoticePeriodChange}
                  text='6 Months'
                />
              </div>
            </InputBox>


            <InputBox>
              <span className="title">Company Type</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="startup"
                  handleInputChange={handleCompanyTypeChange}
                  text='Start up'
                />

                <CheckboxInput
                  value="itService"
                  handleInputChange={handleCompanyTypeChange}
                  text='IT Service'
                />

                <CheckboxInput
                  value="productBased"
                  handleInputChange={handleCompanyTypeChange}
                  text='Product Based'
                />
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Candidate Avl</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="Immediate"
                  handleInputChange={handleCandidateAvlChange}
                  text='Immediate'
                />

                <CheckboxInput
                  value="1week"
                  handleInputChange={handleCandidateAvlChange}
                  text='1 Week'
                />

                <CheckboxInput
                  value="3weeks"
                  handleInputChange={handleCandidateAvlChange}
                  text='3 Weeks'
                />

                <CheckboxInput
                  value="1months"
                  handleInputChange={handleCandidateAvlChange}
                  text='1 Month'
                />

                <CheckboxInput
                  value="2months"
                  handleInputChange={handleCandidateAvlChange}
                  text='2 Months'
                />

                <CheckboxInput
                  value="3months"
                  handleInputChange={handleCandidateAvlChange}
                  text='3 Months'
                />
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Profile Match %</span>
              <div className="childInputBox">
                <CheckboxInput
                  value="40-60"
                  handleInputChange={handleProfileMatchChange}
                  text='40-60 %'
                />

                <CheckboxInput
                  value="60-75"
                  handleInputChange={handleProfileMatchChange}
                  text='60-75 %'
                />

                <CheckboxInput
                  value="75-85"
                  handleInputChange={handleProfileMatchChange}
                  text='75-85 %'
                />

                <CheckboxInput
                  value="85-95"
                  handleInputChange={handleProfileMatchChange}
                  text='85-95 %'
                />

                <CheckboxInput
                  value='95-100'
                  handleInputChange={handleProfileMatchChange}
                  text='95-100 %' />
              </div>
            </InputBox>

          </div>
        </div>
      )}

    </FilterContainer>
  );
}

export default ProfileFilter;


const InputBox = styled.div`
display: flex;
flex-direction: column;
gap: 0.5rem;
background-color: var(--white);
border: 0.09rem solid lightgrey;
padding: 1rem 0.8rem;
height: 100%;
border-radius: 0.5rem;


.childInputBox {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.title {
  font-size: 0.9rem;
  font-weight: 600;

}



`

const FilterContainer = styled.div`
  width: 91.4%;
  border-radius: 0.8rem;
  padding: 0.1rem 0.5rem 0.2rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hrLine {
    width: 99%;
    border-top: 0.08rem solid grey;
    margin: 0.1rem 0 -0.3rem 0;
  }

  .dropdown {
    position: absolute;
    top: 0;
    right: 0.5rem;
    width: calc(100% - 20.3rem);
    height: 20rem;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .content {
    display: flex;
    justify-content: space-evenly;.
    align-items: center;
    height: 65%;
    margin-top: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    position: relative;  
    gap: 0.8rem;
    

    .button {
      font-size: 0.8rem;
      background-color: var(--white);
      border: 0.08rem solid var(--color);
      padding: 0.2rem 0.3rem;
      border-radius: 0.2rem;
      cursor: pointer;
      font-family: var(--font);
    }

    .image {
      width: 1.4rem;
      height: 1.4rem;
      cursor: pointer;
    }

  }


  .mainBtn {
    align-self: start;
    background-color: var(--white);
    border: 0.08rem solid lightgrey;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 0.3rem;
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    

    img {
      width: 1.75rem;
      height: 1.75rem;
    }
  }
  
`;
