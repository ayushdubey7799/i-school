import React from 'react'
import styled from 'styled-components'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'
import img1 from '../../assets/VectorImg/career4.jpg'
import img2 from '../../assets/VectorImg/career3.jpg'
import { useNavigate } from 'react-router'

const Career = () => {
    const navigate = useNavigate();
    
    return (
        <StyledBox>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Join Our Team at IntelliView</span>

                <div className='mainBox'>

                    <div className='leftBox'>
                        <span className='smallTitle'>Why Work with Us?</span>

                        <div className='card'>
                            <span className='cardText'>At IntelliView, we're pioneering the future of recruitment through innovative AI-driven solutions. If you're passionate about the intersection of technology and human resources and want to be part of a dynamic team that's changing the way companies find and hire talent, you've come to the right place.</span>
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
                        <span className='smallTitle'>Our Mission</span>

                        <div className='card'>
                            <span className='cardText'>Our mission is to revolutionize recruitment by harnessing the power of artificial intelligence. We're committed to making hiring processes more efficient, fair, and effective for both job seekers and employers. When you join IntelliView, you're joining a mission-driven team dedicated to making a positive impact on the world of work.</span>
                        </div>
                    </div>

                </div>

                <span className='smallTitle1 part'>What We Value</span>

                <div className='cardBox1'>
                    <span className='card1'>
                        <b>Innovation: </b>
                        We thrive on creativity and innovation. We're not afraid to challenge the status quo and explore new ideas to solve complex problems.
                    </span>
                    <span className='card1'>
                        <b>Diversity and Inclusion: </b>
                        We believe in the strength of diverse perspectives. We're committed to creating an inclusive workplace where every team member feels valued and heard.
                    </span>
                    <span className='card1'>
                        <b>Continuous Learning: </b>
                        In the ever-evolving field of AI and recruitment, learning never stops. We support and encourage continuous learning and professional growth.
                    </span>
                    <span className='card1'>
                        <b>Collaboration: </b>
                        Collaboration is at the heart of our success. We work closely across teams and departments to deliver exceptional solutions for our clients.
                    </span>
                </div>

                <span className='smallTitle'>Life at IntelliView</span>

                <div className='cardBox2'>
                    <div className='card2'>
                        <span className='cardTitle2'>Professional Growth</span>
                        <span className='cardText2'>At IntelliView, you'll have the opportunity to work on cutting-edge projects that push the boundaries of AI in recruitment. Your work here will make a meaningful impact on the industry.</span>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Work-Life Balance</span>
                        <span className='cardText2'>We believe in work-life balance and offer flexible work arrangements to help our team members thrive in and out of the office.</span>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Inclusive Culture</span>
                        <span className='cardText2'>Our inclusive culture celebrates diversity and encourages open communication. You'll be part of a team where your ideas and perspectives are valued.</span>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Continuous Learning</span>
                        <span className='cardText2'>We invest in our team's growth and development. You'll have access to training and resources to enhance your skills and stay at the forefront of AI and HR tech.</span>
                    </div>
                </div>

                <span className='smallTitle'>Current Opportunities</span>

                <span className='text'>Explore our current job openings below and find the perfect opportunity to join our team</span>

                <div className='jobBox'>
                    <div className='jobCard'>
                        <span className='jobTitle'>AI/ML Engineer</span>
                        <button className='jobBtn' onClick = {() => navigate('/signup')}>Apply</button>
                    </div>
                    <div className='jobCard'>
                        <span className='jobTitle'>Lead Developer</span>
                        <button className='jobBtn' onClick = {() => navigate('/signup')}>Apply</button>
                    </div>
                    <div className='jobCard'>
                        <span className='jobTitle'>UI/UX Designer</span>
                        <button className='jobBtn' onClick = {() => navigate('/signup')}>Apply</button>
                    </div>
                </div>
                
                <span className='smallTitle'>How to Apply</span>
                <span className='text'>To apply for any of our open positions, please click on the respective job link and follow the application instructions. We look forward to welcoming talented and motivated individuals to the IntelliView family.</span>

                <span className='smallTitle contact' onClick={() => navigate('/contact')}>Contact Us</span>
                <span className='text'>If you have any questions about our career opportunities or working at IntelliView, please don't hesitate to <span className='linkNav' onClick={() => navigate('/contact')}>contact us</span>. We're here to help!.</span>

                <span className='text'>Join us in shaping the future of recruitment with AI. Your career at IntelliView begins here!</span>
            </StyledContent>
            <Footer />
        </StyledBox>
    )
}

export default Career



const StyledBox = styled.div`
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
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color);
    padding: 1rem 0%;
}


.smallTitle {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1rem;
    text-align: center;
    color: var(--grey);
}

.smallTitle1 {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--grey);
}

.cardBox1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.5rem;
}

b {
    color: var(--color);
    font-weight: 500;
}


.mainBox {
    display: flex;
    flex-direction: row;
    gap: 5%;
    align-items: center;
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


.cardBox2 {
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    row-gap: 2rem;
    background: linear-gradient(to top, #99C6FF, var(--lightOrange));
    color: white;
    padding: 2rem 5%;
    border-radius: 1rem;
    justify-content: center;
}

.card2 {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.cardTitle2 {
    font-size: 1.1rem;
    font-weight: 600;
}

.cardText2 {
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
}

.text {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    text-align: center;
}

.jobBox {
    display: flex;
    flex-flow: row wrap;
    gap: 5%;
    padding: 1rem 5%;
    justify-content: center;
    margin: 1rem 0;
}

.jobCard {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--lightOrange);
    padding: 2rem 1%;
    border-radius: 1rem;
}

.jobTitle {
    font-weight: 1.2rem;
    font-weight: 600;
    padding: 1rem 0rem 2rem 0rem;
    color: var(--white);
}

.jobBtn {
    border: none;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    background-color: var(--white);
    color: var(--lightOrange);
    font-weight: 600;
    cursor: pointer;
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


