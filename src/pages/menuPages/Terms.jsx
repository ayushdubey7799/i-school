import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';

const Terms = () => {
    return (
        <StyledPage>
            <Header />
            <StyledContent>
                <span className='mainTitle'>Terms of Use</span>
                <span className='title'>Last Updated: 05 Aug 2023</span>
                <span className='text'>These Terms of Use ("Terms") govern your use of the AI-Based Interview Portal provided by IntelliView ("we," "our," or "us"). By accessing or using our AI-Based Interview Portal, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use our portal.</span>


                <div className='researchBox'>
                    <span className='title'>1. Acceptance of Terms</span>
                    <span className='text'>You must be of legal age in your jurisdiction or have the necessary legal authority to agree to these Terms. If you are using our portal on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these Terms.</span>
                </div>

                <span className='title'>2. Use of the IntelliView ("AI Based Interview Portal")</span>

                <div className='contactBox'>
                    <span className='title'>(a) Access and Registration:</span>
                    <span className='text'>- You may be required to create an account to access and use our portal. You agree to provide accurate and complete information during the registration process.</span>
                    <span className='text'>- You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.</span>
                </div>

                <div className='contactBox'>
                    <span className='title'>(b) Use Restrictions:</span>
                    <span className='text'>- You agree not to use our portal for any unlawful, fraudulent, or malicious purposes.</span>
                    <span className='text'>- You may not reverse engineer, decompile, disassemble, or attempt to access the source code of our portal.</span>
                    <span className='text'>- You may not use automated scripts or bots to access or interact with our portal.</span>
                </div>

                <div className='contactBox'>
                    <span className='title'>(c) Content Submission:</span>
                    <span className='text'>- You may be allowed to submit content, such as resumes or interview responses, through our portal. You retain ownership of your content, but by submitting it, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and distribute the content for the purpose of providing our services.</span>
                </div>

                <span className='title'>3. Privacy</span>
                <span className='text'>Your use of our AI-Based Interview Portal is also governed by our Privacy Statement. By using our portal, you consent to the collection, use, and sharing of your information as described in our Privacy Statement.</span>

                <span className='title'>4. Modifications and Termination</span>
                <span className='text'>(a) Modifications: We reserve the right to modify or update these Terms at any time. We will notify you of any material changes through our portal or other means. Your continued use of the portal after such changes constitutes your acceptance of the revised Terms.</span>
                <span className='text'>(b) Termination: We may terminate or suspend your access to the portal at our discretion, with or without cause, and without notice. You may also terminate your account at any time by contacting us.</span>


                <span className='title'>5. Intellectual Property</span>
                <span className='text'>(a) Ownership: Our portal, including all content, software, and technology, is owned or licensed by us and is protected by intellectual property laws.</span>
                <span className='text'>(b) Feedback: If you provide us with feedback or suggestions regarding our portal, you grant us the right to use and implement such feedback without any obligation to you.</span>


                <span className='title'>6. Disclaimer of Warranties</span>
                <span className='text'>Our AI-Based Interview Portal is provided "as is" and "as available" without any warranties of any kind, whether express or implied, including but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</span>


                <span className='title'>7. Limitation of Liability</span>
                <span className='text'>To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.</span>


                <span className='title'>8. Governing Law and Jurisdiction</span>
                <span className='text'>These Terms are governed by and construed in accordance with the laws of Noida, UP, India. Any disputes arising from or relating to these Terms will be subject to the exclusive jurisdiction of the courts located in Your Jurisdiction.</span>


                <span className='title'>9. Contact Us</span>
                <span className='text'>If you have any questions or concerns about these Terms, please contact us at legal@intelliview.in.</span>

                <span className='text'>By using our AI-Based Interview Portal, you agree to these Terms of Use. If you do not agree with these Terms, please do not use our portal.</span>

            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Terms



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

.title {
    word-wrap: break-word;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.7rem;
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
    gap: 0.7rem;
}
`

