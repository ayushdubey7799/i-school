import React from 'react'
import styled from 'styled-components'
import EmpSubscriptionContent from '../../components/Interviews/EmployerDashboard/sidebarPages/EmpSubscriptionContent'
import SubscriptionContent from '../../components/Interviews/SeekerDashboard/sidebarPages/SubscriptionContent'
import Header from '../../components/LandingPage/Header'
import Footer from '../../components/commonComponents/Footer'

const PricingPlan = () => {
    return (
        <Main>
            <Header />
            <MainBox>
                <div className='box'>
                    <span className='title'>Pricing Plans for Employer</span>
                    <EmpSubscriptionContent />
                </div>

                <div className='box'>
                    <span className='title'>Pricing Plans for JobSeeker</span>
                    <SubscriptionContent />
                </div>
            </MainBox>
            <Footer />
        </Main>
    )
}

export default PricingPlan


const Main = styled.div`
display: flex;
width: 100%;
flex-direction: column;

`

const MainBox = styled.div`
display: flex;
flex-direction: column;
width: 80%;
margin: 6rem auto 2rem auto;
gap: 2rem;


.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    .title {
        font-size: 1.2rem;
        font-weight: 700;
    }
}

`
