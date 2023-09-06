import React from 'react'
import { styled } from 'styled-components'
import Header from '../LandingPage/Header'
import Footer from '../commonComponents/Footer'

const Support = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Customer Support:</span>
                <span className='title'>Get in Touch with IntelliView</span>

                <span className='text'>We're here to assist you on your journey to smarter, more efficient hiring through our AI-based interview portal, IntelliView. Whether you have questions, feedback, or need technical support, our dedicated team is ready to provide you with the assistance you need.</span>

                <span className='title'>Here's how you can reach out to us:</span>

                <span className='text'>Our customer support team is available to address your inquiries and concerns. We understand that timely assistance is crucial, and we're committed to providing you with prompt and helpful responses. Reach out to us at:</span>
                <div className='contactBox'>
                    <span className='text'>- <b>Email:</b> care@intelliview.in</span>
                    <span className='text'>- <b>Live Chat:</b> Visit our website and click on the live chat icon to connect with a representative in real-time.</span>
                </div>


                <span className='title'>General Inquiries:</span>
                <span className='text'>Have a general question or want to learn more about our services? We're here to provide you with the information you need. Feel free to contact our team at:</span>
                <div className='contactBox'>
                    <span className='text'>- <b>Email:</b> care@intelliview.in</span>
                    <span className='text'>- <b>Contact Form:</b> Visit our website and fill out the contact form, and we'll get back to you as soon as possible.</span>
                </div>

                <span className='title'>Technical Support:</span>
                <span className='text'>Encountering technical issues or need assistance with our platform? Our technical support experts are here to ensure a smooth experience. Reach out to us at:</span>
                <div className='contactBox'>
                    <span className='text'>- <b>Email:</b> care@intelliview.in</span>
                    <span className='text'>- <b>Troubleshooting Guide:</b> Check our online troubleshooting guide for quick solutions to common technical issues.</span>
                </div>

                <span className='title'>Partnerships and Collaboration:</span>
                <span className='text'>Interested in partnering with IntelliView or exploring collaboration opportunities? We're always open to discussions and new ventures. Contact our partnership team at:</span>
                <div className='contactBox'>
                    <span className='text'>- <b>Email:</b> care@intelliview.in</span>
                    <span className='text'>- <b>Partnership Inquiry Form:</b> Visit our website and complete the partnership inquiry form, and our team will be in touch with you.</span>
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
gap: 2rem;

.mainTitle {
    font-weight: 900;
    font-size: 1.5rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 1.7rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 1rem;
    line-height: 1.7rem;
    font-weight: 500;
    color:  rgb(70, 78, 98);
}

.contactBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
}

.researchBox {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}
`

