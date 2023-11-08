import React, { useState } from 'react'
import styled from 'styled-components';
import { profileData } from '../../../../utils/contantData';
import linkedin from '../../../../assets/icons/linkedinBlack.png'
import github from '../../../../assets/icons/githubBlack.png'
import callIcon from '../../../../assets/icons/Profile/call.png'
import emailIcon from '../../../../assets/icons/Profile/email.png'


const ProfileNew = () => {

    // const [profileData, setProfileData] = useState();

    return (
        <Box>
            <div className='topBox'>
                <img src={profileData.personalInfo.img} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{profileData.personalInfo.name}</span>
                    <div className='infoBox'>
                        <div className='infoBox1'>
                            <span className='text'><img src={callIcon} />{profileData.personalInfo.phone}</span>
                            <span className='text'><img src={emailIcon} />{profileData.personalInfo.email}</span>
                        </div>
                        <div className='infoBox2'>
                            <a href={profileData.personalInfo.linkedin}><img src={linkedin} className='socialIcon' />{profileData.personalInfo.linkedin.slice(0, 35)}</a>
                            <a href={profileData.personalInfo.github}><img src={github} className='socialIcon' />{profileData.personalInfo.github.slice(0, 30)}</a>
                        </div>
                    </div>
                </div>
                <button className='editBtn'>Edit Profile</button>
            </div>


            <div className='skillsMainBox'>
                <span className='mainTitle'>
                    <span>Skills</span>
                    {profileData.skills.length > 0 && <button>Add New</button>}
                </span>
                <span className='title'>Add top 5 skills here to increase your chances of getting shortlisted.</span>
                <div className='cardBox'>
                    {
                        profileData.skills.map((skill, index) => (
                            <div className='card'>
                                <span className='skill'>{skill.name}</span>
                                <span className='score'>{skill.score > 3 ? "Expert" : "Beginner"}</span>
                                <button className='btn'>Take Assessment</button>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='educationBox'>
                <span className='mainTitle'>
                    <span>Education</span>
                    {profileData.education.length > 0 && <button>Add New</button>}
                </span>
                <div className='cardBox'>
                    {
                        profileData.education.map((edu, index) => (
                            <div className='card'>
                                <span className='title'>{edu.degree}</span>
                                <span className='subTitle'>{edu.university}</span>
                                <span className='text'>{edu.year.split('-')[0]}-{edu.year.split('-')[1]} | {edu.courseType}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='projectBox'>
                <span className='mainTitle'>
                    <span>Projects</span>
                    {profileData.projects.length > 0 && <button>Add New</button>}
                </span>
                <div className='cardBox'>
                    {
                        profileData.projects.map((project, index) => (
                            <div className='card'>
                                <span className='title'>{project.title}</span>
                                <span className='text'>{project.date.split('-')[0]}-{project.date.split('-')[1]} | {project.status}</span>
                                <ul className='subTitle'>{
                                    project.description.map((desc) => (
                                        <li className='list'>{desc}</li>
                                    ))
                                }</ul>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='experienceBox'>
                <span className='mainTitle'>
                    <span>Employment</span>
                    {profileData.experience.length > 0 && <button>Add New</button>}
                </span>
                <div className='cardBox'>
                    {
                        profileData.experience.map((exp, index) => (
                            <div className='card'>
                                <span className='title'>{exp.company} | {exp.title}</span>
                                <span className='subTitle'>{exp.location}</span>
                                <span className='text'>{exp.date.split('-')[0]}-{exp.date.split('-')[1]}</span>
                                <div className='skillBox'>{
                                    exp.skillsUsed.map((skill) => (
                                        <span className='skill'>{skill}</span>
                                    ))
                                }</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='certificationBox'>
                <span className='mainTitle'>
                    <span>Certifications</span>
                    {profileData.certifications.length > 0 && <button>Add New</button>}
                </span>
                <div className='cardBox'>
                    {
                        profileData.certifications.map((cert, index) => (
                            <div className='card'>
                                <span className='title'>{cert.title}</span>
                                <span className='subTitle'>{cert.organization}</span>
                                <span className='text'>Issued {cert.date} to {cert.expirationDate}</span>

                                <button>View Certificate</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Box>
    )
}

export default ProfileNew

const Box = styled.div`
width: 90%;
padding: 3rem 3%;
margin: 0 auto 2rem auto;
min-height: 100vh;
display: flex;
flex-direction: column;
gap: 1.5rem;
align-items: center;



.topBox {
    display: flex;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;

    .middleBox {
        width: 65%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .name {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
        }


        .infoBox {
            display: flex;
            gap: 2rem;



            .infoBox1 {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                font-size: 0.8rem;

                span {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                img {
                    width: 0.9rem;

                }
            }

            .infoBox2 {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;

                a {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                    font-size: 0.8rem;
                    text-decoration: none;
                    color: var(--color);
                }

                .socialIcon {
                    width: 1.1rem;
                }
            }
        }
    }

    .profileImg {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 0.1rem solid var(--lightOrange);       
    }

    
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



.skillsMainBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;


    .mainTitle {
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        width: 100%;
        justify-content: space-between;


        button {
            background-color: var(--white);
            color: var(--lightOrange);
            border: 0.1rem solid var(--lightOrange);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }


    .title {
    font-size: 0.9rem;
    font-weight: 500;
    }

    .cardBox {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;

    }

    .card {
        background-color: #F7F8F9;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 1rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;

        .skill {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .score {
            font-size: 0.75rem;
            font-weight: 500;
            color: grey;
        }

        .btn {
            background-color: transparent;
            border: 0.08rem solid var(--color);
            color: var(--color);
            font-size: 0.8rem;
            font-weight: 400 !important;
            padding: 0.5rem 0.7rem;
            border-radius: 0.5rem;
            cursor: pointer;
        }
    }
}

.educationBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;


    .mainTitle {
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        width: 100%;
        justify-content: space-between;


        button {
            background-color: var(--white);
            color: var(--lightOrange);
            border: 0.1rem solid var(--lightOrange);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }

    .cardBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.1rem;


        .title {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .subTitle {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
        }

        .course {
            font-size: 0.7rem;
            font-weight: 400;
            border: 0.05rem solid lightgrey;
            border-radius: 0.5rem;
            padding: 0.1rem 0.4rem;
            margin-top: 0.2rem;
        }
    }
}


.projectBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;

    .mainTitle {
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        width: 100%;
        justify-content: space-between;


        button {
            background-color: var(--white);
            color: var(--lightOrange);
            border: 0.1rem solid var(--lightOrange);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }

    .cardBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.4rem;


        .title {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
        }

        .subTitle {
            display: flex;
            flex-direction: column;
            margin: 0rem;
            gap: 0.2rem;

            .list {
                font-size: 0.8rem;
            }
        }
    }
}



.experienceBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;

    .mainTitle {
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        width: 100%;
        justify-content: space-between;


        button {
            background-color: var(--white);
            color: var(--lightOrange);
            border: 0.1rem solid var(--lightOrange);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }

    .cardBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.2rem;


        .title {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .subTitle {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
        }


        .skillBox {
            display: flex;
            gap: 0.4rem;


            .skill {
                border: 0.05rem solid lightgrey;
                padding: 0.1rem 0.3rem;
                font-size: 0.7rem;
                border-radius: 0.3rem;
            }
        }
    }
}


.certificationBox {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
    border: 0.07rem solid lightgrey;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
    background-color: #FEFFFE;

    .mainTitle {
        font-size: 1.2rem;
        font-weight: 600;
        display: flex;
        width: 100%;
        justify-content: space-between;


        button {
            background-color: var(--white);
            color: var(--lightOrange);
            border: 0.1rem solid var(--lightOrange);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.8rem;
        }
    }

    .cardBox {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 0.2rem;

        .title {
            font-size: 0.9rem;
            font-weight: 600;
        }

        .subTitle {
            font-size: 0.8rem;
            font-weight: 500;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
        }

        button {
            background-color: var(--white);
            color: var(--color);
            border: 0.08rem solid var(--color);
            border-radius: 0.3rem;
            cursor: pointer;
            font-size: 0.75rem;
            margin-top: 0.5rem;
            padding: 0.3rem 0.5rem;
        }
    }
}


.hrLine {
    width:100%;
    border-top: 0.05rem solid lightgrey;
    border-radius: 0.2rem;
    align-self: center;
    box-shadow: 0 0.5px 0.5px rgba(0, 0, 0, 0.25);
  }

`
