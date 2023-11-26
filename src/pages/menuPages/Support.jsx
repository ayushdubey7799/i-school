import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';
import bg1 from '../../assets/BackGround/bg1.jpg'
import img1 from '../../assets/VectorImg/support1.png'
import img2 from '../../assets/VectorImg/support2.png'

const Support = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Customer Support</span>

                <div className='top'>
                    <span className='topTitle'>Get in Touch with IntelliView</span>
                    <span className='topText'>We're here to assist you on your journey to smarter, more efficient hiring through our AI-based interview portal, IntelliView. Whether you have questions, feedback, or need technical support, our dedicated team is ready to provide you with the assistance you need.</span>
                </div>

                <div className='mainBox part'>
                    <div className='leftBox'>
                        <span className='smallTitle'>Here's how you can reach out to us</span>
                        <span className='text'>Our customer support team is available to address your inquiries and concerns. We understand that timely assistance is crucial, and we're committed to providing you with prompt and helpful responses. Reach out to us at:</span>
                        <div className='contactBox'>
                            <span className='text'> <b>Email:</b><a className="link" href="mailto:care@intelliview.in"
                                target="_blank"
                                rel="noreferrer"> care@intelliview.in</a></span>
                            <span className='text'> <b>Live Chat:</b> Visit our website and click on the live chat icon to connect with a representative in real-time.</span>
                        </div>
                    </div>

                    <div className='rightBox'>
                        <img src={img1} />
                    </div>
                </div>

                <div className='mainBox part'>

                    <div className='rightBox'>
                        <img src={img2} />
                    </div>

                    <div className='leftBox'>
                        <span className='smallTitle'>General Inquiries</span>
                        <span className='text'>Have a general question or want to learn more about our services? We're here to provide you with the information you need. Feel free to contact our team at:</span>
                        <div className='contactBox'>
                            <span className='text'> <b>Email:</b> <a className="link" href="mailto:care@intelliview.in"
                                target="_blank"
                                rel="noreferrer"> care@intelliview.in</a></span>
                            <span className='text'> <b>Contact Form:</b> Visit our website and fill out the contact form, and we'll get back to you as soon as possible.</span>
                        </div>
                    </div>
                </div>

                <div className='cardBox2 part'>
                    <div className='card2'>
                        <span className='cardTitle2'>Technical Support</span>
                        <span className='cardText2'>Encountering technical issues or need assistance with our platform? Our technical support experts are here to ensure a smooth experience. Reach out to us at:</span>
                        <div className='contactBox1'>
                            <span className='text'><b>Email:</b> <a className="link link1" href="mailto:care@intelliview.in"
                                target="_blank"
                                rel="noreferrer"> care@intelliview.in</a></span>
                            <span className='text'><b>Troubleshooting Guide:</b> Check our online troubleshooting guide for quick solutions to common technical issues.</span>
                        </div>
                    </div>

                    <div className='card2'>
                        <span className='cardTitle2'>Partnerships and Collaboration</span>
                        <span className='cardText2'>Interested in partnering with IntelliView or exploring collaboration opportunities? We're always open to discussions and new ventures. Contact our partnership team at:</span>
                        <div className='contactBox1'>
                            <span className='text'><b>Email:</b><a className="link link1" href="mailto:sales@intelliview.in"
                                target="_blank"
                                rel="noreferrer"> sales@intelliview.in </a></span>
                            <span className='text'><b>Partnership Inquiry Form:</b> Visit our website and complete the partnership inquiry form, and our team will be in touch with you.</span>
                        </div>
                    </div>
                </div>






                <span className='text'>We're excited to connect with you and provide you with the support and information you need. Your feedback and inquiries are valuable to us, and we're committed to helping you make the most of AI technology in your interview process. Contact us today, and let's embark on the journey of smarter hiring together!</span>



            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Support

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
gap: 1rem;

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
    align-items: center;
    justify-content: center;
}

.part {
    margin-top: 2rem;
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

.title {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    padding: 2rem 0rem 2rem 0rem;
}


.text {
    word-wrap: break-word;
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.box {
    display: flex;
    flex-direction: column;
    gap: 0;
}

.contactBox {
    display: flex;
    flex-direction: column;
}

.contactBox1 {
    display: flex;
    flex-direction: column;
}

.contactBox1 > .text{
    color: white;
}

.cardBox2 {
    display: flex;
    flex-flow: row wrap;
    column-gap: 5%;
    row-gap: 2rem;
    background: linear-gradient(to top, #99A6FF, var(--lightOrange));
    color: white;
    padding: 2rem 5%;
    border-radius: 1rem;
    justify-content: center;
}

.card2 {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.cardTitle2 {
    font-size: 1.1rem;
    font-weight: 600;
    text-align: center;
}

.cardText2 {
    text-align: start;
    font-size: 1rem;
    line-height: 1.5rem;
}

.link {
    color: var(--lightOrange);
    text-decoration: none;

}

.link:hover {
    text-decoration: underline;
}

.link1 {
    color: var(--white);
}

`

