import React from 'react'

import { styled } from 'styled-components'
import Header from '../components/LandingPage/Header'
import Content from '../components/LandingPage/Content'
import Footer from '../components/commonComponents/Footer'
import DetailedContent from '../components/LandingPage/DetailedContent'

const Home = () => {
    return (
        <StyledLanding>
            <StyledLandingTop>
                <Header />
                <Content />
                <DetailedContent />
            </StyledLandingTop>
            <Footer />
        </StyledLanding>
    )
}

export default Home

export const StyledLandingTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    color: var(--color);
    background-color: var(--backgroundColor);

`
export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    color: var(--color);
    background-color: var(--backgroundColor);
`

