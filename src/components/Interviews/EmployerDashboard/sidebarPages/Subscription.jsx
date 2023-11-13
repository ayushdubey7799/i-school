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
                    <span className='boxTitle'>Free</span>
                    <span className='boxSubTitle'>$0</span>

                    <button className='btn'>Contact Us</button>

                    <div className='mainFeature'>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 3 Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Audio Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> All Interview Platforms</span>
                    </div>
                </div>
                <div className='box'>
                    <span className='boxTitle'>Starter</span>
                    <span className='boxSubTitle'>Ask for Pricing</span>

                    <button className='btn'>Contact Us</button>

                    <div className='mainFeature'>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 10 Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Audio Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> All Interview Platforms</span>
                    </div>
                </div>
                <div className='box'>
                    <span className='boxTitle'>Growth</span>
                    <span className='boxSubTitle'>Ask for Pricing</span>

                    <button className='btn'>Contact Us</button>

                    <div className='mainFeature'>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> 50 Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Audio Interviews</span>
                        <span className='featureText'> <img src={ColoredDot} className='featureDot' /> All Interview Platforms</span>
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
margin: 2rem 0;




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
    align-items: center;
}

.boxTitle {
    font-size: 1.1rem;
    font-weight: 700;
}

.boxSubTitle {
    font-size: 1rem;
    font-weight: 500;
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
    margin-top: 1rem;
}


.mainFeature {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 0;
}


.featureDot {
    width: 0.6rem;
    height: 0.6rem;
}

.featureText {
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    text-wrap: break-word;
}


.title {
    font-size: 2.2rem;
    font-weight: 700;
}

.subTitle {
    font-size: 1.2rem;
    font-weight: 500;
    color: rgb(70, 78, 98);
}

`