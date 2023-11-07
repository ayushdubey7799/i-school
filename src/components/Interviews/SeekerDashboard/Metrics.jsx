import React, { useState } from 'react';
import styled from 'styled-components';
import metric1 from '../../../assets/icons/metric1.png'
import metric2 from '../../../assets/icons/metric2.png'
import metric3 from '../../../assets/icons/metric3.png'
import metric4 from '../../../assets/icons/metric4.png'
import { useNavigate } from 'react-router';
import RecommendedJobs from './sidebarPages/RecommendedJobs';
import JobApplication from './sidebarPages/JobApplication';
import InterviewTabs from '../InterviewTabs';

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
padding: 0rem 0% 0rem 0%;
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


const Metrics = () => {
  const [currMetric, setCurrMetric] = useState('interviewScheduled');

  return (
    <MainContainer>
      <Container>
        <div className={`achievedNumberBox ${currMetric === 'interviewScheduled' ? 'selected' : ''}`} onClick={() => setCurrMetric('interviewScheduled')}>
          <div className='top'>
            <img src={metric4} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Interview Scheduled</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'interviewCompleted' ? 'selected' : ''}`} onClick={() => setCurrMetric('interviewCompleted')}>
          <div className='top'>
            <img src={metric3} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Interviews Completed</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'recommendedJobs' ? 'selected' : ''}`} onClick={() => setCurrMetric('recommendedJobs')}>
          <div className='top'>
            <img src={metric1} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Recommended Jobs</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === 'appliedJobs' ? 'selected' : ''}`} onClick={() => setCurrMetric('appliedJobs')}>
          <div className='top'>
            <img src={metric2} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>Applied Jobs</span>
        </div>
      </Container>

      {currMetric === 'recommendedJobs' && <RecommendedJobs />}
      {currMetric === 'appliedJobs' && <JobApplication />}
      {currMetric === 'interviewCompleted' && <InterviewTabs />}
      {currMetric === 'interviewScheduled' && <InterviewTabs />}
    </MainContainer>
  );
};

export default Metrics;
