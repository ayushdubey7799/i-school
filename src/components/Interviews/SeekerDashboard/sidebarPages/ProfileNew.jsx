import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { profileData } from '../../../../utils/contantData';
import linkedin from '../../../../assets/icons/linkedinBlack.png'
import github from '../../../../assets/icons/githubBlack.png'
import callIcon from '../../../../assets/icons/Profile/call.png'
import emailIcon from '../../../../assets/icons/Profile/email.png'
import addIcon from '../../../../assets/icons/addIcon.png'
import editIcon from '../../../../assets/icons/editBlack.png'
import shareIcon from '../../../../assets/icons/share.png'
import Rating from '@mui/material/Rating';
import BasicDetails from '../profileForms/BasicDetails';
import ModalHOC from '../ModalHOC';
import SkillDetails from '../profileForms/SkillDetails';
import EducationDetails from '../profileForms/EducationDetails';
import ProjectDetails from '../profileForms/ProjectDetails';
import EmploymentDetails from '../profileForms/EmploymentDetails';
import CertificationDetails from '../profileForms/CertificationDetails';
import { getProfile } from '../../../../functions/api/jobSeekers/getProfile';
import { useSelector } from 'react-redux';

const ProfileNew = () => {

    // const [profileData, setProfileData] = useState();

    const [openBasicDetails, setOpenBasicDetails] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openEducations, setOpenEducations] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openEmployments, setOpenEmployments] = useState(false);
    const [openCertifications, setOpenCertifications] = useState(false);

    const [userProfileData, setUserProfileData] = useState();

    const handleEdit = () => {

    }

    const [resumeArr, setResumeArr] = useState([]);
    const [resumeFile, setResumeFile] = useState([]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setResumeFile([...resumeFile, file]);
            setResumeArr([...resumeArr, file.name]);
        }
    };

    const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
    const accessToken = useSelector((state) => state.auth.userData?.accessToken);
    const userBasicDetails = useSelector((state) => state.auth.userData?.user);


    useEffect(() => {
        const getProfileData = async () => {
            const res = await getProfile(profileId, accessToken);
            setUserProfileData(res?.data);
        }
        getProfileData();
    }, [])


    return (
        <Box>
            <ModalHOC openNewInterviewModal={openBasicDetails} setOpenNewInterviewModal={setOpenBasicDetails} component={<BasicDetails handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openSkills} setOpenNewInterviewModal={setOpenSkills} component={<SkillDetails handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openEducations} setOpenNewInterviewModal={setOpenEducations} component={<EducationDetails handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openProjects} setOpenNewInterviewModal={setOpenProjects} component={<ProjectDetails handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openEmployments} setOpenNewInterviewModal={setOpenEmployments} component={<EmploymentDetails handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openCertifications} setOpenNewInterviewModal={setOpenCertifications} component={<CertificationDetails handleEdit={handleEdit} />} />

            <div className='topBox'>
                <img src={profileData.personalInfo.img} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{userBasicDetails?.firstName}</span>
                    <div className='infoBox'>
                        <div className='infoBox1'>
                            <span className='text'><img src={callIcon} />{userBasicDetails?.primaryContact}</span>
                            <span className='text'><img src={emailIcon} />{userBasicDetails?.email}</span>
                        </div>
                        <div className='infoBox2'>
                            <a href={profileData.personalInfo.linkedin}><img src={linkedin} className='socialIcon' />{profileData.personalInfo.linkedin.slice(0, 35)}</a>
                            <a href={profileData.personalInfo.github}><img src={github} className='socialIcon' />{profileData.personalInfo.github.slice(0, 30)}</a>
                        </div>
                    </div>
                </div>
                <div className='editBox'>
                    <span className='editBtn'><img src={shareIcon} /></span>
                    <span className='editBtn' onClick={() => setOpenBasicDetails(true)}><img src={editIcon} /></span>
                </div>
            </div>


            <div className='skillsMainBox'>
                <span className='mainTitle'>
                    <span>Skills</span>
                    <button onClick={() => setOpenSkills(true)}>Edit Skills</button>
                </span>
                <span className='title'>Add top 5 skills here to increase your chances of getting shortlisted.</span>
                <div className='cardBox'>
                    {
                        userProfileData?.skills?.map((skill, index) => (
                            <div className='card'>
                                <span className='skill'>{skill?.name}</span>
                                <Rating name="read-only" value={skill?.rating} readOnly className='score' />
                                {/* <span className='score'>{skill.score > 3 ? "Expert" : "Beginner"}</span> */}
                                <button className='btn'>Take Assessment</button>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='educationBox'>
                <span className='mainTitle'>
                    <span>Education</span>
                    <button onClick={() => setOpenEducations(true)}>Add New</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.educations?.map((edu, index) => (
                            <div className='card'>
                                <span className='title'>{edu?.degree}</span>
                                <span className='subTitle'>{edu?.school}</span>
                                <span className='text'>{edu?.startDate} to {edu?.endDate} | {edu?.courseType}</span>
                                <span className='text'>{edu?.grade} {edu?.gradeType}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='projectBox'>
                <span className='mainTitle'>
                    <span>Projects</span>
                    <button onClick={() => setOpenProjects(true)}>Add New</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.projects?.map((project, index) => (
                            <div className='card'>
                                <span className='title'>{project?.title}</span>
                                <span className='text'>{project?.startDate} to {project?.endDate} | {project?.status}</span>
                                <span className='desc'>{project?.description}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='experienceBox'>
                <span className='mainTitle'>
                    <span>Employment</span>
                    <button onClick={() => setOpenEmployments(true)}>Add New</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.employments?.map((exp, index) => (
                            <div className='card'>
                                <span className='title'>{exp?.orgName} | {exp?.designation}</span>
                                <span className='subTitle'>{exp?.employmentType}</span>
                                <span className='text'>{exp?.startDate} to {exp?.endDate}</span>
                                <div className='skillBox'>{
                                    exp?.skillsUsed?.split(',')?.map((skill) => (
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
                    <button onClick={() => setOpenCertifications(true)}>Add New</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.certifications2?.map((cert, index) => (
                            <div className='card'>
                                <span className='title'>{cert?.title}</span>
                                <span className='subTitle'>{cert?.issuingOrganization}</span>
                                <span className='text'>Issued {cert?.issueDate} to {cert?.expirationDate}</span>

                                <button>Verify Certificate</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='resumeBox'>
                <span className='mainTitle'>
                    Resume
                </span>
                <span className='title'>Add upto 3 Resumes</span>

                <div className='resumeChildBox'>
                    {
                        resumeArr.map((resume) => (
                            <div className='resumeCard'>
                                <span className='resumeText'>{resume.slice(0, 12)}</span>
                                <span className='resumeBtn'>Make Default</span>
                            </div>
                        ))
                    }

                    {
                        resumeArr.length < 3 &&

                        <div className='addResumeBox'>
                            <Label htmlFor='input'><img src={addIcon} /></Label>
                            <input
                                id='input'
                                type="file"
                                onChange={handleFileChange}
                                accept='.pdf, .doc'
                                style={{ display: 'none' }}
                            />
                        </div>
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

.editBox {
    display: flex;
    gap: 1rem;
    margin-right: 2rem;
}

.editBtn {
    cursor: pointer;
    width: 1rem;

    img {
        width: 100%;
    }
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
            font-size: 1.3rem;
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

        .desc {
            font-size: 0.85rem;
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

.resumeBox {
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
    }

    .title {
        font-size: 1rem;
        font-weight: 500;
        margin-top: -0.5rem;
    }

    .resumeChildBox {
        display: flex;
        gap: 1rem;
        align-items: center;


        .resumeCard {
            border: 0.1rem solid lightgrey;
            border-radius: 0.3rem;
            height: 8rem;
            width: 6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            box-sizing: border-box;
            cursor: pointer;


            .resumeText {
                font-size: 0.75rem;
                font-weight: 500;
            }

            .resumeBtn {
                background-color: var(--white);
                color: var(--color);
                border: 0.08rem solid var(--color);
                font-size: 0.7rem;
                font-weight: 600;
                padding: 0.2rem 0.3rem;
                border-radius: 0.5rem;
                margin: 0 0.3rem;
                box-sizing: border-box;
                display: none;
            }
        }

        .resumeCard:hover {

            .resumeBtn {
                display: block;
            }
        }

        .addBtn {
            width: 2rem;
            cursor: pointer;

            img {
                width: 100%;
            }
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

const Label = styled.label`
  font-weight: 600;
  margin: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;


  img {
    width: 2rem;
  }
  
  span {
    color: var(--color);
    
  }
`;