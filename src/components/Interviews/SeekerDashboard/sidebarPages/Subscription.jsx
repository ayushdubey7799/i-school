import React from 'react'
import styled from 'styled-components'
import ColoredDot from '../../../../assets/icons/coloredDot.png'
import SubscriptionContent from './SubscriptionContent'

const Subscription = () => {
    return (
        <MainBox>
            <div className='topBox'>
                <span className='title'>Plans that fit your need</span>
                <span className='subTitle'>Get started for free. No credit card needed.</span>
            </div>

            <SubscriptionContent />
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