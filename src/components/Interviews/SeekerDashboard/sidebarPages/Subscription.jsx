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
                <div className='box1 box'>
                    <span className='boxTitle'>Start</span>
                    <span className='boxPricing'>Free</span>

                    <span className='boxSubTitle'>1 User</span>
                    <span className='boxSubTitle'>1 Project</span>

                    <button className='btn'>Order Now</button>
                </div>
                <div className='box2 box'>
                    <span className='boxTitle'>Basic</span>
                    <span className='boxPricing'>$19</span>

                    <span className='boxSubTitle'>5 Users</span>
                    <span className='boxSubTitle'>20 Projects</span>

                    <button className='btn'>Order Now</button>
                </div>
                <div className='box3 box'>
                    <span className='boxTitle'>Medium</span>
                    <span className='boxPricing'>$49</span>

                    <span className='boxSubTitle'>100 Users</span>
                    <span className='boxSubTitle'>100 Projects</span>

                    <button className='btn'>Order Now</button>
                </div>
                <div className='box4 box'>
                    <span className='boxTitle'>Expert</span>
                    <span className='boxPricing'>$129</span>

                    <span className='boxSubTitle'>Unlimited Users</span>
                    <span className='boxSubTitle'>Unlimited Projects</span>

                    <button className='btn'>Order Now</button>
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
margin: 2rem 0 3rem 0;




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

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color: var(--color);
    background-color: var(--white);
    gap: 1rem;
    width: 35%;
}

.box1 {
    background-color: #B4CCCF;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.box2 {
    background-color: lightgrey;
}

.box3 {
    background-color: #cec;
}

.box4 {
    background-color: var(--white);
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
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

.btn {
    font-size: 1rem;
    font-weight: 600;
    background-color: var(--white);
    color: var(--lightOrange);
    border: 0.05rem solid grey;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
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


