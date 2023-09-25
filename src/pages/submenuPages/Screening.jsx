import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/screening.jpg'
import img2 from '../../assets/VectorImg/IntelliBoard.jpg'

const Screening = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Resume Screening: Revolutionizing Hiring</span>
                    <span className='topText'>Welcome to our cutting-edge AI-based resume screening solution! We understand the challenges that recruiters face when sifting through mountains of resumes to find the perfect candidate. That's why we've harnessed the power of artificial intelligence to transform the hiring process. Say goodbye to manual, time-consuming resume reviews, and say hello to efficiency, accuracy, and data-driven hiring decisions.</span>
                </div>

                <span className='title'>Benefits Over Traditional Screening</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Speed and Efficiency</span>

                            <div className='card'>
                                <span className='cardText'>Traditional resume screening can take days or even weeks, delaying the hiring process. Our AI-based system, on the other hand, can analyze hundreds of resumes in seconds, allowing you to identify top candidates swiftly. In fact, our clients have reported up to a 60% reduction in time-to-hire!</span>
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
                            <span className='smallTitle'>Reduced Bias</span>

                            <div className='card'>
                                <span className='cardText'>Unconscious bias can creep into the traditional screening process, leading to unfair candidate selection. AI-based screening is objective and focuses solely on qualifications and skills, ensuring a fair and unbiased evaluation of all applicants. Studies have shown a 30% reduction in bias-related issues.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Improved Candidate Matching</span>
                            <span className='cardText1'>Our AI system uses advanced algorithms to match candidate qualifications with job requirements. The result? Higher-quality hires who are better suited for their roles. Organizations have reported a 40% increase in the number of successful hires.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Enhanced Candidate Experience</span>
                            <span className='cardText1'>Candidates appreciate a quick response. With AI-driven systems, you can provide timely feedback and keep applicants engaged throughout the process. This not only improves your organization's reputation but also ensures you don't miss out on top talent.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Data-Driven Insights</span>
                            <span className='cardText1'>We provide you with valuable data and analytics to optimize your recruitment strategies continually. Discover which sourcing channels yield the best candidates, which skills are most critical, and where bottlenecks occur in your hiring funnel. These insights lead to smarter hiring decisions and a competitive edge.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Cost Savings</span>
                            <span className='cardText1'>Streamlining your recruitment process with AI translates to significant cost savings. Fewer man-hours spent on manual tasks mean reduced operational costs and a higher return on investment.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Scalability</span>
                            <span className='cardText1'>As your business grows, so does your applicant pool. Our AI system effortlessly scales to handle a larger volume of resumes and job openings, ensuring you're always ready for expansion.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>High ROI</span>
                            <span className='cardText1'>Organizations that have embraced AI-based resume screening have seen impressive returns on their investment. With improved hires, reduced turnover, and faster time-to-hire, the ROI speaks for itself.</span>
                        </div>
                    </div>


                    <span className='text'>Our AI-based resume screening solution is not just a technological advancement; it's a game-changer in modern recruitment. Join the ranks of forward-thinking companies that are revolutionizing their hiring processes, improving their talent acquisition, and driving growth. Contact us today to learn more about how we can help you make data-driven hiring decisions and secure the top talent your organization deserves.</span>
                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Screening


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







