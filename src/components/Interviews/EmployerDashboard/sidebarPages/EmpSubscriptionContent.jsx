import React from 'react'
import styled from 'styled-components'
import ColoredDot from '../../../../assets/icons/coloredDot.png'
import { useNavigate } from 'react-router'

const EmpSubscriptionContent = () => {
    const navigate = useNavigate();

    return (
        <MainBox>
            <div className='box'>
                <span className='boxTitle'>Start Up</span>
                <span className='boxSubTitle'>Free (60 days) 4999 Post that</span>

                <button className='btn' onClick={() => navigate('/signup')}>Start for Free</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 2 Job Post</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 25 Applications Per JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 2 JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 100 Resume Upload</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 2 JD / 100 Resume Matching</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Interview Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 40 AI JD Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Email Support NBD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Basic ATS</span>
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Growing</span>
                <span className='boxSubTitle'>9999 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 15 Job Post</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 100 Applications Per JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 8 JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 400 Resume Upload</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 400 Resume Bulk Upload</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 8 JD / 400 Resume Matching</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 200 AI, AI+Employer, Employer Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 50 Coding Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Email & Phone Support (9 AM-6PM)</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Interview Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Basic Reporting</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 5 Custom Tests</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> ATS</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Share on Social</span>
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Enterprise</span>
                <span className='boxSubTitle'>14999 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 80 Job Post</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 100 Applications Per JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 32 JD</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 1600 Resume Upload</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 4000 Resume Bulk Upload</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 8 JD / 4000 Resume Matching</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 800 AI, AI+Employer, Employer Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 200 Coding Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 24x7 Email & Phone Support </span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Interview Dashboard</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Advance Reporting</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 20 Custom Tests</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 200 MCQ Interviews</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Sourcing API integration</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Offer Processing</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Full ATS</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Share on Social</span>
                    <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Share with Agency</span>
                </div>
            </div>
        </MainBox>
    )
}

export default EmpSubscriptionContent



const MainBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
gap: 1rem;
margin: 1rem 0;
justify-content: space-evenly;


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
    font-size: 0.9rem;
    font-weight: 600;
    background-color: var(--lightOrange);
    color: var(--white);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 1rem;
    align-self: center;
    font-family: Quicksand, sans-serif;
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


.title {
    font-size: 1.5rem;
    font-weight: 700;
}

.subTitle {
    font-size: 1rem;
    font-weight: 500;
    color: rgb(70, 78, 98);
}

`