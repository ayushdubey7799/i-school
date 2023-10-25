import React, { useState } from 'react'
import styled from 'styled-components';

const ProfileNew = () => {

    const [profileData, setProfileData] = useState();

    return (
        <Box>
            <div className='topBox'>
                <span className='name'>John Doe</span>
                <button className='editBtn'>Edit Profile</button>
            </div>

            <div className='emailBox'>
                <span className='mainText'>Email: </span>
                <span className='text'>johndoe@gmail.com</span>
            </div>


            <div className='emailBox'>
                <span className='mainText'>Mobile Number: </span>
                <span className='text'>+91 8890998899</span>
            </div>

            <div className='skillsMainBox'>
                <span className='mainText'>Skills: </span>
                <div className='skillsBox'>
                    <span className='skill'>Java</span>
                    <span className='skill'>HTML</span>
                    <span className='skill'>CSS</span>
                    <span className='skill'>JavaScript</span>
                    <span className='skill'>C++</span>
                    <span className='skill'>Spring</span>
                    <span className='skill'>React</span>
                    <span className='skill'>Redux</span>
                    <span className='skill'>C</span>
                    <span className='skill'>Spring Boot</span>
                    <span className='skill'>SQL</span>
                    <span className='skill'>Hibernate</span>
                    <span className='skill'>Maven</span>
                    <span className='skill'>NodeJS</span>
                </div>
            </div>
        </Box>
    )
}

export default ProfileNew

const Box = styled.div`
width: 80%;
padding: 3rem 5%;
margin: 0 auto 2rem auto;
min-height: 100vh;
background-color: var(--white);
border-radius: 1rem;
display: flex;
flex-direction: column;
gap: 1.5rem;
align-items: center;



.topBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.name {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 2rem;
}

.editBtn {
    background-color: var(--lightOrange);
    font-size: 0.95rem;
    color: var(--white);
    font-weight: 600;
    padding: 0.5rem 0.8rem;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
}

.emailBox {
    border: 0.05rem solid lightgrey;
    border-radius: 0.3rem;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;

    .mainText {
        font-size: 0.9rem;
    }

    .text {
        font-size: 1rem;
        font-weight: 500;

    }
}

.skillsMainBox {
    border: 0.05rem solid lightgrey;
    border-radius: 0.3rem;
    width: 100%;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    gap: 5rem;



    .skillsBox {
        display: flex;
        gap: 1rem;
        flex-flow: row wrap;
    }

    .mainText {
        font-size: 0.9rem;
    }

    .skill {
        background-color: var(--lightOrange);
        padding: 0.15rem 0.5rem;
        color: var(--white);
        font-size: 0.75rem;
        border: 0.085rem solid var(--lightOrange);
        font-weight: 500;
        border-radius: 0.3rem;

    }
}




`
