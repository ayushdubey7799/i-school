import React from 'react'
import Header from './Header'
import Content from './Content'
import { styled } from 'styled-components'

const Home = () => {
  return (
    <StyledLanding>
     <Header />
     <Content/>
    </StyledLanding>
  )
}

export default Home

export const StyledLanding = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    color: rgb(27,30,38);
`