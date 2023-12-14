import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecommendedJobs from './sidebarPages/RecommendedJobsList';
import { getStatusWiseCount } from '../../../functions/api/interview/getStatusWiseCount';
import { useSelector } from 'react-redux';

import { seekerMetric1 } from '../../../utils/contantData';
import { seekerMetric2 } from '../../../utils/contantData';
import { seekerMetric3 } from '../../../utils/contantData';
import { seekerMetric4 } from '../../../utils/contantData';

import { getInterviewByStatus } from '../../../functions/api/getInterviewByStatus';
import InterviewList from '../InterviewList';
import ScheduledInterviewList from '../ScheduledInterviewList';
import AppliedJobs from './sidebarPages/AppliedJobs';


const MainContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 0rem;
width: 96%;
padding: 0 2%;



`

const Container = styled.div`
display: flex;
flex-direction: row;
width: 95%;
justify-content: space-between;
align-items: center;
padding: 0rem 0% 0rem 0%;
gap: 2%;


.selected {
  background: linear-gradient(to bottom, #f0f0f0, #d9fbf9);
}

  .achievedNumberBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1.7rem;
    background-color: var(--white);
    padding: 1rem 0 1.5rem 0;
    width: 22%;
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
    font-size: 0.9rem;
    font-weight: 600;
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
  const [metrics, setMetrics] = useState([]);
  const [scheduled, setScheduled] = useState(0);
  const [completed, setCompleted] = useState(0);

  const accessToken = useSelector(state => state.auth.userData?.accessToken)
  const [filteredData, setFilteredData] = useState({});
  const [value, setValue] = useState("COMPLETED");

  useEffect(() => {
    const getCount = async () => {
      const res = await getStatusWiseCount(accessToken);
      setMetrics(res?.data);
    }
    getCount();
  }, [currMetric])

  useEffect(() => {
    if (metrics?.length) {
      setCompleted(metrics?.find((item) => item.status == "COMPLETED")?.count);
      setScheduled(metrics?.find((item) => item.status == "SCHEDULED")?.count)
    }
  }, [metrics])

  useEffect(() => {
    async function getData(value) {
      const response = await getInterviewByStatus(value, accessToken);
      if (response) {
        setFilteredData(response);
      }
    }
    getData(value);
  }, [value]);

  return (
    <MainContainer>
      <Container>
        <div className={`achievedNumberBox ${currMetric === seekerMetric1.text ? 'selected' : ''}`} onClick={() => setCurrMetric(seekerMetric1.text)}>
          <div className='top'>
            <img src={seekerMetric1.img} />
            <span className='achievedNumberDigit'>{scheduled ? scheduled : 0}</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>{seekerMetric1.title}</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === seekerMetric2.text ? 'selected' : ''}`} onClick={() => setCurrMetric(seekerMetric2.text)}>
          <div className='top'>
            <img src={seekerMetric2.img} />
            <span className='achievedNumberDigit'>{completed ? completed : 0}</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>{seekerMetric2.title}</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === seekerMetric3.text ? 'selected' : ''}`} onClick={() => setCurrMetric(seekerMetric3.text)}>
          <div className='top'>
            <img src={seekerMetric3.img} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>{seekerMetric3.title}</span>
        </div>
        <div className={`achievedNumberBox ${currMetric === seekerMetric4.text ? 'selected' : ''}`} onClick={() => setCurrMetric(seekerMetric4.text)}>
          <div className='top'>
            <img src={seekerMetric4.img} />
            <span className='achievedNumberDigit'>0</span>
          </div>
          <span className='hrLine'></span>
          <span className='achievedNumberText'>{seekerMetric4.title}</span>
        </div>
      </Container>

      {currMetric === 'recommendedJobs' && <RecommendedJobs />}
      {currMetric === 'appliedJobs' && <AppliedJobs />}
      {currMetric === 'interviewCompleted' && <InterviewList filteredData={filteredData} />}
      {currMetric === 'interviewScheduled' && <ScheduledInterviewList />}
    </MainContainer>
  );
};

export default Metrics;
