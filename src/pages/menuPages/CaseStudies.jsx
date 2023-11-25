import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/case1.jpg'
import img2 from '../../assets/VectorImg/case2.jpg'

const CaseStudies = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Case Studies</span>

                <div className='top'>
                    <span className='topText'>Unlocking Success Stories: AI-Powered Transformations with IntelliView</span>
                    <span className='topText'>At IntelliView, we believe in the power of data-driven decision-making. We're proud to showcase real-world case studies that demonstrate how our AI-based interview portal has revolutionized the hiring process for organizations and job seekers alike. Explore these success stories to see the tangible benefits of incorporating AI into your recruitment journey.</span>
                </div>

                <div className='mainBox'>
                    <div className='leftBox'>
                        <span className='title'>Case Study 1: IntelliView</span>
                        <span className='text'><b>Challenge:</b> IntelliView, a rapidly growing tech startup, faced the challenge of sifting through a high volume of job applications for technical roles. Traditional screening methods were time-consuming and often missed top talent.</span>
                        <span className='text'><b>Solution:</b> IntelliView's AI Interview Analysis tool was integrated into IntelliView's hiring process. It automatically analyzed video interviews, assessed candidates' technical skills, and provided detailed insights to hiring managers.</span>

                        <div className='contactBox'>
                            <span className='title'>Results:</span>
                            <span className='text'>Reduced time-to-hire by 40%.</span>
                            <span className='text'>Increased the quality of hires by identifying top  technical talent more accurately.</span>
                            <span className='text'>Improved candidate experience with faster feedback.</span>
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
                        <span className='title'>Case Study 2: HR Agency</span>
                        <span className='text'><b>Challenge:</b> HR Agency needed a solution to help their clients, various organizations, find the right candidates efficiently. Manual candidate screening was resource-intensive and prone to bias.</span>
                        <span className='text'><b>Solution:</b> IntelliView's AI-Enhanced Job Matching and Skill Assessment Modules were deployed for clients. These tools automatically matched candidates to job descriptions and assessed their skills, reducing the agency's workload.</span>

                        <div className='contactBox'>
                            <span className='title'>Results:</span>
                            <span className='text'>Boosted candidate placements by 25%.</span>
                            <span className='text'>Decreased time spent on manual candidate screening.</span>
                            <span className='text'>Improved the accuracy of candidate-job matches, leading to higher client satisfaction.</span>
                        </div>
                    </div>
                </div>


                <div className='caseBox'>
                    <span className='title title1'>Case Study 3: Job Seeker Story</span>
                    <span className='text'><b>Challenge:</b> Sarah, a recent graduate, struggled with interview anxiety and wanted to improve her chances of landing her dream job in marketing.</span>
                    <span className='text'><b>Solution:</b> Sarah used IntelliView's AI Interview Coaching service to practice and receive personalized feedback. The AI coach simulated real interviews and provided guidance on her responses and body language.</span>

                    <div className='contactBox'>
                        <span className='title title1'>Results:</span>
                        <span className='text'>Boosted Sarah's confidence in interviews.</span>
                        <span className='text'>Improved her interview performance, leading to multiple job offers.</span>
                        <span className='text'>Accelerated her career path with a position at a top marketing firm.</span>
                    </div>
                </div>


                <div className='caseBox'>
                    <span className='title title1'>Case Study 4: Large Corporation</span>
                    <span className='text'><b>Challenge:</b> A Fortune 500 company needed to enhance their diversity and inclusion efforts in hiring. They wanted to eliminate unconscious bias from their interview process.</span>
                    <span className='text'><b>Solution:</b> IntelliView's Diversity and Inclusion Insights tool was implemented to analyze their hiring data. It identified potential bias patterns and recommended adjustments to promote diversity.</span>

                    <div className='contactBox'>
                        <span className='title title1'>Results:</span>
                        <span className='text'>Increased diversity in their hires by 20%.</span>
                        <span className='text'>Enhanced the company's reputation as an inclusive employer.</span>
                        <span className='text'>Improved employee satisfaction and collaboration.</span>
                    </div>
                </div>

                <span className='text'>These case studies represent just a glimpse into the transformative power of IntelliView's AI-based interview portal. Whether you're an employer seeking top talent, an HR agency streamlining placements, or a job seeker aiming to ace interviews, our platform has the potential to drive success stories of your own.</span>
                <span className='text'>Ready to join the ranks of organizations and individuals who have embraced the future of hiring with AI? Explore IntelliView today and unlock your own success story!</span>

            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default CaseStudies


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
gap: 1rem;

.mainTitle {
    font-weight: 900;
    font-size: 1.3rem;
}


.contactBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}


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

.smallTitle {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}

.mainBox {
    display: flex;
    flex-direction: row;
    gap: 5%;
}

.part {
    margin-top: 2rem;
}

.leftBox {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.rightBox {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rightBox > img {
    width: 55%;
}

.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem 0rem 1rem 0rem;
}


.text {
    word-wrap: break-word;
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.caseBox {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.title1 {
    text-align: start;
}

.text1 {
    text-align: start;
}

`

