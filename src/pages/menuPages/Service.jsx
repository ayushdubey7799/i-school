import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';

const Service = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className="mainTitle">Services</span>

                <span className='text'>1. AI Powered Interview for Employers and Candidates</span>
                <span className='text'>2. AI Backed Sourcing for Employers and Consuilting Firms</span>
                <span className='text'>3. JD, Resume builder powered by AI</span>
                <span className='text'>4. Real Time Interview Services</span>
                <span className='text'>5. Extensive Reporting for indepth view of your applicants</span>
                <span className='text'>6. Application Tracking System for employer and candidates</span>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Service


export const StyledPage = styled.div`
width: 100%;
background-color: var(--white);
color: black;
display: flex;
flex-direction: column;

`

export const StyledContent = styled.div`
margin-top: 7rem;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
margin-left: 10%;
margin-right: 10%;
gap: 1rem;

@media (max-width: 700px) {
    margin-bottom: 15rem;
}

@media (max-width: 500px) {
    margin-bottom: 34rem;
}

.mainTitle {
    font-weight: 900;
    font-size: 1.3rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.3rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 0.8rem;
    line-height: 1.1rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.contactBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.researchBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
`

