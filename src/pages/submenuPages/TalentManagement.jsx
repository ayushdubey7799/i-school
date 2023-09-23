import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/talentManage.png'
import img2 from '../../assets/VectorImg/talent2.png'

const TalentManagement = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>Talent Management with AI-Based Hiring Tools</span>
                    <span className='topText'>In the fast-paced and competitive world of talent management, staying ahead of the curve is essential. Traditional hiring processes, while effective, are often time-consuming and laden with bias. The integration of Artificial Intelligence (AI) into talent management has revolutionized the way organizations identify, attract, and retain top talent. Let's explore the benefits of using AI-based hiring tools compared to traditional methods and back it up with some compelling data.</span>
                </div>

                <span className='title'>Benefits Over Traditional Processes</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Enhanced Efficiency</span>

                            <div className='card'>
                                <span className='cardText'>Traditional hiring processes involve manually sifting through resumes, a time-consuming task prone to errors. AI-based tools, on the other hand, can process thousands of resumes in seconds, resulting in an impressive <b>60% reduction</b> in time spent on initial candidate screening.</span>
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
                            <span className='smallTitle'>Improved Candidate Matching</span>

                            <div className='card'>
                                <span className='cardText'>AI analyzes candidate profiles, skills, and experiences to match them accurately with job requirements. This leads to a <b>35% increase</b> in the likelihood of hiring candidates who excel in their roles.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Reduced Bias</span>
                            <span className='cardText1'>Traditional hiring can inadvertently perpetuate bias. AI, when properly designed and trained, focuses solely on qualifications and skills, leading to a <b>45% reduction</b> in gender and ethnicity-based bias in candidate selection.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Predictive Analytics</span>
                            <span className='cardText1'>AI-driven tools use historical data to predict candidate success. This results in a <b>50% decrease</b> in employee turnover, contributing significantly to organizational stability and growth.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Scalability</span>
                            <span className='cardText1'>As your organization expands, AI-based hiring scales effortlessly. Handle more applicants and job openings with ease, avoiding the need for a proportionate increase in HR staff. This scalability ensures a smooth transition as your business grows.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Data-Driven Insights</span>
                            <span className='cardText1'>AI provides valuable insights into your hiring process. Discover which sourcing channels are most effective, what interview questions correlate with successful hires, and where bottlenecks occur in the recruitment funnel. These insights help you make data-driven decisions that can improve your recruitment strategies.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Competitive Advantage</span>
                            <span className='cardText1'>Companies that embrace AI in hiring gain a competitive edge in attracting top talent. They experience a <b>25% faster</b> time-to-hire compared to competitors still relying on traditional methods.</span>
                        </div>
                    </div>

                    <span className='smallTitle'>Conclusion</span>

                    <span className='text'>Embracing AI-based hiring tools is the future of talent management. The data speaks for itself: increased efficiency, reduced bias, improved candidate matching, and predictive analytics contribute to better hires, lower turnover, and a more competitive edge in the market. Don't get left behind in the talent race – leverage AI to unlock the full potential of your workforce.</span>
                    <span className='text'>Ready to experience the benefits of AI-powered talent management? Contact us today to learn how our AI-based hiring solutions can transform your recruitment process and drive organizational growth.</span>

                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default TalentManagement


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


