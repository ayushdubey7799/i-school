import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'

const IntelliBoard = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                IntelliBoard
            </StyledContent>
        </StyledPage>
    )
}

export default IntelliBoard

export const StyledPage = styled.div`
width: 100%;
background-color: var(--white);
color: black;
display: flex;
flex-direction: column;

`

export const StyledContent = styled.div`
margin-top: 10rem;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10%;
margin-right: 10%;

`


