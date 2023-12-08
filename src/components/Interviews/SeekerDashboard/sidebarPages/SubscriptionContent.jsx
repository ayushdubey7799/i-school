import React from 'react'
import styled from 'styled-components'
import ColoredDot from '../../../../assets/icons/coloredDot.png'
import { useNavigate } from 'react-router'
import SubscriptionFeatureText from '../seekerCommonComponents/SubscriptionFeatureText'

const SubscriptionContent = () => {
    const navigate = useNavigate();

    return (
        <MainBox>
            <div className='box'>
                <span className='boxTitle'>Starter</span>
                <span className='boxSubTitle'>Free</span>

                <button className='btn' onClick={() => navigate('/signup')}>Start for Free</button>

                <div className='mainFeature'>
                    <SubscriptionFeatureText text='10 Interviews Per Month' />
                    <SubscriptionFeatureText text='One Profile' />
                    <SubscriptionFeatureText text='One Resume' />
                    <SubscriptionFeatureText text='Job Search & View' />
                    <SubscriptionFeatureText text='10 Jobs Apply' />
                    <SubscriptionFeatureText text='Email Support (NBD)' />
                    <SubscriptionFeatureText text='Basic Dashboard' />
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Professional</span>
                <span className='boxSubTitle'>99 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <SubscriptionFeatureText text='50 Interviews Per month' />
                    <SubscriptionFeatureText text='Detailed Profile' />
                    <SubscriptionFeatureText text='Upto 3 Resumes' />
                    <SubscriptionFeatureText text='AI CV Make' />
                    <SubscriptionFeatureText text='Cover Letter Maker' />
                    <SubscriptionFeatureText text='Job Search and View' />
                    <SubscriptionFeatureText text='Upto 50 job apply' />
                    <SubscriptionFeatureText text='Business Hours Email & Phone Support' />
                    <SubscriptionFeatureText text='Dashboard' />
                </div>
            </div>
            <div className='box'>
                <span className='boxTitle'>Expert</span>
                <span className='boxSubTitle'>199 INR / Month</span>

                <button className='btn'>Buy Now</button>

                <div className='mainFeature'>
                    <SubscriptionFeatureText text='200 Interviews Per month' />
                    <SubscriptionFeatureText text='AI powered Profile' />
                    <SubscriptionFeatureText text='Upto 6 Resumes' />
                    <SubscriptionFeatureText text='AI CV Maker' />
                    <SubscriptionFeatureText text='AI Cover letter maker' />
                    <SubscriptionFeatureText text='Job Search and View' />
                    <SubscriptionFeatureText text='Upto 200 job apply' />
                    <SubscriptionFeatureText text='24x7 Email & Phone Support' />
                    <SubscriptionFeatureText text='Dashboard' />
                    <SubscriptionFeatureText text='Reports' />
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
    font-size: 0.9rem;
    font-weight: 600;
    align-self: center;
}

.boxSubTitle {
    font-size: 0.8rem;
    font-weight: 400;
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
    margin-top: 0.5rem;
    align-self: center;
    font-family: var(--font);
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

`

