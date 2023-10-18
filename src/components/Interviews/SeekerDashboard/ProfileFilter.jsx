// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FilterContainer = styled.div`
//   width: 7rem;
// `;

// const SelectFilter = styled.select`
//   width: 100%;
//   margin-bottom: 10px;
// `;

// const RangeInput = styled.input`
//   width: 100%;
//   margin-bottom: 10px;
//   padding: 5px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
// `;

// function ProfileFilter() {
//   const [workMode, setWorkMode] = useState('');
//   const [salaryRange, setSalaryRange] = useState('');
//   const [freshness, setFreshness] = useState('');
//   const [experienceRange, setExperienceRange] = useState('');

//   const handleWorkModeChange = (e) => {
//     setWorkMode(e.target.value);
//   };

//   const handleSalaryRangeChange = (e) => {
//     setSalaryRange(e.target.value);
//   };

//   const handleFreshnessChange = (e) => {
//     setFreshness(e.target.value);
//   };

//   const handleExperienceRangeChange = (e) => {
//     // Ensure that the entered value is within the range of 0 to 30.
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value >= 0 && value <= 30) {
//       setExperienceRange(value);
//     }
//   };

//   return (
//     <FilterContainer>
//       <h3>Filters</h3>
//       <SelectFilter value={workMode} onChange={handleWorkModeChange}>
//         <option value="">Work Mode</option>
//         <option value="WFO">WFO</option>
//         <option value="WFH">WFH</option>
//         <option value="hybrid">Hybrid</option>
//       </SelectFilter>
//       <SelectFilter value={salaryRange} onChange={handleSalaryRangeChange}>
//         <option value="">Salary Range</option>
//         <option value="0-3 lakhs">0-3 lakhs</option>
//         <option value="3-6 lakhs">3-6 lakhs</option>
//         <option value="6-10 lakhs">6-10 lakhs</option>
//         <option value="10+ lakhs">10+ lakhs</option>
//       </SelectFilter>
//       <SelectFilter value={freshness} onChange={handleFreshnessChange}>
//         <option value="">Freshness</option>
//         <option value="last-1-day">Last 1 day</option>
//         <option value="last-3-days">Last 3 days</option>
//         <option value="last-7-days">Last 7 days</option>
//         <option value="last-30-days">Last 30 days</option>
//         <option value="anytime">Anytime</option>
//       </SelectFilter>
//       <RangeInput
//         type="text"
//         placeholder="Experience Range (0-30)"
//         value={experienceRange}
//         onChange={handleExperienceRangeChange}
//       />
//     </FilterContainer>
//   );
// }

// export default ProfileFilter;



// import React, { useState } from 'react';
// import styled from 'styled-components';

// const FilterContainer = styled.div`
//   width: 25%;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   padding: 1rem;
//   background-color: #f9f9f9;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const RadioFilter = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// const RadioLabel = styled.label`
//   margin-bottom: 5px;
//   font-weight: bold;
// `;

// const RadioInput = styled.input`
//   margin-right: 5px;
// `;

// const RangeInput = styled.input`
//   width: 100%;
//   margin-bottom: 10px;
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   background-color: #fff;
// `;

// const FilterHeading = styled.h3`
//   font-size: 1.2rem;
//   margin-bottom: 1rem;
// `;

// function ProfileFilter() {
//   const [workMode, setWorkMode] = useState('');
//   const [salaryRange, setSalaryRange] = useState('');
//   const [freshness, setFreshness] = useState('');
//   const [experienceRange, setExperienceRange] = useState('');

//   const handleWorkModeChange = (e) => {
//     setWorkMode(e.target.value);
//   };

//   const handleSalaryRangeChange = (e) => {
//     setSalaryRange(e.target.value);
//   };

//   const handleFreshnessChange = (e) => {
//     setFreshness(e.target.value);
//   };

//   const handleExperienceRangeChange = (e) => {
//     // Ensure that the entered value is within the range of 0 to 30.
//     const value = e.target.value;
//     if (/^\d*$/.test(value) && value >= 0 && value <= 30) {
//       setExperienceRange(value);
//     }
//   };

//   return (
//     <FilterContainer>
//       <FilterHeading>Filters</FilterHeading>
//       <RadioFilter>
//         <RadioLabel>Work Mode:</RadioLabel>
//         <RadioInput
//           type="radio"
//           name="workMode"
//           value="WFO"
//           checked={workMode === 'WFO'}
//           onChange={handleWorkModeChange}
//         />
//         <span>WFO</span>
//         <RadioInput
//           type="radio"
//           name="workMode"
//           value="WFH"
//           checked={workMode === 'WFH'}
//           onChange={handleWorkModeChange}
//         />
//         <span>WFH</span>
//         <RadioInput
//           type="radio"
//           name="workMode"
//           value="hybrid"
//           checked={workMode === 'hybrid'}
//           onChange={handleWorkModeChange}
//         />
//         <span>Hybrid</span>
//       </RadioFilter>
//       <RadioFilter>
//         <RadioLabel>Salary Range:</RadioLabel>
//         <RadioInput
//           type="radio"
//           name="salaryRange"
//           value="0-3 lakhs"
//           checked={salaryRange === '0-3 lakhs'}
//           onChange={handleSalaryRangeChange}
//         />
//         <span>0-3 lakhs</span>
//         <RadioInput
//           type="radio"
//           name="salaryRange"
//           value="3-6 lakhs"
//           checked={salaryRange === '3-6 lakhs'}
//           onChange={handleSalaryRangeChange}
//         />
//         <span>3-6 lakhs</span>
//         <RadioInput
//           type="radio"
//           name="salaryRange"
//           value="6-10 lakhs"
//           checked={salaryRange === '6-10 lakhs'}
//           onChange={handleSalaryRangeChange}
//         />
//         <span>6-10 lakhs</span>
//         <RadioInput
//           type="radio"
//           name="salaryRange"
//           value="10+ lakhs"
//           checked={salaryRange === '10+ lakhs'}
//           onChange={handleSalaryRangeChange}
//         />
//         <span>10+ lakhs</span>
//       </RadioFilter>
//       <RadioFilter>
//         <RadioLabel>Freshness:</RadioLabel>
//         <RadioInput
//           type="radio"
//           name="freshness"
//           value="last-1-day"
//           checked={freshness === 'last-1-day'}
//           onChange={handleFreshnessChange}
//         />
//         <span>Last 1 day</span>
//         <RadioInput
//           type="radio"
//           name="freshness"
//           value="last-3-days"
//           checked={freshness === 'last-3-days'}
//           onChange={handleFreshnessChange}
//         />
//         <span>Last 3 days</span>
//         <RadioInput
//           type="radio"
//           name="freshness"
//           value="last-7-days"
//           checked={freshness === 'last-7-days'}
//           onChange={handleFreshnessChange}
//         />
//         <span>Last 7 days</span>
//         <RadioInput
//           type="radio"
//           name="freshness"
//           value="last-30-days"
//           checked={freshness === 'last-30-days'}
//           onChange={handleFreshnessChange}
//         />
//         <span>Last 30 days</span>
//         <RadioInput
//           type="radio"
//           name="freshness"
//           value="anytime"
//           checked={freshness === 'anytime'}
//           onChange={handleFreshnessChange}
//         />
//         <span>Anytime</span>
//       </RadioFilter>
//       <RangeInput
//         type="text"
//         placeholder="Experience Range (0-30)"
//         value={experienceRange}
//         onChange={handleExperienceRangeChange}
//       />
//     </FilterContainer>
//   );
// }

// export default ProfileFilter;


import React, { useState } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 15%;
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  padding: 1rem;
  background-color: #f9f9f9;
  margin-right: 3rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  


  .expBox {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const RadioFilter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
  width: 100%;

  p{
    font-weight: 800;
    text-align: flex-start;
    width: 100%;
}
`;

const RadioLabel = styled.label`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.8rem;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const RangeInput = styled.input`
display: flex;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  
`;

const FilterHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem; 
`;

function ProfileFilter() {
  const [workMode, setWorkMode] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [freshness, setFreshness] = useState('');

  const handleWorkModeChange = (e) => {
    setWorkMode(e.target.value);
  };

  const handleSalaryRangeChange = (e) => {
    setSalaryRange(e.target.value);
  };

  const handleFreshnessChange = (e) => {
    setFreshness(e.target.value);
  };

  // const handleExperienceRangeChange = (e) => {
    // Ensure that the entered value is within the range of 0 to 30.
    // const value = e.target.value;
  //   if (/^\d*$/.test(value) && value >= 0 && value <= 30) {
  //     setExperienceRange(value);
  //   }
  // };

  return (
    <FilterContainer>
      <FilterHeading>Filters</FilterHeading>
      <RadioFilter>
        <p>Work Mode</p>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="workMode"
            value="WFO"
            checked={workMode === 'WFO'}
            onChange={handleWorkModeChange}
          />
          WFO
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="workMode"
            value="WFH"
            checked={workMode === 'WFH'}
            onChange={handleWorkModeChange}
          />
          WFH
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="workMode"
            value="hybrid"
            checked={workMode === 'hybrid'}
            onChange={handleWorkModeChange}
          />
          Hybrid
        </RadioLabel>
      </RadioFilter>
      <RadioFilter>
      <p>Salary</p>

        <RadioLabel>
          <RadioInput
            type="radio"
            name="salaryRange"
            value="0-3 lakhs"
            checked={salaryRange === '0-3 lakhs'}
            onChange={handleSalaryRangeChange}
          />
          0-3 lakhs
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="salaryRange"
            value="3-6 lakhs"
            checked={salaryRange === '3-6 lakhs'}
            onChange={handleSalaryRangeChange}
          />
          3-6 lakhs
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="salaryRange"
            value="6-10 lakhs"
            checked={salaryRange === '6-10 lakhs'}
            onChange={handleSalaryRangeChange}
          />
          6-10 lakhs
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="salaryRange"
            value="10+ lakhs"
            checked={salaryRange === '10+ lakhs'}
            onChange={handleSalaryRangeChange}
          />
          10+ lakhs
        </RadioLabel>
      </RadioFilter>
      <RadioFilter>
      <p>Freshness</p>

        <RadioLabel>
          <RadioInput
            type="radio"
            name="freshness"
            value="last-1-day"
            checked={freshness === 'last-1-day'}
            onChange={handleFreshnessChange}
          />
          Last 1 day
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="freshness"
            value="last-3-days"
            checked={freshness === 'last-3-days'}
            onChange={handleFreshnessChange}
          />
          Last 3 days
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="freshness"
            value="last-7-days"
            checked={freshness === 'last-7-days'}
            onChange={handleFreshnessChange}
          />
          Last 7 days
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="freshness"
            value="last-30-days"
            checked={freshness === 'last-30-days'}
            onChange={handleFreshnessChange}
          />
          Last 30 days
        </RadioLabel>
        <RadioLabel>
          <RadioInput
            type="radio"
            name="freshness"
            value="anytime"
            checked={freshness === 'anytime'}
            onChange={handleFreshnessChange}
          />
          Anytime
        </RadioLabel>
        

      </RadioFilter>
      
    </FilterContainer>
  );
}

export default ProfileFilter;
