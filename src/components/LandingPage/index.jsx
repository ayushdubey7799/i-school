import React from 'react'
import Header from './Header'
import Content from './Content'
import { styled } from 'styled-components'
import Footer from '../commonComponents/Footer'

const Home = () => {
  return (
    <StyledLanding>
      <StyledLandingTop>
        <Header />
        <Content />
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
    width: 90%;
    margin: 0 auto;
    color: var(--color);
    background-color: var(--backgroundColor);

    @media (max-width: 2000px){
      width: 70%;
    }

    @media (max-width: 1600px){
      width: 75%;
    }

    @media (max-width: 1475px){
      width: 80%;
    }

    @media (max-width: 1375px){
      width: 85%;
    }

    @media (max-width: 1280px){
      width: 90%;
    }    
`
export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    color: var(--color);
    background-color: var(--backgroundColor);
`

