import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook-50.png";
import insta from "../../assets/instagram-50.png";
import twitter from "../../assets/twitter-50.png";
import linkedin from "../../assets/linkedin-50.png";
import footerBg from "../../assets/footerBg.jpg";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="child2">
        <div className="grandChild hidden">
          <StyledLink to="/about">
            <span className="link">About Us</span>
          </StyledLink>
          <StyledLink to="/contact">
            <span className="link">Contact Us</span>
          </StyledLink>
          <StyledLink to="/support">
            <span className="link">Support</span>
          </StyledLink>
          <StyledLink to="/pricing">
            <span className="link">Pricing</span>
          </StyledLink>
          <StyledLink to="/case-studies">
            <span className="link">Case Studies</span>
          </StyledLink>
          <StyledLink to="/career">
            <span className="link">Careers</span>
          </StyledLink>
          <StyledLink to="/sales">
            <span className="link">Sales</span>
          </StyledLink>
        </div>
        <div className="grandChild hidden">
          <StyledLink to="/privacy">
            <span className="link link2">Privacy Policy</span>
          </StyledLink>
          <StyledLink to="/terms">
            <span className="link link2">Terms of Use</span>
          </StyledLink>
          <StyledLink to="/disclaimer">
            <span className="link link2">Disclaimer</span>
          </StyledLink>
        </div>
      </div>

      <div className="child1">
        <div className="socialIcons">
          <a href="/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="/">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="/">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="/">
            <img src={insta} alt="instagram" />
          </a>
        </div>
      </div>

      <div className="child3">
        {" "}
        <a href="https://miledge.in/" target="_blank">
          Copyright © 2023 Miledge Technologies LLP
        </a>
      </div>

      <div className="marquee-container">
        <div className="marquee-text">
          Disclaimer : The information on this website is provided for informational purposes only and does not constitute legal or professional advice. The company does not make any representations or warranties as to the accuracy, completeness, or timeliness of the information contained on this website. The company is not responsible for any errors or omissions in the information on this website, or for any damages arising from the use of the information on this website. This disclaimer is clear and concise, and it protects the company from any legal liability arising from the information on its website. It also states that the company reserves the right to make changes to the information on its website at any time without notice.
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  color: var(--white);
  background-image: url(${footerBg});
  background-size: cover;
  background-repeat: no-repeat;

  .child2 {
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 2rem;
    row-gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .child1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .child3 {
    margin-bottom: 0rem;
    font-size: 0.85rem;
  }

  .child3 a {
    text-decoration: none;
    color: var(--white);
  }

  .grandChild {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    align-items: center;
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
    font-size: 0.9rem;
  }

  .link2 {
    font-size: 0.8rem;
  }

  .link:hover {
    font-weight: 600;
  }

  .marquee-container {
    overflow: hidden;
    padding: 0 5% 1rem 5%;
  }

  .marquee-text {
    font-size: 0.5rem;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(204, 208, 219);
  font-size: 0.95rem;
`;
