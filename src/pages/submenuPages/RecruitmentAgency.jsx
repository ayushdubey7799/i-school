import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/recruitment.png'
import img2 from '../../assets/VectorImg/recruitment2.png'


const RecruitmentAgency = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <div className='top'>
                    <span className='topTitle'>AI-Based Solutions for Recruitment Agencies: Revolutionizing Interviewing and Sourcing with IntelliView</span>
                    <span className='topText'>In the ever-evolving landscape of recruitment, staying ahead of the competition is vital for success. Traditional methods of sourcing and interviewing candidates can be time-consuming and inefficient. That's where IntelliView's AI-based solutions come into play. We bring cutting-edge technology to the forefront of your recruitment process, offering substantial benefits over conventional methods.</span>
                </div>

                <span className='title'>The IntelliView Advantage</span>

                <div className='detailBox'>


                    <div className='mainBox'>

                        <div className='leftBox'>
                            <span className='smallTitle'>Efficiency Beyond Measure</span>

                            <div className='card'>
                                <span className='cardText'><b>Traditional Process: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
                                <span className='cardText'>- Manual screening of resumes takes hours.</span>
                                <span className='cardText'>- Endless emails for interview scheduling.</span>
                                <span className='cardText'>- High risk of missing out on top talent.</span>

                                <span className='cardText'><b>IntelliView's AI Solution: &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>                                <span className='cardText'>- Instant resume screening with accuracy.</span>
                                <span className='cardText'>- Automated interview scheduling.</span>
                                <span className='cardText'>- Enhanced talent discovery and retention.</span>

                                <span className='cardText'><b>Data Insight: </b> IntelliView reduces the time spent on initial screening by up to 80%, allowing your team to focus on high-impact activities.</span>
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
                            <span className='smallTitle'>Bias-Free Hiring</span>

                            <div className='card'>
                                <span className='cardText'><b>Traditional Process: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
                                <span className='cardText'>- Unconscious bias may affect hiring decisions.</span>
                                <span className='cardText'>- Limited diversity in the workforce.</span>

                                <span className='cardText'><b>IntelliView's AI Solution: &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
                                <span className='cardText'>- Eliminates bias by focusing on skills and qualifications.</span>
                                <span className='cardText'>- Promotes diversity and inclusion.</span>

                                <span className='cardText'><b>Data Insight: </b> Organizations using IntelliView report a 30% increase in diversity among their hires, leading to a more innovative and productive workforce.</span>
                            </div>
                        </div>
                    </div>


                    <div className='cardBox1 part'>
                        <div className='card1'>
                            <span className='cardTitle1'>Predictive Analytics</span>
                            <span className='cardText1'><b>Traditional Process: </b> No data-driven insights into hiring success, High turnover rates.</span>
                            <span className='cardText1'><b>IntelliView's AI Solution: </b> Predicts candidate success based on historical data, Reduces turnover rates by up to 25%.</span>
                            <span className='cardText1'><b>Data Insight: </b> With IntelliView, our clients have seen a 20% increase in employee retention within the first year of implementation.</span>
                        </div>

                        <div className='card1'>
                            <span className='cardTitle1'>Cost Savings</span>
                            <span className='cardText1'><b>Traditional Process: </b> High recruitment costs due to lengthy processes, Frequent hiring mistakes increase expenses.</span>
                            <span className='cardText1'><b>IntelliView's AI Solution: </b> Significantly reduces time-to-hire and associated costs, Minimizes hiring mistakes with data-driven decisions.</span>
                            <span className='cardText1'><b>Data Insight: </b> IntelliView clients report an average cost reduction of 30% in their recruitment budget within the first year.</span>
                        </div>


                        <div className='card1'>
                            <span className='cardTitle1'>Enhanced Candidate Experience</span>
                            <span className='cardText1'><b>Traditional Process: </b> Slow response times, Impersonal interactions.</span>
                            <span className='cardText1'><b>IntelliView's AI Solution: </b> Personalized and efficient candidate interactions, Quick responses, even outside business hours.</span>
                            <span className='cardText1'><b>Data Insight: </b> Candidates interviewed through IntelliView are 40% more likely to provide positive feedback on their application experience.</span>
                        </div>


                    </div>

                    <span className='text'>Embracing IntelliView's AI-based solutions for recruitment agencies is more than a modernization—it's a strategic move toward a more efficient, inclusive, and data-driven future. By automating time-consuming tasks, eliminating bias, and leveraging predictive analytics, your agency can not only save costs but also unlock the potential of a diverse, high-performing workforce. Join the AI revolution with IntelliView and experience recruitment like never before. Contact us today to get started.</span>

                </div>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default RecruitmentAgency


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
    align-items: start;
    gap: 1rem;
    color: var(--color);
}


.cardText {
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: start;
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

ul, li {
    text-align: start;
    font-size: 1rem;
    line-height: 1.5rem;
}

.cardTitle1 {
    font-size: 1.1rem;
    font-weight: 600;
}

.cardText1 {
    text-align: start;
    font-size: 1rem;
    line-height: 1.5rem;
}

.text {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;

}



`





