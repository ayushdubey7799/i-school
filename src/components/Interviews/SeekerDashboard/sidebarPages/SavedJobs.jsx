import React, { useState } from 'react'
import styled from 'styled-components'
import ProfileFilter from '../seekerCommonComponents/ProfileFilter'
import JobSearchBar from './JobSearchBar'
import SavedJobsList from './SavedJobsList'


const SavedJobs = () => {
    const [exp, setExp] = useState();
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    return (
        <MainBox>
            <div className='mainBox'>
                <JobSearchBar exp={exp} setExp={setExp} selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} selectedSkills={selectedSkills} setSelectedSkills={setSelectedSkills} />
                <ProfileFilter />
            </div>
            <InnerBox>
                <SavedJobsList />
            </InnerBox>
        </MainBox>
    )
}

export default SavedJobs

const MainBox = styled.div`
padding-bottom: 4rem;
display: flex;
flex-direction: column;
width: 100%;


.mainBox {
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: 9fr 1fr;
}
`
const InnerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`