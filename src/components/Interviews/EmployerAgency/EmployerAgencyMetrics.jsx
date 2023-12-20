import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getStatusWiseCount } from '../../../functions/api/interview/getStatusWiseCount';
import { getJdsForMatching } from '../../../functions/api/employers/match/getJdsForMatching';
import { getProfiles } from '../../../functions/api/resume/getProfiles';
import EmployerAgencyCandidateList from './EmployerAgencyCandidateList';
import EmployerAgencyJdList from './EmployerAgencyJdList';
import scheduledInterviewImg from '../../../assets/icons/metric2.1.png'
import activeJdsImg from '../../../assets/icons/metric2.2.png'
import candidatePipelinesImg from '../../../assets/icons/metric2.4.png'


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
width: 98%;
justify-content: center;
align-items: center;
padding: 1rem 0% 2rem 0%;
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
  width: 22.5%;
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


const EmployerAgencyMetrics = ({ page, setPage }) => {
    const [currMetric, setCurrMetric] = useState('active-Jds');
    const [metrics, setMetrics] = useState([]);
    const [count, setCount] = useState(0);
    const [completed, setCompleted] = useState(0);
    const [scheduled, setScheduled] = useState(0);
    const [poolCount, setPoolCount] = useState(0);

    const accessToken = useSelector(state => state.auth.userData?.accessToken)
    const clientCode = useSelector(state => state.auth.userData?.clientCode)
    useEffect(() => {
        const getCount = async () => {
            const res = await getStatusWiseCount(accessToken);
            setMetrics(res?.data);
        }
        getCount();

        async function getData() {
            const res = await getJdsForMatching(accessToken, clientCode);
            if (res?.data?.data?.length) setCount(res?.data?.data.length);
        }
        getData();

        const getCandidates = async () => {
            const res = await getProfiles(accessToken, clientCode);
            if (res) {
                setPoolCount(res?.data?.data?.length);
            }
        }

        getCandidates();

    }, [currMetric])



    useEffect(() => {
        if (metrics.length) {
            setCompleted(metrics.find((item) => item.status == "COMPLETED")?.count);
            setScheduled(metrics.find((item) => item.status == "SCHEDULED")?.count)
        }
    }, [metrics])


    useEffect(() => {
        setPage({ index: 1, jdId: null });
    }, []);

    return (
        <MainContainer>
            <Container>
                <div className={`achievedNumberBox ${currMetric === 'active-Jds' ? 'selected' : ''}`} onClick={() => setCurrMetric('active-Jds')} >
                    <div className='top'>
                        <img src={activeJdsImg} />
                        <span className='achievedNumberDigit'>{count}</span>
                    </div>
                    <span className='hrLine'></span>
                    <span className='achievedNumberText'>Active JDs</span>
                </div>
                <div className={`achievedNumberBox ${currMetric === 'scheduled-interviews' ? 'selected' : ''}`} onClick={() => setCurrMetric('scheduled-interviews')}>
                    <div className='top'>
                        <img src={scheduledInterviewImg} />
                        <span className='achievedNumberDigit'>{scheduled ? scheduled : 0}</span>
                    </div>
                    <span className='hrLine'></span>
                    <span className='achievedNumberText'>Scheduled Interviews</span>
                </div>
                <div className={`achievedNumberBox ${currMetric === 'candidate-Pipelines' ? 'selected' : ''}`} onClick={() => setCurrMetric('candidate-Pipelines')}>
                    <div className='top'>
                        <img src={candidatePipelinesImg} />
                        <span className='achievedNumberDigit'>{poolCount}</span>
                    </div>
                    <span className='hrLine'></span>
                    <span className='achievedNumberText'>Candidate in Pipelines</span>
                </div>
            </Container>
            {currMetric === 'active-Jds' && <>{page?.index === 1 && <EmployerAgencyJdList page={page} setPage={setPage} />}  {page?.index === 2 && <EmployerAgencyCandidateList page={page} setPage={setPage} />}</>}
        </MainContainer>
    );
};

export default EmployerAgencyMetrics;
