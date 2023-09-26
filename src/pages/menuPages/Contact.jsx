import React from 'react'
import { styled } from 'styled-components'
import Header from '../../components/LandingPage/Header';
import Footer from '../../components/commonComponents/Footer';
import contactMail from '../../assets/contactMail.png'
import contactPartner from '../../assets/contactPartner.png'
import { useNavigate } from 'react-router'


const Contact = () => {
    const navigate = useNavigate();

    return (
        <StyledPage>
            <Header />
            <StyledContent>

                <div className='topBox'>
                    <span className='mainTitle'>Contact Us</span>
                    <span className='titleTop'>Have any questions? We'd love to hear from you.</span>
                </div>


                <div className='cardBox'>
                    <div>
                        <span className='title'>Press</span>
                        <span className='text'>Are you interested in our latest news or working on a IntelliView story and need to get in touch?</span>
                        <button className='btn' onClick={() => navigate('/about')}>Visit Press Page</button>
                    </div>
                    <div>
                        <span className='title'>Help & Support</span>
                        <span className='text'>Our support team is spread across the globe to give you answers fast.</span>
                        <button className='btn' onClick={() => navigate('/support')}>Visit Support Page</button>
                    </div>
                    <div>
                        <span className='title'>Sales</span>
                        <span className='text'>Get in touch with our sales team to see how we can work together.</span>
                        <button className='btn' onClick={() => navigate('/sales')}>Contact Sales</button>
                    </div>
                </div>

                <div className='bottomContainer'>
                    <img src={contactPartner} />
                    <span className='title'>Partnership Requests</span>
                    <span className='text'>sales@intelliview.in</span>
                </div>

                <div className='bottomContainer'>
                    <img src={contactMail} />
                    <span className='title'>Mailing Address</span>
                    <span className='text'>Miledge Technologies</span>
                    <span className='text'>Sector 79, Noida 201301 IN</span>
                </div>

            </StyledContent>
            <Footer />
        </StyledPage>
    )
}

export default Contact

export const StyledPage = styled.div`
width: 100%;
background-color: var(--white);
color: black;
display: flex;
flex-direction: column;

`

export const StyledContent = styled.div`
margin-top: 10rem;
margin-bottom: 3rem;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10%;
margin-right: 10%;
gap: 4rem;

.mainTitle {
    font-weight: 900;
    font-size: 1.7rem;
}

.titleTop {
    font-weight: 500;
    font-size: 1.3rem;
}

.title {
    word-wrap: break-word;
    font-weight: 1000;
    font-size: 1.3rem;
    line-height: 1.7rem;
    color:  var(--color);
}

.text {
    word-wrap: break-word;
    font-size: 1rem;
    line-height: 1.7rem;
    font-weight: 600;
    color:  rgb(70, 78, 98);
}

.bottomContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
}

.bottomContainer > img {
    width: 5rem; 
}

.cardBox {
    display: flex;
    flex-direction: row;
    gap: 3%;
}

.topBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.cardBox > div {
    display: flex;
    width: 30%;
    flex-direction: column;
    align-items: center;
    padding-right: 3rem;
    text-align: center;
    justify-content: space-between;
    gap: 1rem;
}

.btn {
    font-size: 1rem;
    font-weight: 600;
    color: var(--lightOrange);
    background-color: var(--backgroundColor);
    border: 0.1rem solid var(--lightOrange);
    padding: 0.7rem 1.3rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

`

