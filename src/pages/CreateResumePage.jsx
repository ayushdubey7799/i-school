import React from 'react'
import styled from 'styled-components'
import Resume1 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume1'
import Resume2 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume2'
import Resume3 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume3'
import Resume4 from '../components/Interviews/SeekerDashboard/resumeTemplates/Resume4'

const CreateResumePage = () => {
  return (
    <Box>
      <div className='box1'>
      <Resume1/>
      <Resume2/>
      </div>
      <div className='box2'>
      <Resume3/>
      <Resume4/>
      </div>
      
    </Box>
  )
}

export default CreateResumePage

const Box = styled.div`
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr;
margin: 2rem auto;


`