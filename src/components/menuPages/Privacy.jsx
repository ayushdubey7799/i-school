import React from 'react'
import { styled } from 'styled-components'
import Header from '../LandingPage/Header'
import Footer from '../commonComponents/Footer'

const Privacy = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Privacy Policy</span>
                <span className='title'>Last Updated: 05 Aug 2023</span>
                <span className='text'>At IntelliView, we take your privacy seriously. This Privacy Statement outlines our practices regarding the collection, use, and protection of your personal information when you use our AI-Based Interview Portal. Please read this statement carefully to understand how we handle your data.</span>

                <span className='title'>1. Information We Collect</span>
                <span className='title'>We collect two types of information:</span>

                <div className='contactBox'>
                    <span className='text'><b>a. Personal Information:</b></span>
                    <span className='text'>- Contact Information: This includes your name, email address, phone number, and mailing address.</span>
                    <span className='text'>- Professional Information: This includes your resume/CV, employment history, education history, skills, and any other information you provide during the interview process.</span>
                </div>

                <div className='contactBox'>
                    <span className='text'><b>b. Usage Data:</b></span>
                    <span className='text'>- Usage and Interaction Data: We collect data about your interactions with the portal, including interview responses, feedback, and performance metrics.</span>
                    <span className='text'>- Device and Log Data: We may collect information about your device, browser, IP address, and the pages you visit on our portal.</span>
                </div>

                <span className='title'>2. How We Use Your Information</span>
                <span className='title'>We use your information for the following purposes:</span>

                <div className='contactBox'>
                    <span className='text'>- To facilitate and improve the interview process.</span>
                    <span className='text'>- To analyze and improve the performance and accuracy of our AI algorithms.</span>
                    <span className='text'>- To communicate with you regarding your interviews, feedback, and updates to our service.</span>
                    <span className='text'>- To comply with legal obligations and protect our rights.</span>
                </div>


                <span className='title'>3. Data Security</span>
                <span className='text'>We take data security seriously and employ industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.</span>

                <span className='title'>4. Data Retention</span>
                <span className='text'>We retain your data for as long as necessary for the purposes described in this Privacy Statement, unless a longer retention period is required by law.</span>

                <span className='title'>5. Sharing of Information</span>
                <span className='text'>We may share your information with third parties in the following circumstances:</span>

                <div contactBox>
                    <span className='text'>- With our service providers who help us operate and improve our services.</span>
                    <span className='text'>- To comply with legal obligations, such as responding to lawful requests from government authorities.</span>
                    <span className='text'>- In connection with the sale, merger, or acquisition of all or part of our company.</span>
                </div>

                <span className='title'>6. Your Rights</span>
                <span className='text'>You have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your data. You can exercise these rights by contacting us at care@intelliview.in .</span>


                <span className='title'>7. Cookies and Tracking Technologies</span>
                <span className='text'>We may use cookies and similar tracking technologies to enhance your user experience. You can manage your cookie preferences through your browser settings.</span>

                <span className='title'>8. Third-Party Links</span>
                <span className='text'>Our portal may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. Please review their privacy statements before using their services.</span>

                <span className='title'>9. Changes to this Privacy Statement</span>
                <span className='text'>We may update this Privacy Statement to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes through our website or by other means.</span>

                <span className='title'>10. Contact Us</span>
                <span className='text'>If you have questions or concerns about this Privacy Statement or our data practices, please contact us at legal@intelliview.in.</span>


                <span className='text'>By using our AI-Based Interview Portal, you consent to the practices described in this Privacy Statement. Please make sure to review this statement periodically for any updates.</span>
            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Privacy



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
    font-size: 2rem;
}

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 1.2rem;
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

