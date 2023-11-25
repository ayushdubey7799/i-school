import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';

const Disclaimer = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Disclaimer</span>
                <span className='title'>Last Updated: 05 Aug 2023</span>

                <span className='text'>The AI-Based Interview Portal provided by Intelliview ("we," "our," or "us") offers a platform for interview preparation and practice using artificial intelligence-driven tools. Please read this disclaimer carefully before using our portal.</span>

                <div className='researchBox'>
                    <span className='title'>1. General Information</span>
                    <span className='text'>(a) Purpose: Our AI-Based Interview Portal is designed for educational and practice purposes to assist individuals in improving their interview skills. It may include features such as mock interviews, feedback, and interview-related content.</span>
                    <span className='text'>(b) Not a Guarantee: Your use of this portal does not guarantee job placement, interview success, or any specific outcomes. Success in interviews depends on various factors, including your qualifications, performance, and the specific requirements of employers.</span>
                </div>


                <div className='researchBox'>
                    <span className='title'>2. AI-Based Features</span>
                    <span className='text'>(a) AI Evaluation: Our portal uses artificial intelligence to evaluate and provide feedback on interview responses. While we strive for accuracy, AI-based evaluations are not infallible and may not fully capture nuances or context.</span>
                    <span className='text'>(b) User Discretion: Users should exercise their judgment and consider AI-generated feedback as a tool for improvement rather than as the sole determinant of their interview readiness.</span>
                </div>


                <div className='researchBox'>
                    <span className='title'>3. Content</span>
                    <span className='text'>(a) User-Generated Content: Users may submit content, such as resumes or interview responses, through our portal. We do not endorse or guarantee the accuracy, completeness, or quality of user-generated content.</span>
                    <span className='text'>(b) Third-Party Content: Our portal may contain links to third-party websites or resources. We do not endorse or take responsibility for the content, accuracy, or availability of such external sites.</span>
                </div>


                <div className='researchBox'>
                    <span className='title'>4. No Professional Advice</span>
                    <span className='text'>The information and resources provided through our portal do not constitute professional advice. They are not a substitute for consulting with a qualified career advisor, human resources professional, or other experts in interview preparation.</span>
                </div>

                <div className='researchBox'>
                    <span className='title'>5. Privacy</span>
                    <span className='text'>Your use of our AI-Based Interview Portal is also subject to our Privacy Statement, which governs how we collect, use, and protect your personal information. Please review this statement for information on data handling practices.</span>
                </div>

                <div className='researchBox'>
                    <span className='title'>6. Limitation of Liability</span>
                    <span className='text'>To the maximum extent permitted by applicable law, we shall not be liable for any damages, losses, or injuries arising from the use of our portal, including but not limited to, indirect, incidental, special, consequential, or punitive damages.</span>
                </div>

                <div className='researchBox'>
                    <span className='title'>7. Changes to Disclaimer</span>
                    <span className='text'>We may update this disclaimer as necessary. Any updates will be posted on our portal. Your continued use of the portal after changes are made constitutes your acceptance of the updated disclaimer.</span>
                </div>


                <div className='researchBox'>
                    <span className='title'>8. Contact Us</span>
                    <span className='text'>If you have any questions or concerns about this disclaimer, please contact us at legal@intelliview.in.</span>
                </div>

                <span className='text'>By using our AI-Based Interview Portal, you acknowledge that you have read and understood this disclaimer and agree to its terms. If you do not agree with this disclaimer, please refrain from using our portal.</span>

            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Disclaimer



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

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.3rem;
    color:  rgb(70, 78, 98);
}

.text {
    word-wrap: break-word;
    font-size: 0.8rem;
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
    gap: 0.3rem;
}
`

