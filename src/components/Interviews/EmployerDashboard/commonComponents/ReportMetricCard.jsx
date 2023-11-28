import React from 'react'
import styled from 'styled-components'

const ReportMetricCard = ({ metricText, metricNumber }) => {
    return (
        <Card>
            <span className='text'>{metricText}</span>
            <span className='number'>{metricNumber}</span>
        </Card>
    )
}

export default ReportMetricCard

const Card = styled.div`
background-color: var(--white);
display: flex;
flex-direction: column;
align-items: center;
padding: 1.5rem 0;
gap: 0.75rem;
border-radius: 0.5rem;
box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);

.text {
    font-size: 1rem;
    font-weight: 500;
}

.number {
    font-size: 1.5rem;
    font-weight: 600;
}


`