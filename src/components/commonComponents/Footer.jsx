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
                <div className='socialIcons'>
                    <a href='/'><img src={linkedin} alt='linkedin' /></a>
                    <a href='/'><img src={facebook} alt='facebook' /></a>
                    <a href='/'><img src={twitter} alt='twitter' /></a>
                    <a href='/'><img src={insta} alt='instagram' /></a>
                </div>
            </div>

            <div className='child2'>
                <div className='grandChild hidden'>
                    <span className='grandChildTitle'>Company</span>
                    <StyledLink to="/about">
                        <span className="link">About Us</span>
                    </StyledLink>
                    <a className="link" href="mailto:care@intelliview.in"
                        target="_blank"
                        rel="noreferrer">Contact Us</a>
                    <StyledLink to="/support">
                        <span className="link">Support</span>
                    </StyledLink>
                    <StyledLink to="/">
                        <span className="link">Careers</span>
                    </StyledLink>
                    <a className="link" href="mailto:sales@intelliview.in"
                        target="_blank"
                        rel="noreferrer">Sales</a>
                </div>
                <div className='grandChild hidden'>
                    <span className='grandChildTitle'>Legal</span>
                    <StyledLink to="/privacy">
                        <span className="link">Privacy Policy</span>
                    </StyledLink>
                    <StyledLink to="/terms">
                        <span className="link">Terms of Use</span>
                    </StyledLink>
                    <StyledLink to="/disclaimer">
                        <span className="link">Disclaimer</span>
                    </StyledLink>
                </div>
            </div>

            <div className='child3'>Copyright © 2023 Intelliview.</div>
        </StyledFooter>
    )
}

export default Footer


const StyledFooter = styled.div`
background-color: #3d3342;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
gap: 2rem;
color: var(--white);

.child2 {
    display: flex;
    margin-left: 5%;
    margin-right: 5%;
    column-gap: 8rem;
    justify-content: center;
}

.child1 {
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: space-between;
}

.child3 {
    margin-bottom: 2rem;
}

.grandChild {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    align-items: flex-start;
}

.grandChildTitle {
    font-weight: 600;
    font-size: 1.2rem
}

.socialIcons {
    display: flex;
    gap: 1rem;
}

.socialIcons > a > img {
    width: 2.5rem;
    cursor: pointer;
}

.link {
    text-decoration: none;
    color: rgb(204, 208, 219);
    font-size: 0.95rem;
}

.link:hover {
    font-weight: 600;
}

`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(204, 208, 219);
  font-size: 0.95rem;
`;



