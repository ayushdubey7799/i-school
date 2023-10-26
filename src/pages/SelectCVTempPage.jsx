import React from 'react'
import styled from 'styled-components'
import resume1 from '../assets/resume/resume1.png'
import resume2 from '../assets/resume/resume2.png'
import resume3 from '../assets/resume/resume3.png'
import resume4 from '../assets/resume/resume4.png'
import resume5 from '../assets/resume/resume5.png'
import resume6 from '../assets/resume/resume6.png'
import resume7 from '../assets/resume/resume7.png'
import { useNavigate } from 'react-router'
import ResumeHeader from '../components/commonComponents/ResumeHeader'


const resumes = [resume1, resume2, resume3, resume4, resume5, resume6, resume7];


const CreateResumePage = () => {
  const navigate = useNavigate();


  return (
    <Box>
      <ResumeHeader />

      <div className='childBox'>
        {
          resumes.map((resume, index) => (
            <ChildBox onClick={() => navigate(`/create-resume/${index + 1}`)}>
              <img src={resume} />
              <button className='btn' onClick={() => navigate(`/create-resume/${index + 1}`)}>Use This Template</button>
            </ChildBox>
          ))
        }
      </div>
    </Box>
  )
}

export default CreateResumePage

const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;




.childBox {
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 6rem auto 2rem auto;
  gap: 1rem;
  justify-content: center;

}

`

const ChildBox = styled.div`
background-color: #EEF3F9;
display: flex;
justify-content: center;
align-items: center;
postion: relative;
cursor: pointer;
border-radius: 0.5rem;



img {
  width: 90%;
  height: 90%;
}

.btn {
  position: absolute;
  display: none;
  background-color: var(--lightOrange);
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  border-radius: 0.5rem;
  cursor: pointer;
}

&:hover .btn {
  display: block;
}

&:hover img {
  box-shadow: 0 0 0.5rem 0.2rem rgba(0, 0, 0, 0.1);
}

`
