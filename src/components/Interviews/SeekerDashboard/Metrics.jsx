import React from 'react';
import styled from 'styled-components';
import metric1 from '../../../assets/icons/metric1.png'
import metric2 from '../../../assets/icons/metric2.png'
import metric3 from '../../../assets/icons/metric3.png'
import metric4 from '../../../assets/icons/metric4.png'
import { useNavigate } from 'react-router';

const Container = styled.div`

  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 5% 2rem 5%;
  gap: 2%;


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
    width: 75%;
    border-top: 0.1rem solid grey;
    margin: -0.7rem 0 -0.9rem 0;
  }

`;


const Metrics = ({ setCurrentItem }) => {


  return (
    <Container>
      <div className='achievedNumberBox' onClick={() => setCurrentItem('recommended-jobs')}>
        <div className='top'>
          <img src={metric1} />
          <span className='achievedNumberDigit'>15</span>
        </div>
        <span className='hrLine'></span>
        <span className='achievedNumberText'>Recommended Jobs</span>
      </div>
      <div className='achievedNumberBox' onClick={() => setCurrentItem('applied-jobs')}>
        <div className='top'>
          <img src={metric2} />
          <span className='achievedNumberDigit'>30</span>
        </div>
        <span className='hrLine'></span>
        <span className='achievedNumberText'>Applied Jobs</span>
      </div>
      <div className='achievedNumberBox' onClick={() => setCurrentItem('interviewDash')}>
        <div className='top'>
          <img src={metric3} />
          <span className='achievedNumberDigit'>12</span>
        </div>
        <span className='hrLine'></span>
        <span className='achievedNumberText'>Interviews Completed</span>
      </div>
      <div className='achievedNumberBox' onClick={() => setCurrentItem('interviewDash')}>
        <div className='top'>
          <img src={metric4} />
          <span className='achievedNumberDigit'>5</span>
        </div>
        <span className='hrLine'></span>
        <span className='achievedNumberText'>Interview Scheduled</span>
      </div>
    </Container>
  );
};

export default Metrics;
