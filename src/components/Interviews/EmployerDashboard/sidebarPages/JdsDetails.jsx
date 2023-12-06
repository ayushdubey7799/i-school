import React from 'react'
import styled from "styled-components";
import experienceIcon from '../../../../assets/icons/JdDetails/experienceIcon.png'
import ctcIcon from '../../../../assets/icons/JdDetails/ctcIcon.png'
import locationIcon from '../../../../assets/icons/JdDetails/locationIcon.png'

const JdsDetails = ({ Jds }) => {

    const givenDate = new Date(Jds.createdAt.split('T')[0]);
    const todayDate = new Date();
    const differenceInMilliseconds = todayDate - givenDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const finalDate = differenceInDays > 0 ? `${differenceInDays} days ago` : "Today";


    return (
        <Box>
            <div className='basicDetails'>
                <div className='box1'>
                    <span className='jobTitle'>{Jds.title} <span className='jdId'>JD ID: {Jds.jdId}</span></span>
                    <span className='company'>Company Name</span>
                </div>

                <div className='box2'>
                    <span className='box2Text'><img src={experienceIcon} /> {Jds.exp} years</span>
                    <span className='verticalLine'>|</span>
                    <span className='box2Text'><img src={ctcIcon} /> {Jds.ctc}</span>
                    <span className='verticalLine'>|</span>
                    <span className='box2Text'><img src={locationIcon} /> {Jds.location}</span>
                </div>
                <div className='box3'>
                    <span className='box3Text'><span className='titleText'>Posted: </span> {finalDate}</span>
                    <span className='box3Text'><span className='titleText'>Openings: </span> {Jds.numOfReqs}</span>
                </div>
            </div>

            <div className='details'>
                {/* <div className='box1'>
                    <span className='title'>Job highlights</span>
                    <pre className='text jdSummary'>{Jds.jobSummary.replace(/\\n/g, '\n')}</pre>
                </div> */}

                <div className='box2'>
                    <span className='title'>Job description</span>
                    <span className='text'>{Jds.description}</span>
                </div>

                <div className='box3'>
                    <span className='text'><span className='boldText'>Company Type: </span>{Jds.companyType}</span>
                    <span className='text'><span className='boldText'>Department: </span>{Jds.department}</span>
                    <span className='text'><span className='boldText'>Employment Type: </span>{Jds.workType}</span>
                    <span className='text'><span className='boldText'>Notice Period: </span>{Jds.noticePeriod}</span>
                </div>

                <div className='box4'>
                    <span className='title'>Key Skills</span>
                    <div className='skillBox'>
                        {
                            Jds.skills.split(',').map((skill, i) => (
                                <span className='text'>{skill}</span>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Box>
    )
}

export default JdsDetails




const Box = styled.div`
display: flex;
flex-direction: column;
width: 95%;
gap: 2rem;
margin: 2rem auto;



.basicDetails {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #F4F4F4;
    border-radius: 0.75rem;
    padding: 1.5rem 2rem;


    .box1 {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;


        .jobTitle {
            font-size: 1.3rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;

            .jdId {
                font-size: 1rem;
                font-weight: 500;
            }
        }

        .company {
            font-size: 0.95rem;
            font-weight: 500;
        }
    }

    .box2 {
        display: flex;
        gap: 1rem;

        .box2Text {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 500;
        }

        img {
            width: 1rem;
        }

        .verticalLine {
            color: lightgrey;
            font-size: 1.3rem;
        }
    }

    .box3 {
        display: flex;
        gap: 2rem;

        .box3Text {
            font-size: 0.95rem;
            display: flex;
            gap: 0.3rem;
            font-weight: 400;

            .titleText {
                font-weight: 500;
            }
        }
    }
}



.details {
    display: flex;
    flex-direction: column;
    background-color: #F4F4F4;
    border-radius: 0.75rem;
    padding: 1.5rem 2rem;
    gap: 1.5rem;


    .box1 {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .text {
            font-size: 0.9rem;
            font-weight: 400;
        }

        .jdSummary {
            line-height: 1.1rem;
            font-size: 0.9rem;
            font-weight: 400;
        }
    }
    
    .box2 {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .text {
            font-size: 0.9rem;
            font-weight: 400;
        }
    }
    
    .box3 {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;


        .text {
            font-size: 0.9rem;
            font-weight: 500;
            display: flex;
            gap: 0.4rem;
        }

        .boldText {
            font-size: 0.9rem;
            font-weight: 600;
        }
    }
    
    .box4 {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .title {
            font-size: 1rem;
            font-weight: 600;
        }

        .skillBox {
            display: flex;
            flex-flow: row wrap;
            gap: 1rem;

            .text {
                font-size: 0.8rem;
                font-weight: 500;
                border: 0.08rem solid lightgrey;
                padding: 0.2rem 0.7rem;
                border-radius: 0.5rem;
            }
        }
    }
}

`


