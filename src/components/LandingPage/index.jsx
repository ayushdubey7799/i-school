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

