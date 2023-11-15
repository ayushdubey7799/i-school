import React from 'react'
import styled from 'styled-components'



const interviewData = [
    {
        roundTitle: 'Round 1',
        summary: 'The candidate demonstrated strong problem-solving skills and a solid understanding of algorithms and data structures. They successfully completed the coding challenge within the given time frame.',
        recommendation: 'Highly Recommend for Further Interviews',
        interviewer: {
            name: 'John Doe',
            role: 'Senior Software Engineer',
            contact: 'john.doe@example.com',
        },
    },
    {
        roundTitle: 'Round 2',
        summary: 'The candidate displayed excellent communication skills and provided thoughtful responses to behavioral questions. Their problem-solving scenarios showcased a good understanding of real-world challenges.',
        recommendation: 'Recommend for Further Interviews',
        interviewer: {
            name: 'Jane Smith',
            role: 'HR Manager',
            contact: 'jane.smith@example.com',
        },
    },
    {
        roundTitle: 'Round 3',
        summary: 'The candidate excelled in the in-depth technical discussion, demonstrating a deep understanding of system architecture and design principles. Their responses reflected a high level of expertise in relevant technologies.',
        recommendation: 'Strongly Recommend for Technical Team Evaluation',
        interviewer: {
            name: 'Bob Johnson',
            role: 'Tech Lead',
            contact: 'bob.johnson@example.com',
        },
    },
    {
        roundTitle: 'HR Round',
        summary: "The candidate's values align well with the company culture, and they expressed a genuine interest in contributing to the team.Salary expectations were discussed, and the candidate appears to be a good fit for the organization.",
        recommendation: 'Recommended for Final HR Approval',
        interviewer: {
            name: 'Alice Brown',
            role: 'HR Specialist',
            contact: 'alice.brown@example.com',
        },
    },
];


const SeekerInterviewDetails = () => {

    return (
        <Box>
            <div className='box1'>
                <span className='title'>Basic Details</span>
                <div className='textBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Name:</span> John Doe</span>
                        <span className='text'><span className='boldText'>Contact:</span> 8000020000</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Email:</span> johndoe@gmail.com</span>
                        <span className='text'><span className='boldText'>Profile ID:</span> 142002</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>UserName:</span> john2002</span>
                        <span className='resumeText'><span className='boldText'>Resume:</span><button>view resume</button></span>
                    </div>
                </div>
            </div>

            <div className='box2'>
                <span className='title'>Interview Details for JD ID: ...</span>
                <div className='cardMainBox'>
                    {
                        interviewData.map((interview, index) => (
                            <Card>
                                <span className='cardMainTitle'>{interview.roundTitle}</span>
                                <div className='cardBox'>
                                    <span className='cardTitle'>Summary/Feedback</span>
                                    <span className='cardText'>{interview.summary}</span>
                                </div>
                                <div className='cardBox'>
                                    <span className='cardTitle'>Recommendation</span>
                                    <span className='cardText'>{interview.recommendation}</span>
                                </div>
                                <div className='cardBox'>
                                    <span className='cardTitle'>Interviewer Details</span>
                                    <span className='nameText'><span className='boldNameText'>Name:</span>{interview.interviewer.name}</span>
                                    <span className='nameText'><span className='boldNameText'>Role:</span>{interview.interviewer.role}</span>
                                    <span className='nameText'><span className='boldNameText'>Contact:</span>{interview.interviewer.contact}</span>
                                </div>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </Box>
    )
}

export default SeekerInterviewDetails


const Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 2rem;



.box1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .title {
        font-size: 1rem;
        font-weight: 600;

    }

    .textBox {
        display: flex;
        flex-direction: row;
        gap: 3%;
        justify-content: space-between;

        .childBox {
            width: 30%;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }


        .text {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            font-size: 0.75rem;
            font-weight: 400;

            .boldText {
                font-size: 0.8rem;
                font-weight: 600;
            }
        }

        .resumeText {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
            font-size: 0.75rem;
            font-weight: 400;
            justify-content: start;
            align-items: start;

            .boldText {
                font-size: 0.8rem;
                font-weight: 600;
            }

            button {
                background-color: var(--white);
                border: 0.08rem solid  var(--color);
                border-radius: 0.3rem;
                cursor: pointer;
            }
        }
    }
}


.box2 {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;


    .title {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .cardMainBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}


`


const Card = styled.div`
display: flex;
flex-direction: column;
background-color: #f9f9f9;
padding: 1rem 2rem;
border-radius: 0.5rem;
box-sizing: border-box;
gap: 0.75rem;


.cardMainTitle {
    font-size: 1rem;
    font-weight: 600;
}

.cardBox {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;


    .cardTitle {
        font-size: 0.85rem;
        font-weight: 600;
    }

    .cardText {
        font-size: 0.8rem;
        font-weight: 400;
    }

    .nameText {
        font-size: 0.75rem;
        font-weight: 400;
        display: flex;
        gap: 1rem;
    }

    .boldNameText {
        font-size: 0.8rem;
        font-weight: 600;
    }
}
`

