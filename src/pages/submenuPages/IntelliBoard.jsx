import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/IntelliBoard.jpg'
import img2 from '../../assets/VectorImg/talent2.png'

const IntelliBoard = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Job Posting & Recruitment Analysis Dashboard - IntelliBoard</span>
                    <span className='topText'>Welcome to IntelliBoard, your ultimate solution for revolutionizing the way you approach job posting and recruitment analysis. With our cutting-edge AI-powered platform, we bring the future of talent acquisition right to your fingertips.</span>
                </div>

                <span className='title'>Unlock the Power of IntelliBoard - Benefits Over Traditional Processes</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Efficiency and Time Savings</span>

                            <div className='card'>
                                <span className='cardText'>Traditional job posting and recruitment analysis involve manual screening, a time-consuming process that can delay hiring decisions. IntelliBoard's AI algorithms swiftly sift through a sea of applications, shortlisting candidates that best match your job requirements, drastically reducing time-to-hire</span>
                                <span className='cardText'><b>Data: </b> On average, IntelliBoard users experience a 50% reduction in time spent on initial candidate screening, allowing them to focus on more strategic HR tasks.</span>
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
                            <span className='smallTitle'>Reduced Bias for Fairer Hiring</span>

                            <div className='card'>
                                <span className='cardText'>Traditional processes can inadvertently introduce bias into recruitment decisions. IntelliBoard's AI is designed to focus solely on qualifications and skills, promoting a fairer and more inclusive hiring process.</span>
                                <span className='cardText'><b>Data: </b> Companies using IntelliBoard have reported a 30% increase in diversity among their new hires, leading to enhanced innovation and creativity.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1'>
                        <div className='card1'>
                            <span className='cardTitle1'>Data-Driven Decision Making</span>
                            <span className='cardText1'>IntelliBoard doesn't just streamline your processes; it empowers you with data-driven insights. Our platform offers comprehensive analytics, enabling you to make informed decisions and continuously optimize your recruitment strategies.</span>
                            <span className='cardText1'><b>Data:</b> IntelliBoard users have seen a 20% improvement in their candidate-to-hire conversion rates by leveraging data-driven insights.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Cost Savings</span>
                            <span className='cardText1'>The traditional recruitment process involves significant manual labor and costs. IntelliBoard helps you cut costs by automating repetitive tasks, reducing the need for extensive HR staff involvement.</span>
                            <span className='cardText1'><b>Data:</b> Companies adopting IntelliBoard have reported up to a 40% reduction in recruitment-related expenses.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Superior Candidate Matching</span>
                            <span className='cardText1'>IntelliBoard's AI algorithms use historical data to predict which candidates are most likely to succeed in specific roles, leading to better hiring decisions and reduced turnover.</span>
                            <span className='cardText1'><b>Data:</b> Users of IntelliBoard have reported a 25% decrease in turnover rates within the first year of implementation.</span>
                        </div>
                    </div>

                    <span className='smallTitle'>Why Choose IntelliBoard?</span>

                    <span className='text'><b>Proven Success</b>: With a track record of success and a growing community of satisfied users, IntelliBoard is a trusted partner in the world of AI-based recruitment.</span>
                    <span className='text'><b>Customization</b>: Our platform can be tailored to your organization's unique needs and culture, ensuring a seamless integration into your existing processes.</span>
                    <span className='text'><b>Scalability</b>: As your business grows, IntelliBoard scales with you, handling a larger volume of applicants and job openings without the need for extensive manpower.</span>
                    <span className='text'><b>Enhanced Candidate Experience</b>: We prioritize creating a positive candidate experience, ensuring your organization's reputation as a top employer is maintained.</span>


                    <span className='text'>Experience the future of recruitment with IntelliBoard. Say goodbye to traditional, time-consuming methods, and embrace the efficiency, fairness, and cost savings that our AI-powered platform brings. Join the ranks of forward-thinking organizations that are shaping the future of talent acquisition.</span>
                    <span className='smallTitle'>Unlock the Power of IntelliBoard - Revolutionize Your Recruitment Process Today!</span>

                </div>
            </StyledContent>
            <Footer />
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

.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0rem 5rem 0rem;
}

.detailBox {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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

.cardBox1 {
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    row-gap: 2rem;
    margin-top: 2rem;
    background: linear-gradient(to bottom, var(--grey), black);
    color: white;
    padding: 2rem 5%;
    border-radius: 1rem;
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


