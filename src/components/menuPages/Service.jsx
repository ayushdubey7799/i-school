import React from 'react'
import { styled } from 'styled-components'
import Header from '../LandingPage/Header'

const Service = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                Content Not Available
            </StyledContent>
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
gap: 2rem;

.mainTitle {
    font-weight: 900;
    font-size: 2rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 1.2rem;
    line-height: 1.7rem;
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
    gap: 0.7rem;
}
`



