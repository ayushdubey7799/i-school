
import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 91.4%;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  padding: 0.1rem 0.5rem 0.2rem 0.5rem;
  background-color: #f9f9f9;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;


  .box1 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }


  .box2 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

  .hrLine {
    width: 99%;
    border-top: 0.08rem solid grey;
    margin: 0.1rem 0 -0.3rem 0;
  }
`;



const FilterDropdown = styled.select`
  padding: 0.5rem 0.5rem;
  margin-top: 0.5rem;
  height: 2.5rem;
  border: none;
  background-color: var(--white);
  border-radius: 0.3rem;
  font-size: 0.85rem;
  width: 30%;
  height: 100%;
  outline: none;

  option {
    font-size: 0.85rem;
    font-weight: 400;
  }


`


function ProfileFilter() {
  const [workMode, setWorkMode] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [freshness, setFreshness] = useState('');

  const [noticePeriod, setNoticePeriod] = useState('');
  const [companyType, setCompanyType] = useState('');
  const [candidateAvl, setCandidateAvl] = useState('');

  const handleWorkModeChange = (e) => {
    setWorkMode(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
  };

  const handleFreshnessChange = (e) => {
    setFreshness(e.target.value);
  };

  const handleNoticePeriodChange = (e) => {
    setNoticePeriod(e.target.value);
  }

  const handleCompanyTypeChange = (e) => {
    setCompanyType(e.target.value);
  }

  const handleCandidateAvlChange = (e) => {
    setCandidateAvl(e.target.value);
  }


  return (
    <FilterContainer>

      <div className='box1'>
        <FilterDropdown value={workMode} onChange={handleWorkModeChange}>
          <option value="" disabled selected>Select Work Mode</option>
          <option value="wfo">WFO</option>
          <option value="wfh">WFH</option>
          <option value="hybrid">Hybrid</option>
        </FilterDropdown>

        <FilterDropdown value={salaryRange} onChange={handleSalaryRangeChange}>
          <option value="" disabled selected>Select Salary</option>
          <option value="0-3">0-3 lakhs</option>
          <option value="3-6">3-6 lakhs</option>
          <option value="6-10">6-10 lakhs</option>
          <option value="10+">10+ lakhs</option>
        </FilterDropdown>

        <FilterDropdown value={freshness} onChange={handleFreshnessChange}>
          <option value="" disabled selected>Select Freshness</option>
          <option value="0-3">Last 1 day</option>
          <option value="3-6">Last 3 days</option>
          <option value="6-10">Last 7 days</option>
          <option value="6-10">Last 30 days</option>
          <option value="10+">Anytime</option>
        </FilterDropdown>
      </div>

      <span className='hrLine'></span>
      <div className='box2'>
        <FilterDropdown value={noticePeriod} onChange={handleNoticePeriodChange}>
          <option value="" disabled selected>Select Notice Period</option>
          <option value="Immediate">Immediate</option>
          <option value="1week">1 Week</option>
          <option value="2weeks">2 Weeks</option>
          <option value="1month">1 Month</option>
          <option value="2months">2 Months</option>
          <option value="3months">3 Months</option>
          <option value="6months">6 Months</option>
        </FilterDropdown>

        <FilterDropdown value={companyType} onChange={handleCompanyTypeChange}>
          <option value="" disabled selected>Select Company Type</option>
          <option value="startup">Start up</option>
          <option value="itService">IT Service</option>
          <option value="productBased">Product Based</option>
        </FilterDropdown>

        <FilterDropdown value={candidateAvl} onChange={handleCandidateAvlChange}>
          <option value="" disabled selected>Select Candidate Availability</option>
          <option value="Immediate">Immediate</option>
          <option value="1week">1 Week</option>
          <option value="2weeks">2 Weeks</option>
          <option value="1month">1 Month</option>
          <option value="2months">2 Months</option>
          <option value="3months">3 Months</option>
        </FilterDropdown>
      </div>
    </FilterContainer>
  );
}

export default ProfileFilter;
