import React, { useState } from 'react'
import styled from 'styled-components'
import EmployerAgencyJdList from '../components/Interviews/EmployerAgency/EmployerAgencyJdList';
import EmployerAgencyCandidateList from '../components/Interviews/EmployerAgency/EmployerAgencyCandidateList';
import EmployerAgencySidebar from '../components/Interviews/EmployerAgency/EmployerAgencySidebar';
import EmployerAgencyHeader from '../components/Interviews/EmployerAgency/EmployerAgencyHeader';


const EmployerAgencyDashboard = () => {
    const [page, setPage] = useState(1);
    const [currentItem, setCurrentItem] = useState('dashboard');

    return (
        <Box>
            <EmployerAgencyHeader/>
            <StyledBox>
                <EmployerAgencySidebar currentItem={currentItem} setCurrentItem={setCurrentItem} />
                <MainContent>

                    {currentItem === 'dashboard' &&
                        <>
                            {page === 1 && <EmployerAgencyJdList setPage={setPage} />}
                            {page === 2 && <EmployerAgencyCandidateList page={page} setPage={setPage} />}
                        </>
                    }
                </MainContent>
            </StyledBox>
        </Box>
    )
}

export default EmployerAgencyDashboard

const Box = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
background-color: #f4f4f4;


`

const StyledBox = styled.div`
width: 100%;
display: flex;
height: calc(100% - 4rem);
margin-top: 4rem;
background-color: var(--white);
color: var(--color);
background-color: #f4f4f4;

`

const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 17rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f4f4f4;

`