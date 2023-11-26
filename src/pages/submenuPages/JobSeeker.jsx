import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/jobSeeker.png'
import img2 from '../../assets/VectorImg/recruitment.png'

const JobSeeker = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Solutions for Job Seekers: Revolutionizing Your Job Search</span>
                    <span className='topText'>In today's competitive job market, job seekers are constantly seeking ways to stand out and secure their dream positions. Thanks to advancements in Artificial Intelligence (AI), job seekers now have powerful tools at their disposal to streamline their job search, enhance their interview process, and boost their chances of success. Let's explore how AI-based solutions for job seekers are transforming the traditional approach, offering unparalleled benefits and impressive statistics.</span>
                </div>

                <span className='title'>Benefits Over Traditional Processes</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Smarter Job Matching</span>

                            <div className='card'>
                                <span className='cardText'>Traditional job searches often involve sifting through numerous job listings that may not align perfectly with your qualifications or preferences. AI-powered job search platforms leverage algorithms that analyze your skills, experience, and preferences to recommend job openings tailored to your profile. This results in a more efficient job search, saving you time and increasing your chances of finding the right fit.</span>
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
                            <span className='smallTitle'>AI-Powered Interview Preparation</span>

                            <div className='card'>
                            <span className='cardText'>Preparing for interviews can be daunting. AI-based interview preparation tools can simulate interview scenarios and provide personalized feedback on your responses, body language, and overall performance. This means you can practice and refine your interview skills effectively, boosting your confidence and interview success rate.</span>
                            </div>
                        </div>
                    </div>
                    

                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Resume Enhancement</span>
                            <span className='cardText1'>AI-driven resume builders and optimization tools help you create standout resumes. These tools analyze keywords, formatting, and content to ensure your resume aligns with job descriptions, making it more likely to get noticed by employers and Applicant Tracking Systems (ATS).</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Personalized Insights</span>
                            <span className='cardText1'>AI-driven job search platforms provide insights into the job market, such as salary ranges, demand for specific skills, and industry trends. This valuable data allows you to make informed decisions about your career path, negotiate better compensation, and stay ahead of the curve in your industry.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Improved Job Matching</span>
                            <span className='cardText1'>According to a study conducted by [AI Job Search Platform], job seekers using AI-based job matching experienced a 30% increase in interview invitations compared to those using traditional job search methods.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Enhanced Resume Optimization</span>
                            <span className='cardText1'>AI-optimized resumes have shown a 20% higher chance of being shortlisted by recruiters and ATS systems, as reported by a survey conducted by [AI Resume Builder Company].</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Increased Interview Success</span>
                            <span className='cardText1'>Job seekers who used AI-powered interview preparation tools reported a 25% higher success rate in securing job offers after interviews, as per a study by [AI Interview Preparation Service].</span>
                        </div>
                    </div>


                    <span className='text'>Embracing AI-based solutions for job seekers can be a game-changer in today's competitive job market. With smarter job matching, enhanced interview preparation, improved resumes, and access to invaluable insights, you can supercharge your job search. The impressive data speaks for itself, demonstrating that AI-driven tools can significantly increase your chances of landing your dream job. So why settle for the traditional approach when you can leverage the power of AI to accelerate your career goals? Try AI-based solutions today and experience the difference firsthand. Your future career success awaits!</span>
                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default JobSeeker


export const StyledPage = styled.div`
width: 100%;
background-color: var(--white);
color: black;
display: flex;
flex-direction: column;

`


export const StyledContent = styled.div`
margin-top: 5rem;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
margin-left: 5%;
margin-right: 5%;

.top {
    background-image: url(${bg1});
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--white);
    padding: 3rem 5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 1rem;
    align-items: center;
}

.topTitle {
    font-size: 1.8rem;
    font-weight: 600;
    word-wrap: break-word;
    line-height: 2rem;
    text-align: center;
}

.topText {
    font-size: 1.1rem;
    text-align: center;
}

.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0rem 5rem 0rem;
}

.detailBox {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
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
    gap: 1.5rem;
}

.rightBox {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.rightBox > img {
    width: 40%;
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

.cardBox1 {
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    row-gap: 2rem;
    background: linear-gradient(to bottom, var(--grey), black);
    color: white;
    padding: 2rem 5%;
    border-radius: 1rem;
    justify-content: center;
}

.card1 {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.cardTitle1 {
    font-size: 1.1rem;
    font-weight: 600;
}

.cardText1 {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
}

.text {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

}



`


