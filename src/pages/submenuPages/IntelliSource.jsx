import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img from '../../assets/VectorImg/intelliSource.png'
import img2 from '../../assets/VectorImg/intelliView.jpg'

const IntelliSource = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Resume and Candidate Sourcing - IntelliSource</span>
                    <span className='topText'>At IntelliSource, we're revolutionizing the way businesses discover and hire top talent. Our cutting-edge AI-based resume and candidate sourcing platform is designed to simplify and supercharge your recruitment process, offering numerous benefits over traditional methods.</span>
                </div>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Efficiency Beyond Measure</span>

                            <div className='card'>
                                <span className='cardText'>In today's competitive job market, time is of the essence. With our AI-driven solution, you can dramatically reduce the time and effort spent on the initial stages of recruitment. Traditional manual resume screening can be incredibly time-consuming, taking hours or even days to sift through a pile of applications. IntelliSource streamlines this process by rapidly scanning and analyzing resumes, instantly identifying the most qualified candidates.</span>
                            </div>
                        </div>

                        <div className='rightBox'>
                            <img src={img} />
                        </div>

                    </div>


                    <div className='mainBox'>

                        <div className='rightBox'>
                            <img src={img2} />
                        </div>

                        <div className='leftBox'>
                            <span className='smallTitle'>Data-Driven Decision Making</span>

                            <div className='card'>
                                <span className='cardText'>Data is the cornerstone of successful hiring. Our AI platform leverages advanced algorithms to gather and analyze a wealth of candidate data. This data-driven approach provides valuable insights into candidate demographics, skill sets, and past experiences. By harnessing this data, you can make informed decisions about who to interview and ultimately hire. In fact, our clients have reported up to a 50% reduction in time-to-hire after adopting IntelliSource.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1'>
                        <div className='card1'>
                            <span className='cardTitle1'>Mitigating Bias for Inclusivity</span>
                            <span className='cardText1'>Unconscious bias can creep into even the most well-intentioned hiring processes, leading to missed opportunities for diverse talent. IntelliSource's AI system is designed to be completely impartial, focusing solely on a candidate's qualifications, skills, and experience. This proactive approach helps eliminate bias and promotes diversity, leading to a more inclusive and innovative workforce.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Higher Quality Matches</span>
                            <span className='cardText1'>Finding the right candidate for a specific role can be challenging. IntelliSource's AI algorithms excel at pinpointing candidates who not only meet the job's requirements but also align with your organization's culture and values. As a result, our clients have reported an increase of up to 30% in employee retention rates, saving on costly turnover expenses.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Unmatched Scalability</span>
                            <span className='cardText1'>As your business grows, so does the volume of resumes and candidates. IntelliSource effortlessly scales to accommodate your expanding needs. Our AI-powered solution ensures that you can handle a higher volume of applicants and job openings without adding to your HR workload. In fact, our clients have experienced a 40% reduction in administrative tasks related to recruitment.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Unparalleled Support and Insight</span>
                            <span className='cardText1'>IntelliSource is more than just a sourcing tool; it's a strategic partner in your recruitment journey. Our platform offers in-depth analytics and reporting, helping you fine-tune your hiring strategies. Discover which sourcing channels are the most effective, which interview questions yield the best results, and where potential bottlenecks occur in your recruitment funnel.</span>
                        </div>
                    </div>

                    <span className='text'>Join the growing number of forward-thinking organizations that are reaping the benefits of AI-based resume and candidate sourcing with IntelliSource. Stay ahead in the talent game, make data-driven decisions, and build a diverse, high-performing team that propels your business to new heights.</span>
                    <span className='text'>Contact us today to learn more about how IntelliSource can transform your recruitment process and drive your organization's success.</span>

                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default IntelliSource

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
    margin-top: 5rem;
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
    margin-bottom: 2rem;
    justify-content: center;
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







