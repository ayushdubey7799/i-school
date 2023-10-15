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
                <div className='box1'>

                    
                    <span className='boxTitle'>Basic Plan</span>
                    <span className='boxSubTitle'>Free forever</span>

                    <span className='boxPricing'>$0</span>

                    <button className='box1Btn'>Start for free</button>

                    <div className='mainFeature'>
                            <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Access to free-level interviews</span>
                            <span className='featureText'> <img src={ColoredDot} className='featureDot' /> AI-assisted feedback</span>
                            <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Access to Interview Practice</span>
                            <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Access to Interview Practice</span>
                            <span className='featureText'> <img src={ColoredDot} className='featureDot' /> Access to Interview Practice</span>
                    </div>
                </div>
                <div className='box2'>
                    <span className='boxTitle'>Premium Plan</span>
                    <span className='boxSubTitle'>Unlock all features</span>

                    <span className='boxPricing'>$60</span>

                    <button className='box2Btn'>Access Premium</button>

                    <div className='mainFeature'>
                            <span className='featureText'> <img src={whiteDot} className='featureDot' /> Access to ALL interviews</span>
                            <span className='featureText'> <img src={whiteDot} className='featureDot' /> AI-assisted feedback</span>

                            <span className='featureText'> <img src={whiteDot} className='featureDot' /> Access to Interview Practice</span>                            
                            <span className='featureText'> <img src={whiteDot} className='featureDot' /> Create custom questions and interviews</span>
                            <span className='featureText'> <img src={whiteDot} className='featureDot' /> Create custom questions and interviews</span>
                    </div>
                </div>
            </div>
        </MainBox>
    )
}

export default Subscription


const MainBox = styled.div`
width: 100%;
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
    width: 90%;
    justify-content: space-evenly;

}

.box1 {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 0.05rem solid lightgrey;
    border-radius: 1rem;
    color: var(--color);
    background-color: var(--white);
    gap: 1rem;
    width: 35%;
}

.box2 {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 0.05rem solid lightgrey;
    border-radius: 1rem;
    color: var(--white);
    background-color: #19D8CE;
    gap: 1rem;
    width: 35%;
}

.boxTitle {
    font-size: 1.4rem;
    font-weight: 700;
}

.boxSubTitle {
    font-size: 0.9rem;
    font-weight: 500;
    // color: rgb(91, 101, 128);
}

.boxPricing {
    font-size: 3rem;
    font-weight: 700;
}

.box1Btn {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: var(--white);
    color: var(--lightOrange);
    border: 0.1rem solid #19D8CE;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    cursor: pointer;
}

.box2Btn {
    font-size: 1.2rem;
    font-weight: 600;
    background-color: var(--white);
    color: #19D8CE;
    border: 0.1rem solid #19D8CE;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
    cursor: pointer;
    
}

.mainFeature {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0;
}


.featureDot {
    width: 0.8rem;
    height: 0.8rem;
}

.featureText {
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    gap: 1rem;
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