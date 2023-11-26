import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/dataAnalytics.png'
import img2 from '../../assets/VectorImg/screening.jpg'
import { useNavigate } from 'react-router'

const DataAnalytics = () => {
    const navigate = useNavigate();

    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Recruitment Data Analytics and Reports</span>
                    <span className='topText'>In the ever-evolving landscape of talent acquisition, leveraging cutting-edge technology is no longer an option—it's a necessity. Welcome to our AI-Based Recruitment Data Analytics and Reports solution, a game-changer that transforms the way organizations approach hiring. Discover the future of recruitment with data-driven insights and automation, leaving traditional processes far behind.</span>
                </div>

                <span className='title'>Unparalleled Benefits Over Traditional Hiring Methods</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Precision and Accuracy</span>

                            <div className='card'>
                                <span className='cardText'><b>Traditional: </b> Manual resume screening often leads to errors and overlooked qualified candidates.</span>
                                <span className='cardText'><b>AI-Powered: </b> Our system uses advanced algorithms to analyze resumes and applications, ensuring accuracy and reducing false negatives.</span>
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
                            <span className='smallTitle'>Bias Mitigation</span>

                            <div className='card'>
                                <span className='cardText'><b>Traditional: </b> Unconscious bias can seep into decision-making processes, impacting diversity and inclusion.</span>
                                <span className='cardText'><b>AI-Powered: </b> Our AI-driven approach focuses solely on qualifications and skills, helping to eliminate bias and promote fair hiring practices.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Faster Time-to-Hire</span>
                            <span className='cardText1'><b>Traditional: </b> Lengthy recruitment cycles can result in missed opportunities and increased costs.</span>
                            <span className='cardText1'><b>AI-Powered: </b> AI streamlines the hiring process, reducing time-to-hire by up to 40%, allowing you to secure top talent swiftly.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Cost Savings</span>
                            <span className='cardText1'><b>Traditional: </b> Manual recruitment is resource-intensive, involving hours of labor and administrative costs.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Automation reduces overheads, saving you valuable time and money.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Predictive Analytics</span>
                            <span className='cardText1'><b>Traditional: </b> Decision-making based on gut feeling and intuition.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Our system analyzes historical data to predict candidate success, helping you make informed hiring choices.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Enhanced Candidate Experience</span>
                            <span className='cardText1'><b>Traditional: </b> Lengthy response times and lack of personalization can deter top talent.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Engage with candidates promptly, offer personalized interactions, and provide 24/7 support through AI chatbots.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Data-Driven Insights</span>
                            <span className='cardText1'><b>Traditional: </b> Limited visibility into the effectiveness of recruitment strategies.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Gain valuable insights into sourcing channels, interview questions, and bottlenecks, enabling continuous optimization.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Scalability</span>
                            <span className='cardText1'><b>Traditional: </b> Difficulty scaling to handle growing candidate volumes.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Easily manage increased applicant loads as your organization expands.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Competitive Edge</span>
                            <span className='cardText1'><b>Traditional: </b> Falling behind in attracting top talent.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Stand out in the competitive talent market with innovative technology.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Long-Term Talent Pipeline</span>
                            <span className='cardText1'><b>Traditional: </b> Reactive hiring often results in talent shortages.</span>
                            <span className='cardText1'><b>AI-Powered: </b> Proactively identify and engage with potential candidates, ensuring a consistent talent pipeline.</span>
                        </div>
                    </div>

                    <span className='smallTitle part'>Unveil the Power of AI in Recruitment</span>

                    <span className='text'>Embrace the future of recruitment with our AI-Based Recruitment Data Analytics and Reports solution. Leverage data to make more informed, unbiased, and efficient hiring decisions. Boost your organization's growth by securing the best talent the smart way.</span>
                    <span className='text'>Are you ready to transform your hiring process? <span className='linkNav' onClick={() => navigate('/contact')}>Contact us</span> today to learn more about our AI-driven solutions and embark on a journey to a more effective, efficient, and data-driven recruitment strategy.</span>

                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default DataAnalytics

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
    margin-top: 1rem;
}

.leftBox {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    row-gap: 1rem;
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
    // text-align: center;
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





