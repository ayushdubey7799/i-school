import React from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const CreateResume = () => {
    const navigate = useNavigate();

    return (
        <Box>
            <div className='box1'>
                <div className='btnBox'><button className='btn' onClick={() => navigate('/create-resume')}>Create My Resume</button></div>
                <span className='titleCenter'>Build an AI-Powered Resume to Power Up Your Job Search</span>
                <span className='subTitle'>Your resume is often the first impression you make on a potential employer, so it's important to make it count. An AI-powered resume can help you stand out from the competition by highlighting your most relevant skills and experience, and tailoring it to each specific job you apply for.</span>
            </div>

            <div className='box2'>
                <span className='titleCenter'>How it works</span>
                <span className='subTitle'>To build an AI-powered resume, simply enter your skills and experience into our platform. Our AI will then analyze your data and generate a resume that is tailored to your specific needs. The resume will be formatted professionally and will include all of the relevant information that employers are looking for.</span>
            </div>

            <div className='box2'>
                <span className='titleCenter'>Benefits of using an AI-powered resume</span>
                <span className='subTitle'>There are many benefits to using an AI-powered resume, including:</span>
                <span className='subTitle'><b>Save time:</b> Our AI can generate a resume in minutes, saving you hours of time and effort.</span>
                <span className='subTitle'><b>Improve your chances of getting an interview:</b> An AI-powered resume is more likely to be noticed by employers, and it will help you stand out from the competition.</span>
                <span className='subTitle'><b>Get a tailored resume for each job you apply for:</b> Our AI can tailor your resume to each specific job you apply for, ensuring that you are highlighting your most relevant skills and experience.</span>
                <span className='subTitle'><b>Get feedback from our experts:</b> Our team of experts can review your resume and provide you with feedback, helping you to further improve your chances of getting an interview.</span>
            </div>

            <div className='box2'>
                <span className='titleCenter'>How to get started</span>
                <span className='subTitle'>To get started, simply visit our website and create an account. Once you have created an account, you can begin building your resume.</span>
            </div>

            <div className='box2'>
                <span className='titleCenter'>Here are a few tips for building an effective AI-powered resume:</span>
                <span className='subTitle'>Be as specific as possible when entering your skills and experience. The more detail you provide, the better our AI will be able to generate a tailored resume for you.</span>
                <span className='subTitle'>Use keywords that are relevant to the jobs you are applying for. This will help your resume to be noticed by employers who are using applicant tracking systems.</span>
                <span className='subTitle'>Proofread your resume carefully before submitting it to any employers.</span>

                <span className='title'>Start building your AI-powered resume today and give yourself an edge in the job market!</span>
            </div>

        </Box>
    )
}

export default CreateResume


const Box = styled.div`
width: 90%;
margin: 0rem auto 1rem auto;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
background-color: var(--white);
padding: 2rem 0;
border-radius: 1rem;
gap: 2rem;

.box1 {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .titleCenter {
        font-size: 1.4rem;
        font-weight: 500;
        text-align: center;
    }

    .subTitle {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.4rem;
    }

    .btnBox {
        width: 100%;
        display: flex;
        justify-content: end;
        margin-bottom: 2rem;
    }

    .btn {
        background-color: var(--lightOrange);
        border: 0.1rem solid var(--lightOrange);
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--white);
        border-radius: 0.5rem;
        cursor: pointer;
    }
}


.box2 {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.5rem;

    .title {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
        margin-top: 2rem;
    }

    .titleCenter {
        font-size: 1.2rem;
        font-weight: 500;
        width: 100%;
        display: flex;
        justify-content: start;
    }

    .subTitle {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.4rem;
    }

}

`


