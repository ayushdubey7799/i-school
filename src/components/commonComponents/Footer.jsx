import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";
import facebook from '../../assets/facebook-50.png'
import insta from '../../assets/instagram-50.png'
import twitter from '../../assets/twitter-50.png'
import linkedin from '../../assets/linkedin-50.png'


const Footer = () => {
    return (
        <StyledFooter>
            <div className='child1'>
                <div className='grandChild footerDesc'>Introducing Intelliview, your personal platform to enhance interview skills through simulated mock interviews. Prepare for success, one practice session at a time.</div>
                <div className='grandChild hidden'>
                    <span className='grandChildTitle'>Information</span>
                    <StyledLink to="/">
                        <span className="link">Interviews</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="link">About Us</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="link">Contact Us</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="link">Support</span>
                    </StyledLink>
                </div>
                <div className='grandChild hidden'>
                    <span className='grandChildTitle'>Popular Industries</span>
                </div>
                <div className='grandChild hidden'>
                    <span className='grandChildTitle'>Popular Questions</span>
                </div>
            </div>

            <div className='child2'>
                <div>Copyright © 2023 Intelliview.</div>
                <div className='socialIcons'>
                    <img src={linkedin} />
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={insta} />
                </div>
                <div className='privacyComp'>
                    <StyledLink to="/">
                        <span className="linkR">Privacy Policy</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="linkR">Terms of Use</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="linkR">Disclaimer</span>
                    </StyledLink>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer


const StyledFooter = styled.div`
background-color: #1A1F26;
display: flex;
flex-direction: column;
width: 100%;
gap: 4rem;
color: var(--backgroundColor);

@media(max-width: 950px) {
    gap: 2rem;
}

.linkR {
    color: var(--backgroundColor);
}

.child1 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    width: 90%;
    margin-top: 4rem;
    margin-bottom: 2rem;
    margin-left: 5%;
    margin-right: 5%;
    column-gap: 2rem;

    @media(max-width: 950px){
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

.child2 {
    display: flex;
    // grid-template-columns: 2fr 1.4fr 1.8fr;
    margin: 2rem 5rem 4rem 5rem;
    column-gap: 2rem;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 950px){
        flex-direction: column;
        gap: 3rem;
    }
}

.grandChild {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
}

.grandChildTitle {
    font-weight: 600;
    font-size: 1.3rem
}

.socialIcons {
    display: flex;
    gap: 1rem;
}

.socialIcons > img {
    width: 2.4rem;
}

.footerDesc {
    line-height: 1.8rem;
    letter-spacing: 0.02rem;
    width: 80%;

    @media(max-width: 950px){
        grid-column: 1/5;
        width: 100%;
    }
}



.privacyComp {
    display: flex;
    gap: 1.5rem;
}

.linkR {
    font-weight: 600;
    font-size: 1.1rem;
}

.hidden {
    @media(max-width: 950px){
        display: none;
    }
}

`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: gray;
  font-size: 1.2rem;
`;



