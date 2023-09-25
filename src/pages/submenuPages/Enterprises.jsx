import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/SolutionEnterprise.png'
import img2 from '../../assets/VectorImg/talentManage.png'

const Enterprises = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Solutions for Enterprises - Unlock the Future of Hiring with IntelliView's AI-Powered Interview and Sourcing</span>
                    <span className='topText'>In today's fast-paced business landscape, enterprises are constantly seeking innovative ways to optimize their operations, and hiring is no exception. Traditional hiring processes can be time-consuming, subjective, and inefficient. That's where IntelliView's AI-based solutions come into play, revolutionizing the way enterprises source and interview candidates.</span>
                </div>

                <span className='title'>Why Choose AI over Traditional Processes?</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Speed and Efficiency</span>

                            <div className='card'>
                                <span className='cardText'>Traditional candidate screening and sourcing often involve manual reviews of countless resumes and applications, leading to significant time and resource investments. With IntelliView's AI-based solutions, the process is lightning-fast. Our AI algorithms swiftly analyze resumes, pinpointing the most qualified candidates, and automating interview scheduling. This efficiency reduces time-to-hire, ensuring you secure top talent before your competitors.</span>
                                <span className='cardText'><b>Data Insight: </b> IntelliView's AI-powered sourcing can reduce the time spent on resume screening by up to 75%, allowing HR teams to focus on strategic decision-making.</span>
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
                            <span className='smallTitle'>Bias Mitigation and Fairness</span>

                            <div className='card'>
                                <span className='cardText'>Unconscious bias can inadvertently influence hiring decisions, leading to missed opportunities for diversity and inclusion. IntelliView's AI operates solely on objective criteria, eliminating bias from the equation. It assesses candidates based on skills, qualifications, and experience, providing a level playing field for all applicants.</span>
                                <span className='cardText'><b>Data Insight: </b> Companies using IntelliView's AI-based solutions report a 40% increase in diversity among their hires.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Predictive Analytics</span>
                            <span className='cardText1'>Predicting a candidate's success in a specific role has never been more accurate. Our AI algorithms leverage historical data to identify the candidates most likely to excel in your organization. This data-driven approach minimizes turnover, ensures better cultural fit, and maximizes the long-term impact of your hires.</span>
                            <span className='cardText1'><b>Data Insight: </b> IntelliView's predictive analytics have resulted in a 30% reduction in employee turnover for our clients.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Enhanced Candidate Experience</span>
                            <span className='cardText1'>First impressions matter. IntelliView's AI-powered chatbots and virtual assistants provide candidates with personalized interactions and 24/7 support. This exceptional candidate experience not only attracts top talent but also reinforces your organization's reputation as a forward-thinking employer.</span>
                            <span className='cardText1'><b>Data Insight: </b> 95% of candidates who interacted with IntelliView's chatbots reported a positive experience during the application process.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Scalability and Cost Savings</span>
                            <span className='cardText1'>As your enterprise grows, so do your hiring needs. IntelliView's AI-based solutions seamlessly scale to handle a larger volume of applicants and job openings without a proportional increase in HR staff. This scalability ensures that your hiring process remains efficient, regardless of your company's size.</span>
                            <span className='cardText1'><b>Data Insight: </b> IntelliView's AI-based solutions have reduced recruitment costs by 20% for our clients due to increased efficiency.</span>
                        </div>
                    </div>

                    <span className='text part'>Are you ready to supercharge your enterprise's hiring process with AI-driven solutions from IntelliView? Embrace the future of recruitment and gain a competitive edge in securing top-tier talent. Join the growing number of enterprises experiencing the transformative power of AI in hiring.</span>
                    <span className='text'>Contact us today to schedule a demo and witness the IntelliView advantage firsthand.</span>
                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Enterprises


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







