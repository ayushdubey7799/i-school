import React from 'react'
import styled from 'styled-components'
import whiteDot from '../../../../assets/icons/whiteDot.png'
import ColoredDot from '../../../../assets/icons/coloredDot.png'

const Subscription = () => {
    return (
        <MainBox>
            <div className='topBox'>
                <span className='title'>Plans that fit your need</span>
                <span className='subTitle'>Get started for free. No credit card needed.</span>
            </div>

            <div className='container'>
                <div className='box'>
                    <span className='boxTitle'>Starter</span>
                    <span className='boxSubTitle'>Free</span>

                    <button className='btn'>Start for Free</button>

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
            </div>
        </MainBox>
    )
}

export default Subscription


const MainBox = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 3rem;
align-items: center;
margin: 1rem auto;




.topBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}


.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    gap: 1rem;
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
    border: 0.1rem solid #19D8CE;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-top: 0.5rem;
    align-self: center;
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