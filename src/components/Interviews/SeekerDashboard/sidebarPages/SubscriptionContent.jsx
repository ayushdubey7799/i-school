import React from 'react'
import styled from 'styled-components'
import ColoredDot from '../../../../assets/icons/coloredDot.png'
import { useNavigate } from 'react-router'

const SubscriptionContent = () => {
    const navigate = useNavigate();

    return (
        <MainBox>
            <div className='box'>
                <span className='boxTitle'>Starter</span>
                <span className='boxSubTitle'>Free</span>

                <button className='btn' onClick={() => navigate('/signup')}>Start for Free</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 10 Interviews Per Month</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> One Profile</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> One Resume</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Job Search & View</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 10 Jobs Apply</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Email Support (NBD)</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Basic Dashboard</span>
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Professional</span>
                <span className='boxSubTitle'>99 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 50 Interviews Per month</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Detailed Profile</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Upto 3 Resumes</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> AI CV Make</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Cover Letter Maker</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Job Search and View</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Upto 50 job apply</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Business Hours Email & Phone Support</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Dashboard</span>
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Expert</span>
                <span className='boxSubTitle'>199 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 200 Interviews Per month</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> AI powered Profile</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Upto 6 Resumes</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> AI CV Maker</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> AI Cover letter maker</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Job Search and View</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Upto 200 job apply</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 24x7 Email & Phone Support</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Reports</span>
                </div>
            </div>
        </MainBox>
    )
}

export default SubscriptionContent


const MainBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 1rem;
margin: 1rem auto;
justify-content: space-evenly;


.topBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}


.box {
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    border: 0.05rem solid lightgrey;
    border-radius: 1rem;
    color: var(--color);
    background-color: var(--white);
    gap: 0.5rem;
    width: 35%;
    align-items: start;
}

.boxTitle {
    font-size: 1.1rem;
    font-weight: 700;
    align-self: center;
}

.boxSubTitle {
    font-size: 1rem;
    font-weight: 500;
    align-self: center;
}


.btn {
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--lightOrange);
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
    align-self: center;
}

.btn:hover {
    background: linear-gradient(to bottom, #8ACCDC, var(--lightOrange));
}


.mainFeature {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0;
}


.featureDot {
    width: 0.5rem;
    height: 0.5rem;
}

.featureText {
    font-size: 0.85rem;
    font-weight: 400;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-wrap: break-word;
}


`