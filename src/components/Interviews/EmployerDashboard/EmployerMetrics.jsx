import React, { useState } from 'react';
import styled from 'styled-components';
import metric1 from '../../../assets/icons/metric1.png'
import metric2 from '../../../assets/icons/metric2.2.png'
import metric3 from '../../../assets/icons/metric2.3.png'
import metric4 from '../../../assets/icons/metric2.4.png'
import RegisteredCandidates from './sidebarPages/RegisteredCandidates';
import InterviewDashboard from './sidebarPages/InterviewDashboard';
import ActiveJds from './sidebarPages/ActiveJds';

const MainContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0rem;
width: 90%;
padding: 0 5%;



`

const Container = styled.div`

display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 1rem 0% 2rem 0%;
gap: 2%;

.selected {
  background-color: #d9fbf9 !important;
}

.achievedNumberBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.7rem;
  background-color: var(--white);
  padding: 1rem 0 1.5rem 0;
  width: 23%;
  height: 6rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);

  .top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
}

.achievedNumberBox:hover {
  cursor: pointer;
}

.achievedNumberDigit {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color);
}

.achievedNumberText {
  font-size: 1rem;
    font-weight: 500;
    color: var(--color);
    text-align: center;
}

.hrLine {
  width: 100%;
  border-top: 0.1rem groove lightgrey;
  margin: -0.2rem 0 -0.9rem 0;
  box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
}




`;


const EmployeMetrics = () => {
  const [currMetric, setCurrMetric] = useState('interviews');


  return (
    <MainContainer>
      <Container>
        <div className={`achievedNumberBox ${currMetric === 'activeJDs' ? 'selected' : ''}`} onClick={() => setCurrMetric('activeJDs')} >
          <div className='top'>
            <img src={metric1} />
            <span className='achievedNumberDigit'>15</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Active JDs</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'applications' ? 'selected' : ''}`} onClick={() => setCurrMetric('applications')}>
          <div className='top'>
            <img src={metric2} />
            <span className='achievedNumberDigit'>30</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Applications</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'interviews' ? 'selected' : ''}`} onClick={() => setCurrMetric('interviews')}>
          <div className='top'>
            <img src={metric3} />
            <span className='achievedNumberDigit'>17</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Interviews</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'candidatesPool' ? 'selected' : ''}`} onClick={() => setCurrMetric('candidatesPool')}>
          <div className='top'>
            <img src={metric4} />
            <span className='achievedNumberDigit'>12</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Candidates Pool</span>
        </div>
      </Container>
      {currMetric === 'interviews' && <InterviewDashboard />}
      {currMetric === 'activeJDs' && <ActiveJds />}
      {currMetric === 'candidatesPool' && <RegisteredCandidates />}
    </MainContainer>
  );
};

export default EmployeMetrics;
