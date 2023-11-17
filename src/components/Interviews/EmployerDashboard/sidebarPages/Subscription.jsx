import React from 'react'
import styled from 'styled-components'
import EmpSubscriptionContent from './EmpSubscriptionContent'

const Subscription = () => {
    return (
        <MainBox>
            <div className='topBox'>
                <span className='title'>Plans that fit your need</span>
                <span className='subTitle'>Get started for free. No credit card needed.</span>
            </div>
            <EmpSubscriptionContent />
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
margin: 1rem 0;


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