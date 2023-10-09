import React from 'react'
import styled from 'styled-components'
import emailIcon from '../../../../assets/icons/emailIcon.png'
import callIcon from '../../../../assets/icons/callIcon.png'

const CallSupport = () => {
    const phoneNumber = "+918888800000";

    const handleCallButtonClick = () => {
        const callLink = `tel:${phoneNumber}`;
        window.location.href = callLink;
    };


    return (
        <StyledDiv>

            <div className='mainBox'>
            <div className='box'>
                <img src={emailIcon} />
                <span className='title'>Email</span>
                <span className='subTitle'>care@intelliview.in</span>
            </div>

            <div className='box'>
                <img src={callIcon} />
                <span className='title'>Call</span>
                <span className='subTitle'>+91 8888800000</span>
            </div>
            </div>

            <button onClick={handleCallButtonClick} className='btn'>Call Now</button>
        </StyledDiv>
    )
}

export default CallSupport


const StyledDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem 0;
gap: 4rem;

.mainBox {
    display: flex;
    gap: 5rem;
    justify-content: center;
    width: 100%;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;

    img {
        width: 2.5rem;
    }

    .title {
        font-size: 1.3rem;
        font-weight: 600;
    }

    .subTitle {
        font-size: 1.1rem;
        font-weight: 600;
        color: #464E62;
    }
}

.btn {
    padding: 0.5rem 1rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    border-radius: 0.3rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;

}

`
