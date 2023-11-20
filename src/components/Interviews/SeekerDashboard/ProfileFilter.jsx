import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import filterIcon from '../../../assets/icons/filterIcon.png'
import closeIcon from '../../../assets/icons/closeIcon.png'



const FilterContainer = styled.div`
  width: 91.4%;
  border-radius: 0.8rem;
  padding: 0.1rem 0.5rem 0.2rem 0.5rem;
  // background-color: #fff;
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
    height: 50%;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    z-index: 1;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .content {
    height: 50%;
    display: flex;
    justify-content: space-evenly;
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
      width: 2rem;
      height: 2rem;
    }
  }
  
`;




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
                <label>
                  <input
                    type="checkbox"
                    value="WFO"
                    onChange={() => handleWorkModeChange('WFO')}
                  /> WFO
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="WFH"
                    onChange={() => handleWorkModeChange('WFH')}
                  /> WFH
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Hybrid"
                    onChange={() => handleWorkModeChange('Hybrid')}
                  /> Hybrid
                </label>
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Salary</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="0-3"
                    onChange={() => handleSalaryRangeChange('0-3')}
                  /> 0-3 lakhs
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3-6"
                    onChange={() => handleSalaryRangeChange('3-6')}
                  /> 3-6 lakhs
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="6-10"
                    onChange={() => handleSalaryRangeChange('6-10')}
                  /> 6-10 lakhs
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="10+"
                    onChange={() => handleSalaryRangeChange('10+')}
                  /> 10+ lakhs
                </label>
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Freshness</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="1"
                    onChange={() => handleFreshnessChange('1')}
                  /> Last 1 day
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3"
                    onChange={() => handleFreshnessChange('3')}
                  /> Last 3 day
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="7"
                    onChange={() => handleFreshnessChange('7')}
                  /> Last 7 day
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="30"
                    onChange={() => handleFreshnessChange('30')}
                  /> Last 30 day
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="anytime"
                    onChange={() => handleFreshnessChange('anytime')}
                  /> Anytime
                </label>
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Notice Period</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="Immediate"
                    onChange={() => handleNoticePeriodChange('Immediate')}
                  /> Immediate
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="1Week"
                    onChange={() => handleNoticePeriodChange('1Week')}
                  /> 1 Week
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2Weeks"
                    onChange={() => handleNoticePeriodChange('2Weeks')}
                  /> 2 Weeks
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="1Month"
                    onChange={() => handleNoticePeriodChange('1Month')}
                  /> 1 Month
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2Months"
                    onChange={() => handleNoticePeriodChange('2Months')}
                  /> 2 Months
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3Months"
                    onChange={() => handleNoticePeriodChange('3Months')}
                  /> 3 Months
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="6Months"
                    onChange={() => handleNoticePeriodChange('6Months')}
                  /> 6 Months
                </label>
              </div>
            </InputBox>


            <InputBox>
              <span className="title">Company Type</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="startup"
                    onChange={() => handleCompanyTypeChange('startup')}
                  /> Start up
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="itService"
                    onChange={() => handleCompanyTypeChange('itService')}
                  /> IT Service
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="productBased"
                    onChange={() => handleCompanyTypeChange('productBased')}
                  /> Product Based
                </label>
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Candidate Avl</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="Immediate"
                    onChange={() => handleCandidateAvlChange('Immediate')}
                  /> Immediate
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="1week"
                    onChange={() => handleCandidateAvlChange('1week')}
                  /> 1 Week
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2weeks"
                    onChange={() => handleCandidateAvlChange('2weeks')}
                  /> 2 Weeks
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="1month"
                    onChange={() => handleCandidateAvlChange('1month')}
                  /> 1 Month
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2months"
                    onChange={() => handleCandidateAvlChange('2months')}
                  /> 2 Months
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3months"
                    onChange={() => handleCandidateAvlChange('3months')}
                  /> 3 Months
                </label>
              </div>
            </InputBox>

            <InputBox>
              <span className="title">Profile Match %</span>
              <div className="childInputBox">
                <label>
                  <input
                    type="checkbox"
                    value="40-60"
                    onChange={() => handleProfileMatchChange('40-60')}
                  /> 40-60 %
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="60-75"
                    onChange={() => handleProfileMatchChange('60-75')}
                  /> 60-75 %
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="75-85"
                    onChange={() => handleProfileMatchChange('75-85')}
                  /> 75-85 %
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="85-95"
                    onChange={() => handleProfileMatchChange('85-95')}
                  /> 85-95 %
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="95-100"
                    onChange={() => handleProfileMatchChange('95-100')}
                  /> 95-100 %
                </label>
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



.childInputBox {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  label {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
}

.title {
  font-size: 0.95rem;
  font-weight: 500;

}



`