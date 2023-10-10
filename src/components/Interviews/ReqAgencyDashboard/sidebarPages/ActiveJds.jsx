import React from "react";
import styled from "styled-components";
import attachIcon from '../../../../assets/icons/attach.png'





const ActiveJds = () => {

  return (
    <Main>
        Active JDs
      {/* <Container>
        <p>JD-ID: 1 Test-ID: 1a</p>
        <p>As an AI/Machine Learning Engineer, you'll design and implement machine learning algorithms and models. You'll work on data analysis, training models, and deploying AI solutions for various applications,
        </p>
      </Container>
      {
        jds.map((item) => {
          return <Container>
            <p>JD-ID: {item.id}<span><img src={attachIcon} className="attachIcon" /></span></p>
            <p>{item.jobDescription}</p>
          </Container>;
        })

      } */}
    </Main>
  );
};

export default ActiveJds;


const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  border-radius: 1rem;
  justify-content: space-evenly;

  .attachIcon{
    width: 1.2rem;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

const Main = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  gap: 2rem;
  padding-bottom: 3rem;
`;
