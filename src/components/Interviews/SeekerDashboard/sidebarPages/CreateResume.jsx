import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const CreateResume = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <div className='topBox'>
                <span className='title'>Job-winning resume templates</span>
                <span className='subTitle'>Each resume template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</span>
                <button className='btn' onClick={() => navigate('/create-resume')}>Create My Resume</button>
            </div>
        </Box>
    )
}

export default CreateResume


const Box = styled.div`
width: 90%;
margin: 2rem auto;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
background-color: var(--white);
padding: 3rem 0;
border-radius: 1rem;

.topBox {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;

    .title {
        font-size: 2.5rem;
        font-weight: 700;
    }

    .subTitle {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.4rem;
    }

    .btn {
        background-color: var(--lightOrange);
        border: 0.1rem solid var(--lightOrange);
        padding: 0.7rem 1.2rem;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--white);
        border-radius: 0.5rem;
        cursor: pointer;
    }
}

.topBox span {
    text-align: center;
}


`


