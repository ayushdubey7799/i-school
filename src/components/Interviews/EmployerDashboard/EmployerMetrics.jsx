import React from 'react';
import styled from 'styled-components';
import jobs from '../../../assets/icons/recruitment.png'
import application from '../../../assets/icons/application.png'
import interview from '../../../assets/icons/interview.png'
import candidates from '../../../assets/icons/candidate.png'

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
  gap: 2rem;
  background-color: var(--white);
  padding: 1rem 0 1.5rem 0;
  width: 23%;
  height: 7rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.5);
}

.achievedNumberDigit {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--color);
}

.achievedNumberText {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color);
  text-align: center;
}

.box1 {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
}

.cardImg {
  width: 2.5rem;
  height: 2.5rem;
}

`;

const Square = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
  width: 20%;
  border-radius: 1rem;
  font-size: 0.8rem;
  box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.5)
`;

const Content = styled.div`
  text-align: center;
`;

const EmployeMetrics = () => {
  return (
    <Container>
      <div className='achievedNumberBox'>
        <div className='box1'>
          <span className='achievedNumberDigit'>15</span>
          <img src={jobs} className='cardImg' />
        </div>
        <span className='achievedNumberText'>Active Reqs</span>
      </div>
      <div className='achievedNumberBox'>
      <div className='box1'>
        <span className='achievedNumberDigit'>30</span>
        <img src={application} className='cardImg'/>
        </div>
        <span className='achievedNumberText'>Applications</span>
      </div>
      <div className='achievedNumberBox'>
      <div className='box1'>
        <span className='achievedNumberDigit'>17</span>
        <img src={interview} className='cardImg'/>
        </div>
        <span className='achievedNumberText'>Interviews</span>
      </div>
      <div className='achievedNumberBox'>
      <div className='box1'>
        <span className='achievedNumberDigit'>12</span>
        <img src={candidates} className='cardImg'/>
        </div>
        <span className='achievedNumberText'>Registered Candidates</span>
      </div>
    </Container>
  );
};

export default EmployeMetrics;
