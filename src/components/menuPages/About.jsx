import React from 'react'
import { styled } from 'styled-components'
import Header from '../LandingPage/Header';
import Footer from '../commonComponents/Footer';

const About = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>About Us</span>

                <span className='text'>Welcome to IntelliView, your go-to platform for revolutionizing the interview process through cutting-edge AI technology. Our mission is to empower job seekers and employers alike with innovative tools that streamline the hiring process, ensuring a perfect match every time.</span>
                <span className='text'>At IntelliView, we understand the challenges that both candidates and employers face in the traditional interview process. Candidates often struggle to stand out from the crowd and showcase their true potential, while employers grapple with time-consuming, resource-intensive hiring decisions. That's where we come in.</span>
                <span className='text'>Our AI-based interview platform leverages the latest advancements in artificial intelligence and machine learning to create a seamless, efficient, and effective interview experience. We're here to level the playing field, giving candidates the opportunity to shine and employers the ability to make data-driven, informed hiring decisions.</span>

                <span className='title'>Here's what sets us apart</span>

                <span className='text'>1. <b>AI-Powered Interviews</b>: Say goodbye to traditional interviews. Our AI-driven system evaluates candidates based on their skills, experience, and cultural fit, providing objective assessments to guide your hiring decisions.</span>
                <span className='text'>2. <b>Efficiency</b>: Save time and resources by automating repetitive tasks, such as resume screening and initial candidate assessments. Our platform allows you to focus on what truly matters - finding the perfect candidate.</span>
                <span className='text'>3. <b>Unbiased Evaluations</b>: Eliminate unconscious bias from the hiring process. Our AI algorithms assess candidates purely on their qualifications and abilities, promoting diversity and inclusion.</span>
                <span className='text'>4. <b>Data-Driven Insights</b>: Access comprehensive analytics and reports to gain valuable insights into your hiring process. Use data to make informed decisions and continually improve your recruitment strategies.</span>
                <span className='text'>5. <b>Seamless Integration</b>: Our platform easily integrates with your existing applicant tracking system (ATS) or workflow, ensuring a smooth transition to AI-driven hiring.</span>

                <span className='text'>Whether you're a job seeker looking for your dream position or an employer seeking top talent, IntelliView is here to make the interview process more efficient, effective, and fair for everyone involved.</span>

                <span className='text'>Join us on the journey to a brighter, more innovative future of hiring. Explore our platform today and experience the future of interviews with AI at your side.</span>
            </StyledContent>
            <Footer/>
        </StyledPage>
    )
}

export default About;

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
    font-size: 1.5rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.7rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

` 

