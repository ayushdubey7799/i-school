import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/HomePageBenefits/img1.png'
import img2 from '../../assets/HomePageBenefits/img2.png'
import img3 from '../../assets/HomePageBenefits/img3.png'
import img4 from '../../assets/HomePageBenefits/img4.png'
import img5 from '../../assets/HomePageBenefits/img5.png'
import img6 from '../../assets/HomePageBenefits/img6.png'
import img7 from '../../assets/HomePageBenefits/img7.png'
import img8 from '../../assets/HomePageBenefits/img8.png'
import img9 from '../../assets/HomePageBenefits/img9.png'

const BenefitsSection = () => {
    return (
        <Box>
            <span className='title'>The Benefits</span>
            <span className='text'>
                IntelliView Search resume matching software offers advanced CV searching capability and delivers a dramatic reduction in time to shortlist the most suitable and available candidates, creating an impressive improvement in productivity.
            </span>

            <div className='cardBox'>
                <div className='card'>
                    <img src={img1} />
                    <span className='cardText'>Maximize the value of your existing CRM database with Natural Language Search technology</span>
                </div>
                <div className='card'>
                    <img src={img2} />
                    <span className='cardText'>Exploit existing data quickly and efficiently</span>
                </div>
                <div className='card'>
                    <img src={img3} />
                    <span className='cardText'>Unify and streamline online resourcing activity</span>
                </div>
                <div className='card'>
                    <img src={img4} />
                    <span className='cardText'>Leverage all available sources, and currently available candidate community</span>
                </div>
                <div className='card'>
                    <img src={img5} />
                    <span className='cardText'>Increase productivity of recruiters and sourcers</span>
                </div>
                <div className='card'>
                    <img src={img6} />
                    <span className='cardText'>Reduce time to deliver the best-matched resumes and CVs to clients</span>
                </div>
                <div className='card'>
                    <img src={img7} />
                    <span className='cardText'>Measure performance of all resourcing activities</span>
                </div>
                <div className='card'>
                    <img src={img8} />
                    <span className='cardText'>Calculate your return against online CV spend</span>
                </div>
                <div className='card'>
                    <img src={img9} />
                    <span className='cardText'>Easily build your own CRM database with the best-quality data and candidates available</span>
                </div>
            </div>
        </Box>
    )
}

export default BenefitsSection


const Box = styled.div`
width: 90%;
margin: 2rem auto;
display: flex;
flex-direction: column;

.title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.text {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
}

.cardBox {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    margin-top: 3rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    row-gap: 3rem;

    .card {
        display: flex;
        width: 30%;
        flex-direction: row;
        gap: 5%;

        .cardText {
            font-size: 0.9rem;
            font-weight: 500;
            line-height: 1.2rem;
        }

        img {
            width: 5rem;
        }
    }
}
`
