import React, { useState } from 'react'
import styled from 'styled-components'
import AgencyInterviewJdList from './AgencyInterviewJdList';
import AgencyInterviewCandidateList from './AgencyInterviewCandidateList';

const AgencyInterviewDashboard = () => {
    const [page, setPage] = useState(1);

    return (
        <Box>
            {page === 1 && <AgencyInterviewJdList setPage={setPage} />}
            {page === 2 && <AgencyInterviewCandidateList page={page} setPage={setPage} />}
        </Box>
    )
}

export default AgencyInterviewDashboard

const Box = styled.div`



`