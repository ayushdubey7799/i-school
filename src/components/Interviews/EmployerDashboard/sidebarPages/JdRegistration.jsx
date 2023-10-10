import React, { useState } from 'react';
import styled from 'styled-components';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import EmployerDetails from '../EmployerDetails';
import JdDetails from '../../../../pages/JdDetails';
import JdForm from '../JdForm';
import { jds } from '../../../../utils/contantData';
import attachIcon from '../../../../assets/icons/attach.png'

const Container1 = styled.div`
  width:90%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;

const Component = styled.div`
  width: 100%;
  height: 16.66%; 
  border: 1px solid #ccc;
  padding: 2rem 1rem;;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  font-size: 0.8rem;

`;

const EditButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  font-size: 14px;
  margin-right: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const JdRegistration = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <Container1>
      <ModalHOC openNewInterviewModal={openBasic} setOpenNewInterviewModal={setOpenBasic} Component={JdForm} />
      <Component>
        <span>Add new Job Description</span>
        <EditButton onClick={() => setOpenBasic(true)}>Create</EditButton>
      </Component>

      <Main>
        <Container>
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

        }
      </Main>
    </Container1>
  );
};

export default JdRegistration;




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
