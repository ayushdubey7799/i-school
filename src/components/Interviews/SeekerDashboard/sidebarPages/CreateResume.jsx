import React, { useState } from 'react'
import styled from 'styled-components'
import SelectCVTempPage from '../../../../pages/SelectCVTempPage';
import CommonModal from '../../../commonComponents/CommonModal';


const CreateResume = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Box>
            <div className='box1'>
                <CommonModal open={openModal} setOpen={setOpenModal} component={<SelectCVTempPage />} />
                <div className='btnBox'><button className='btn' onClick={() => setOpenModal(true)}>Create My Resume</button></div>
                <span className='titleCenter'>Build an AI-Powered Resume to Power Up Your Job Search</span>
                <span className='subTitle'>Your resume is often the first impression you make on a potential employer, so it's important to make it count. An AI-powered resume can help you stand out from the competition by highlighting your most relevant skills and experience, and tailoring it to each specific job you apply for.</span>
            </div>

            <div className='box2'>
                <span className='titleCenter'>How it works</span>
                <span className='subTitle'>To build an AI-powered resume, simply enter your skills and experience into our platform. Our AI will then analyze your data and generate a resume that is tailored to your specific needs. The resume will be formatted professionally and will include all of the relevant information that employers are looking for.</span>
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
        font-size: 1rem;
        font-weight: 600;
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
        font-family: var(--font);
    }
}


.box2 {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .title {
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        margin-top: 2rem;
    }

    .titleCenter {
        font-size: 1rem;
        font-weight: 600;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .subTitle {
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.4rem;
    }

}

`


