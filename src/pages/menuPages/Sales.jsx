import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import img1 from '../../assets/VectorImg/sales.jpg'
import img2 from '../../assets/VectorImg/career1.jpg'
import img3 from '../../assets/VectorImg/career2.jpg'
import { useNavigate } from 'react-router'
import bg1 from '../../assets/bg5.jpg'

const Sales = () => {
    const navigate = useNavigate();

    return (
        <StyledBox>
            <Header />
            <StyledContent>

                <div className='top'>
                    <span className='topTitle'>Revolutionize Your Hiring with IntelliView: AI-Based Recruitment Solutions</span>
                    <span className='topText'>Welcome to IntelliView, your gateway to the future of recruitment. In today's dynamic job market, staying ahead of the competition requires innovation, efficiency, and precision. With market trends shifting towards intelligent, data-driven recruitment, IntelliView offers AI-based solutions designed to transform your hiring process. Let's explore how IntelliView can help your organization thrive in this evolving landscape.</span>
                </div>

                <span className='smallTitle'>Market Trends</span>

                <div className='mainBox'>

                    <div className='leftBox'>
                        <span className='smallTitle'>The Rise of AI in Recruitment</span>

                        <div className='card'>
                            <span className='cardText'>The recruitment industry has witnessed a substantial shift towards AI adoption. According to a recent report by [Industry Insights], 72% of organizations now use AI in their recruitment process. This trend underscores the increasing recognition of AI's ability to streamline hiring and enhance decision-making.</span>
                        </div>
                    </div>

                    <div className='rightBox'>
                        <img src={img1} />
                    </div>

                </div>

                <div className='mainBox'>

                    <div className='rightBox'>
                        <img src={img2} />
                    </div>

                    <div className='leftBox'>
                        <span className='smallTitle'>Data-Driven Decision-Making</span>

                        <div className='card'>
                            <span className='cardText'>Data is the new currency in recruitment. Companies are increasingly leveraging AI to analyze vast volumes of candidate data, job market insights, and internal performance metrics to make informed hiring decisions. This data-driven approach not only reduces recruitment costs but also results in better-quality hires.</span>
                        </div>
                    </div>

                </div>

                <div className='mainBox'>

                    <div className='leftBox'>
                        <span className='smallTitle'>Enhanced Candidate Experience</span>

                        <div className='card'>
                            <span className='cardText'>Today's job seekers expect a seamless and personalized recruitment experience. AI-driven chatbots, virtual assistants, and automated communication tools, as offered by IntelliView, are becoming essential for creating a positive candidate journey. According to [Candidate Experience Benchmark Report], 80% of candidates agree that a positive experience would make them more likely to refer others to a company.</span>
                        </div>
                    </div>

                    <div className='rightBox'>
                        <img src={img3} />
                    </div>

                </div>


                <span className='smallTitle part'>Our AI-Based Recruitment Solutions</span>

                <div className='cardBox2'>
                    <div className='card2'>
                        <span className='cardTitle2'>Resume Screening and Matching</span>
                        <span className='cardText2'>IntelliView's AI-powered resume screening and matching tools use natural language processing (NLP) and machine learning to swiftly analyze resumes and match them to job requirements. This dramatically reduces time-to-hire and ensures that you connect with the most qualified candidates.</span>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Bias Reduction and Diversity Promotion</span>
                        <span className='cardText2'>Our AI algorithms are designed to mitigate unconscious bias in hiring. We focus solely on candidate qualifications, skills, and experience, promoting diversity and inclusion within your organization.</span>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Predictive Analytics</span>
                        <span className='cardText2'>Harness the power of data with IntelliView's predictive analytics. Our tools can identify top-performing candidates, forecast turnover rates, and recommend strategies for talent retention, helping you build a stronger, more resilient workforce.</span>
                    </div>
                </div>


                <span className='smallTitle1 part'>Why Choose IntelliView</span>

                <div className='cardBox1'>
                    <span className='card1'>
                        <b>Proven Success: </b>
                        Our clients have experienced a 40% reduction in time-to-hire and a 30% increase in the quality of hires since implementing IntelliView.
                    </span>
                    <span className='card1'>
                        <b>Scalability: </b>
                        Whether you're a small startup or a global enterprise, our solutions can scale to meet your hiring needs.
                    </span>
                    <span className='card1'>
                        <b>Personalized Support: </b>
                        IntelliView offers dedicated support and regular updates to ensure you get the most out of our AI-based recruitment solutions.
                    </span>
                </div>

                <span className='smallTitle contact' onClick={() => navigate('/contact')}>Contact Us</span>

                <span className='text'>As market trends evolve, embracing AI in recruitment is no longer an option but a necessity. IntelliView empowers you to make data-driven decisions, reduce bias, and create a superior candidate experience. Join the ranks of industry leaders who have already harnessed the power of AI in recruitment. Revolutionize your hiring process with IntelliView and stay ahead in the competitive world of talent acquisition. Your future success begins here.</span>

                <span className='smallTitle'>Contact us by emailing <a className="link" href="mailto:sales@intelliview.in"
                    target="_blank"
                    rel="noreferrer">sales@intelliview.in</a></span>

            </StyledContent>
            <Footer />
        </StyledBox>
    )
}

export default Sales


const StyledBox = styled.div`
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


.top {
    background-image: url(${bg1});
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--white);
    padding: 3rem 5%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 1rem;
    align-items: center;
}

.topTitle {
    font-size: 1.8rem;
    font-weight: 600;
    word-wrap: break-word;
    line-height: 2.3rem;
    text-align: center;
}

.topText {
    font-size: 1.1rem;
    text-align: center;
}

.mainTitle {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color);
    padding: 1rem 0%;
}


.smallTitle {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1rem;
    text-align: center;
    color: var(--grey);
}

.smallTitle1 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--grey);
}

.cardBox1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
}

b {
    color: var(--color);
    font-weight: 500;
}


.mainBox {
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
}

.part {
    margin-top: 2rem;
}

.leftBox {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.rightBox {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: start;

}

.rightBox > img {
    width: 55%;
}


.card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--color);
}


.cardText {
    font-size: 1rem;
    line-height: 1.5rem;
}


.cardBox2 {
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    row-gap: 2rem;
    background: linear-gradient(to top, #99C6FF, var(--lightOrange));
    color: white;
    padding: 2rem 5%;
    border-radius: 1rem;
    justify-content: center;
}

.card2 {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.cardTitle2 {
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
}

.cardText2 {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
}

.text {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    text-align: center;
}

.jobBox {
    display: flex;
    flex-flow: row wrap;
    gap: 5%;
    padding: 1rem 5%;
    justify-content: center;
    margin: 1rem 0;
}

.jobCard {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--lightOrange);
    padding: 2rem 1%;
    border-radius: 1rem;
}

.jobTitle {
    font-weight: 1.2rem;
    font-weight: 600;
    padding: 1rem 0rem 2rem 0rem;
    color: var(--white);
}

.jobBtn {
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    background-color: var(--white);
    color: var(--lightOrange);
    font-weight: 600;
    cursor: pointer;
}


.contact {
    cursor: pointer;
    font-weight: 600;
}

.contact:hover {
    color: var(--lightOrange);
}

.link {
    color: var(--lightOrange);
    text-decoration: none;

}

.link:hover {
    text-decoration: underline;
}

`


