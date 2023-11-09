import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/about.png'
import img2 from '../../assets/VectorImg/about2.png'
import { useNavigate } from 'react-router';

const About = () => {
    const navigate = useNavigate();


    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>About Us</span>

                <div className='top'>
                    <span className='topText'>Welcome to IntelliView, your go-to platform for revolutionizing the interview process through cutting-edge AI technology. Our mission is to empower job seekers and employers alike with innovative tools that streamline the hiring process, ensuring a perfect match every time.</span>
                    <span className='topText'>At IntelliView, we understand the challenges that both candidates and employers face in the traditional interview process. Candidates often struggle to stand out from the crowd and showcase their true potential, while employers grapple with time-consuming, resource-intensive hiring decisions. That's where we come in.</span>
                </div>

                <span className='text'>Our AI-based interview platform leverages the latest advancements in artificial intelligence and machine learning to create a seamless, efficient, and effective interview experience. We're here to level the playing field, giving candidates the opportunity to shine and employers the ability to make data-driven, informed hiring decisions.</span>

                <span className='title'>Here's what sets us apart</span>

                <div className='mainBox'>

                    <div className='leftBox'>
                        <span className='smallTitle'>AI-Powered Interviews</span>

                        <div className='card'>
                            <span className='cardText'>Say goodbye to traditional interviews. Our AI-driven system evaluates candidates based on their skills, experience, and cultural fit, providing objective assessments to guide your hiring decisions.</span>
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
                        <span className='smallTitle'>Efficiency</span>

                        <div className='card'>
                            <span className='cardText'>Save time and resources by automating repetitive tasks, such as resume screening and initial candidate assessments. Our platform allows you to focus on what truly matters - finding the perfect candidate.</span>
                        </div>
                    </div>

                </div>

                <span className='text'><b>Unbiased Evaluations</b>: Eliminate unconscious bias from the hiring process. Our AI algorithms assess candidates purely on their qualifications and abilities, promoting diversity and inclusion.</span>
                <span className='text'><b>Data-Driven Insights</b>: Access comprehensive analytics and reports to gain valuable insights into your hiring process. Use data to make informed decisions and continually improve your recruitment strategies.</span>
                <span className='text'><b>Seamless Integration</b>: Our platform easily integrates with your existing applicant tracking system (ATS) or workflow, ensuring a smooth transition to AI-driven hiring.</span>

                <span className='text'>Whether you're a job seeker looking for your dream position or an employer seeking top talent, IntelliView is here to make the interview process more efficient, effective, and fair for everyone involved.</span>

                <span className='text'><b className='linkNav' onClick={() => navigate('/sales')}>Join us</b> on the journey to a brighter, more innovative future of hiring. Explore our platform today and experience the future of interviews with AI at your side.</span>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default About;

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
gap: 2rem;

.mainTitle {
    font-weight: 900;
    font-size: 1.3rem;
}

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

.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0rem 2rem 0rem;
}


.text {
    word-wrap: break-word;
    font-size: 0.8rem;
    line-height: 1.5rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.linkNav {
    color: var(--lightOrange);

}

.linkNav:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
}

`

