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
                IntelliView offers comprehensive process automation, minimizing manual efforts in recruitment. Our solution streamlines the entire hiring process by eliminating initial sourcing, shortlisting efforts, and the first rounds of interviews. With highly customizable AI-powered systems, we ensure the delivery of top talent, providing peace of mind throughout the application life cycle. This not only optimizes your hiring process but also reduces costs and time spent on each hire, allowing you to invest those resources in further growth.
            </span>

            <div className='cardBox'>
                <div className='card'>
                    <img src={img1} />
                    <span className='cardText'>Leverage the potential of Natural Language Search technology to optimize the value derived from your current CRM database.</span>
                </div>
                <div className='card'>
                    <img src={img2} />
                    <span className='cardText'>Harness current data rapidly and effectively.</span>
                </div>
                <div className='card'>
                    <img src={img3} />
                    <span className='cardText'>Consolidate and simplify online resourcing operations.</span>
                </div>
                <div className='card'>
                    <img src={img4} />
                    <span className='cardText'>Utilize every accessible source, including the presently available pool of candidates.</span>
                </div>
                <div className='card'>
                    <img src={img5} />
                    <span className='cardText'>Enhance the efficiency of recruiters and sourcers.</span>
                </div>
                <div className='card'>
                    <img src={img6} />
                    <span className='cardText'>Minimize the time required to provide clients with the most suitable resumes and CVs.</span>
                </div>
                <div className='card'>
                    <img src={img7} />
                    <span className='cardText'>Evaluate the effectiveness of all resource-related activities.</span>
                </div>
                <div className='card'>
                    <img src={img8} />
                    <span className='cardText'>Assess the ROI of your online CV expenditure.</span>
                </div>
                <div className='card'>
                    <img src={img9} />
                    <span className='cardText'>Effortlessly construct your CRM database using the highest-quality data and available candidates.</span>
                </div>
            </div>
        </Box>
    )
}

export default BenefitsSection


const Box = styled.div`
width: 90%;
margin: 2.5rem auto;
display: flex;
flex-direction: column;

.title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.text {
    font-size: 0.9rem;
    font-weight: 500;
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
            line-height: 1.1rem;
        }

        img {
            width: 3.5rem;
        }
    }
}
`
