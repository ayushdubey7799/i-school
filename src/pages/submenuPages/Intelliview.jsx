import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/intelliView.jpg'
import img2 from '../../assets/VectorImg/about.png'
import { useNavigate } from 'react-router'

const Intelliview = () => {
    const navigate = useNavigate();

    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>Welcome to IntelliView - Your AI-Powered Interview Companion</span>
                    <span className='topText'>Are you tired of sifting through stacks of resumes and spending endless hours on interviews? Say hello to the future of recruitment with IntelliView, our cutting-edge AI-based interview tool. Unlock a smarter, faster, and more efficient hiring process that sets you apart from the competition.</span>
                </div>

                <span className='title'>Why Choose IntelliView Over Traditional Hiring Methods?</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Speed and Efficiency</span>

                            <div className='card'>
                                <span className='cardText'><b>Data-Driven Shortlisting: </b> IntelliView scans resumes and job applications at lightning speed, instantly identifying the most qualified candidates. No more time wasted on manual screening.</span>
                                <span className='cardText'><b>Automated Interview Scheduling: </b> Our AI-driven system seamlessly coordinates interview times with candidates, reducing scheduling conflicts and streamlining the entire process.</span>
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
                            <span className='smallTitle'>Unbiased Selection</span>

                            <div className='card'>
                                <span className='cardText'><b>Fair and Inclusive: </b> Say goodbye to unconscious bias in your hiring process. IntelliView assesses candidates solely on their qualifications, skills, and experience, ensuring a level playing field for all.</span>
                                <span className='cardText'><b>Diverse Talent Pool: </b> By eliminating bias, you'll naturally attract a more diverse talent pool, fostering innovation and growth within your organization.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Predictive Analytics</span>
                            <span className='cardText1'>IntelliView utilizes predictive analytics to identify candidates who are the best fit for your organization based on historical data. Expect reduced turnover and higher retention rates.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Customized Assessments</span>
                            <span className='cardText1'>Tailor interview questions and assessments to specific roles, ensuring you uncover the candidates with the right skills and cultural alignment.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>40% Reduction in Time-to-Hire</span>
                            <span className='cardText1'>Experience a significant decrease in your recruitment timeline, allowing your organization to onboard top talent faster and stay ahead in a competitive market.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>30% Decrease in Turnover</span>
                            <span className='cardText1'>Our AI-powered tool enhances candidate matching, leading to higher employee satisfaction and reduced turnover rates.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>10% Increase in Diversity</span>
                            <span className='cardText1'>IntelliView's unbiased approach attracts a more diverse candidate pool, contributing to a richer, more innovative work environment.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>95% User Satisfaction</span>
                            <span className='cardText1'>Our clients consistently report high satisfaction rates, praising IntelliView for its ease of use and the remarkable improvement in their hiring processes.</span>
                        </div>
                    </div>

                    <span className='smallTitle'>Experience the Future of Recruitment with IntelliView</span>

                    <span className='text'>Don't let outdated hiring practices hold your organization back. Join the ranks of forward-thinking companies that are revolutionizing recruitment with IntelliView. With our AI-based interview tool, you'll save time, make better hires, and drive growth.</span>
                    <span className='text'>Ready to get started? <span className='linkNav' onClick={() => navigate('/contact')}>Contact us</span> today to schedule a demo and discover how IntelliView can transform your hiring process. Welcome to the future of recruitment. Welcome to IntelliView.</span>

                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Intelliview



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
    gap: 1.3rem;
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

.linkNav {
    color: var(--lightOrange);
    font-weight: 600;
}

.linkNav:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
}


`


