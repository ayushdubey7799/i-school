import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import Resume1 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume1'
import Resume2 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume2'
import Resume3 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume3'
import Resume4 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume4'
import Resume5 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume5'
import Resume6 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume6'
import Resume7 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume7'
import CreateResumeLeftBox from '../components/Interviews/SeekerDashboard/resumeTemplates/CreateResumeLeftBox';

const CreateResumePage = () => {
    const { resumeId } = useParams();

    console.log('ResumeId', resumeId);

    return (
        <Box>
            <div className='box1'>
                <CreateResumeLeftBox />
            </div>
            <div className='box2'>

                <ResumeBox>
                    {resumeId === '1' && <Resume1 />}
                    {resumeId === '2' && <Resume2 />}
                    {resumeId === '3' && <Resume3 />}
                    {resumeId === '4' && <Resume4 />}
                    {resumeId === '5' && <Resume5 />}
                    {resumeId === '6' && <Resume6 />}
                    {resumeId === '7' && <Resume7 />}
                </ResumeBox>
            </div>
        </Box>
    )
}

export default CreateResumePage

const Box = styled.div`
width: 100%;
display: flex;




.box1 {
    width: 50%;
}

.box2 {
    width: 50%;
    height: 100vh;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    left: 50%;
    position: fixed;
}

`

const ResumeBox = styled.div`
margin: 1rem 5%;
height: 95%;
overflow-y: auto;
border-radius: 0.5rem;

& {
    scrollbar-width: none;
  }  

  &::-webkit-scrollbar {
    width: 0rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`
