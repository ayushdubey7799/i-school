import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';

const Products = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Products</span>

                <span className='title'>Introducing IntelliView: Your Gateway to Smarter Hiring Unlock the Power of AI in Your Recruitment Process!</span>
                <span className='text'>At IntelliView, we've harnessed the potential of artificial intelligence to create a suite of game-changing products that will revolutionize the way you conduct interviews and make hiring decisions. Our innovative solutions are designed to simplify, enhance, and optimize your recruitment journey, ensuring you find the best-fit candidates quickly and efficiently.</span>

                <span className='title'>Discover our cutting-edge AI-powered products:</span>
                <span className='text'><b>1. AI Interview Scheduler</b>: Say goodbye to scheduling headaches! Our AI Interview Scheduler eliminates the back-and-forth coordination, allowing you to seamlessly schedule interviews with candidates. It integrates with your calendar, optimizes time slots, and sends automatic reminders, ensuring interviews happen on time, every time.</span>
                <span className='text'><b>2. Virtual Interview Platform</b>: Conduct interviews from anywhere, at any time. Our Virtual Interview Platform offers a user-friendly interface for video interviews, complete with automated recording and transcription. It's a one-stop solution for remote interviewing, making it easy to collaborate with your team and evaluate candidates effectively.</span>
                <span className='text'><b>3. AI Interview Analysis</b>: Make data-driven hiring decisions. Our AI Interview Analysis tool assesses candidate responses, body language, and sentiment during interviews, providing you with valuable insights into a candidate's suitability for the role. It's like having an expert interviewer by your side, helping you identify top talent.</span>
                <span className='text'><b>4. Skill Assessment Modules</b>: Test skills, not just resumes. Our Skill Assessment Modules use AI to create customized tests tailored to your job requirements. Evaluate candidates' technical and soft skills objectively, ensuring you hire individuals who can excel in your organization.</span>
                <span className='text'><b>5. Candidate Ranking Algorithm</b>: Simplify candidate selection. Our Candidate Ranking Algorithm uses AI to analyze candidate profiles and interview performance, providing you with a ranked list of top candidates. Say goodbye to time-consuming manual evaluations and hello to an efficient shortlisting process.</span>
                <span className='text'><b>6. Diversity and Inclusion Insights</b>: Promote diversity in your workforce. Our AI-based diversity and inclusion analysis tool helps you identify potential biases in your hiring process. It provides actionable recommendations to create a more inclusive workplace.</span>
                <span className='text'><b>7. Interview Feedback Collector</b>: Streamline feedback collection. Our Interview Feedback Collector gathers input from interviewers in one central location. Analyze feedback easily to make collaborative hiring decisions.</span>

                <span className='text'>Join the future of hiring with IntelliView. Our AI-based products are designed to save you time, reduce bias, and elevate your recruitment process. Whether you're a small business, a large corporation, or a talent acquisition professional, our products are tailored to meet your unique needs.</span>
                <span className='text'>Experience the transformational power of AI in recruitment. Elevate your hiring process with IntelliView today!</span>
            </StyledContent>
            <Footer/>
        </StyledPage>
    )
}

export default Products;

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

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.3rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 0.8rem;
    line-height: 1.1rem;
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
    gap: 0.5rem;
}
`

