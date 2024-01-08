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
import { dateConversion } from '../../../../utils/timeZoneConversation';
import { addResume } from '../../../../functions/api/jobSeekers/addResume';
import { toast } from 'react-toastify';
import { getAllResumes } from '../../../../functions/api/jobSeekers/getAllResumes';
import deleteIcon from '../../../../assets/icons/delete.png'
import CommonDialog from '../../../commonComponents/CommonDialog';
import DeleteDialogContent from '../../../commonComponents/DeleteDialogContent';
import { deleteResume } from '../../../../functions/api/jobSeekers/deleteResume';
import { getBlobData } from '../../../../functions/api/resume/getBlobData';
import { getResourceById } from '../../../../functions/api/jobSeekers/getResource';
import { deleteSkill } from '../../../../functions/api/jobApplication/deleteSkill';
import { deleteEducation } from '../../../../functions/api/jobApplication/deleteEducation';
import { deleteProject } from '../../../../functions/api/jobApplication/deleteProject';
import { deleteEmployment } from '../../../../functions/api/jobApplication/deleteEmployment';
import { deleteCertification } from '../../../../functions/api/jobApplication/deleteCertification';


const ProfileNew = () => {

    // const [profileData, setProfileData] = useState();
    const profileId = useSelector((state) => state.auth.userData?.user?.profileId);
    const accessToken = useSelector((state) => state.auth.userData?.accessToken);
    const clientCode = useSelector(
        (state) => state.auth.userData?.user?.clientCode
    );
    const userId = useSelector((state) => state.auth.userData?.user?.id);

    const [openBasicDetails, setOpenBasicDetails] = useState(false);
    const [openSkills, setOpenSkills] = useState(false);
    const [openEducations, setOpenEducations] = useState(false);
    const [openProjects, setOpenProjects] = useState(false);
    const [openEmployments, setOpenEmployments] = useState(false);
    const [openCertifications, setOpenCertifications] = useState(false);

    const [userBasicDetails, setUserBasicDetails] = useState();
    const [userProfileData, setUserProfileData] = useState();
    const [mode, setMode] = useState();

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [resumeId, setResumeId] = useState('');

    const [resumeArr, setResumeArr] = useState([]);
    const [resumeFile, setResumeFile] = useState(null);
    const [resumeUploadTrigger, setResumeUploadTrigger] = useState(false);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);

                const uploadRes = await addResume(profileId, formData, accessToken);

                if (uploadRes) {
                    toast.success("Resume uploaded successfully", 5000);
                    setResumeUploadTrigger(!resumeUploadTrigger);
                }

            } catch (error) {
                const errMsg =
                    error?.message ||
                    "An error occurred. Please try again.";
                toast.error(errMsg, 5000);
            }
        }
    };

    useEffect(() => {
        const getAllResume = async () => {
            try {
                const allResumeRes = await getAllResumes(profileId, accessToken);

                if (allResumeRes) {
                    console.log(allResumeRes);
                    setResumeArr(allResumeRes.data);
                }
            } catch (error) {
                const errMsg =
                    error?.message ||
                    "An error occurred. Please try again.";
                toast.error(errMsg, 5000);
            }
        }
        getAllResume();

    }, [resumeUploadTrigger])


    const handleResumeDelete = async (id) => {
        try {

            const res = await deleteResume(profileId, id, accessToken);

            if (res) {
                toast.success('Resume deleted successfully');
                setOpenDeleteDialog(false);
                setResumeUploadTrigger(!resumeUploadTrigger);
            }
        } catch (error) {
            const errMsg =
                error?.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, 5000);
        }
    }

    const handleDownload = async (id, name) => {
        const res = await getBlobData(
            `api/media/downloadById?fileType=resume&id=${id}`,
            accessToken,
            clientCode
        );

        const a = document.createElement("a");
        a.href = res;
        a.setAttribute("download", name);
        a.click();
    };


    const [projectId, setProjectId] = useState('');
    const [projectData, setProjectData] = useState();
    const [certificateId, setCertificateId] = useState('');
    const [certificateData, setCertificateData] = useState();
    const [educationId, setEducationId] = useState('');
    const [educationData, setEducationData] = useState();
    const [skillId, setSkillId] = useState('');
    const [skillData, setSkillData] = useState();
    const [employmentId, setEmploymentId] = useState('');
    const [employmentData, setEmploymentData] = useState();

    const [trigger, setTrigger] = useState(false);

    const [openCommonDeleteDialog, setOpenCommonDeleteDialog] = useState(false);
    const [commonDeleteDialogText, setCommonDeleteDialogText] = useState('');
    const [commonDeleteId, setCommonDeleteId] = useState('');
    const [commonDeleteType, setCommonDeleteType] = useState('');

    const commonDeleteFunc = async (id) => {
        try {
            let res;

            if (commonDeleteType === 'skill') {
                res = await deleteSkill(profileId, id, accessToken);

            } else if (commonDeleteType === 'education') {
                res = await deleteEducation(profileId, id, accessToken);

            } else if (commonDeleteType === 'project') {
                res = await deleteProject(profileId, id, accessToken);

            } else if (commonDeleteType === 'employment') {
                res = await deleteEmployment(profileId, id, accessToken);

            } else if (commonDeleteType === 'certification') {
                res = await deleteCertification(profileId, id, accessToken);

            }

            if (res) {
                toast.success(`${commonDeleteDialogText} deleted successfully`, 5000);
                setOpenCommonDeleteDialog(false);
                setTrigger(!trigger);
            }

        } catch (error) {
            const errMsg = error.message || "an Error accured, please try again"
            toast.error(errMsg, 5000);
        }
    }


    useEffect(() => {
        const getProfileData = async () => {
            const res = await getProfile(profileId, accessToken);
            setUserProfileData(res?.data);
        }

        const getResourceData = async () => {
            const res = await getResourceById(userId, accessToken);
            console.log(res);
            setUserBasicDetails(res);
        }
        getResourceData();
        getProfileData();
    }, [trigger])

    useEffect(() => {
        if (!openSkills) {
            setTrigger(!trigger);
        }
    }, [openSkills])



    return (
        <Box>
            <ModalHOC openNewInterviewModal={openBasicDetails} setOpenNewInterviewModal={setOpenBasicDetails} component={<BasicDetails data={userBasicDetails} mode={mode} handleClose={() => setOpenBasicDetails(false)} id={userId} trigger={trigger} setTrigger={setTrigger} />} />
            <ModalHOC openNewInterviewModal={openSkills} setOpenNewInterviewModal={setOpenSkills} component={<SkillDetails data={skillData} mode={mode} handleClose={() => setOpenSkills(false)} id={skillId} trigger={trigger} setTrigger={setTrigger} />} />
            <ModalHOC openNewInterviewModal={openEducations} setOpenNewInterviewModal={setOpenEducations} component={<EducationDetails data={educationData} mode={mode} handleClose={() => setOpenEducations(false)} id={educationId} trigger={trigger} setTrigger={setTrigger} />} />
            <ModalHOC openNewInterviewModal={openProjects} setOpenNewInterviewModal={setOpenProjects} component={<ProjectDetails data={projectData} mode={mode} handleClose={() => setOpenProjects(false)} id={projectId} trigger={trigger} setTrigger={setTrigger} />} />
            <ModalHOC openNewInterviewModal={openEmployments} setOpenNewInterviewModal={setOpenEmployments} component={<EmploymentDetails data={employmentData} mode={mode} handleClose={() => setOpenEmployments(false)} id={employmentId} trigger={trigger} setTrigger={setTrigger} />} />
            <ModalHOC openNewInterviewModal={openCertifications} setOpenNewInterviewModal={setOpenCertifications} component={<CertificationDetails data={certificateData} mode={mode} handleClose={() => setOpenCertifications(false)} id={certificateId} trigger={trigger} setTrigger={setTrigger} />} />

            <CommonDialog
                open={openCommonDeleteDialog}
                handleClose={() => setOpenCommonDeleteDialog(false)}
                component={
                    <DeleteDialogContent
                        handleClose={() => setOpenCommonDeleteDialog(false)}
                        text={commonDeleteDialogText}
                        handleDelete={commonDeleteFunc}
                        deleteId={commonDeleteId}
                    />
                }
            />

            <div className='topBox'>
                <img src={profileData?.personalInfo?.img} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{userBasicDetails?.firstName} {userBasicDetails?.lastName}</span>
                    <div className='infoBox'>
                        <div className='infoBox1'>
                            <span className='text'><img src={callIcon} />{userBasicDetails?.primaryContact}</span>
                            <span className='text'><img src={emailIcon} />{userBasicDetails?.email}</span>
                        </div>
                        <div className='infoBox2'>
                            <a href={userBasicDetails?.linkedIn}><img src={linkedin} className='socialIcon' />{userBasicDetails?.linkedIn?.slice(0, 35)}</a>
                            <a href={userBasicDetails?.github}><img src={github} className='socialIcon' />{userBasicDetails?.github?.slice(0, 30)}</a>
                        </div>
                    </div>
                </div>
                <div className='editBox'>
                    <span className='editBtn'><img src={shareIcon} /></span>
                    <span className='editBtn' onClick={() => {
                        setMode('edit')
                        setOpenBasicDetails(true)
                    }}><img src={editIcon} /></span>
                </div>
            </div>


            <div className='skillsMainBox'>
                <span className='mainTitle'>
                    <span>Skills</span>
                    <button onClick={() => {
                        setMode('create')
                        setOpenSkills(true)
                    }}>{userProfileData?.skills?.length > 0 ? 'Add Skills' : 'Add Skills'}</button>
                </span>
                <span className='title'>Add top 5 skills here to increase your chances of getting shortlisted.</span>
                <div className='cardBox'>
                    {
                        userProfileData?.skills?.map((skill, index) => (
                            <div className='card'>
                                <span className='skill'>{skill?.name}
                                    <span className='editBtn'>
                                        <img src={deleteIcon} onClick={() => {
                                            setOpenCommonDeleteDialog(true)
                                            setCommonDeleteType('skill')
                                            setCommonDeleteDialogText('Skill')
                                            setCommonDeleteId(skill?.id)
                                        }} />
                                        <img src={editIcon} onClick={() => {
                                            setMode('edit')
                                            setOpenSkills(true)
                                            setSkillId(skill?.id)
                                            setSkillData(skill)
                                        }} /></span></span>
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
                    <button onClick={() => {
                        setMode('create')
                        setOpenEducations(true)
                    }}>{userProfileData?.educations?.length > 0 ? 'Add New' : 'Add'}</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.educations?.map((edu, index) => (
                            <div className='card'>
                                <span className='title'>{edu?.degree} <span className='editBtn'>
                                    <img src={deleteIcon} onClick={() => {
                                        setOpenCommonDeleteDialog(true)
                                        setCommonDeleteType('education')
                                        setCommonDeleteDialogText('Education')
                                        setCommonDeleteId(edu?.id)
                                    }} />
                                    <img src={editIcon} onClick={() => {
                                        setMode('edit')
                                        setOpenEducations(true)
                                        setEducationId(edu?.id)
                                        setEducationData(edu)
                                    }} /></span></span>
                                <span className='subTitle'>{edu?.school}</span>
                                <span className='text'>{edu?.startDate && dateConversion(edu?.startDate)} to {edu?.endDate && dateConversion(edu?.endDate)} | {edu?.courseType}</span>
                                <span className='text'>{edu?.grade} {edu?.gradeType === '0-10cgpa' ? 'CGPA' : edu?.gradeType === '0-4cgpa' ? 'CGPA' : '%'}</span>
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='projectBox'>
                <span className='mainTitle'>
                    <span>Projects</span>
                    <button onClick={() => {
                        setMode('create')
                        setOpenProjects(true)
                    }}>{userProfileData?.projects?.length > 0 ? 'Add New' : 'Add'}</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.projects?.map((project, index) => (
                            <div className='card'>
                                <span className='title'>{project?.title} <span className='editBtn'>
                                    <img src={deleteIcon} onClick={() => {
                                        setOpenCommonDeleteDialog(true)
                                        setCommonDeleteType('project')
                                        setCommonDeleteDialogText('Project')
                                        setCommonDeleteId(project?.id)
                                    }} />
                                    <img src={editIcon} onClick={() => {
                                        setMode('edit')
                                        setOpenProjects(true)
                                        setProjectId(project?.id)
                                        setProjectData(project)
                                    }} /></span></span>
                                <span className='text'>{project?.startDate && dateConversion(project?.startDate)} to {project?.endDate && dateConversion(project?.endDate)} | {project?.status}</span>
                                <span dangerouslySetInnerHTML={{ __html: project?.description }} className='desc' />
                            </div>
                        ))
                    }
                </div>
            </div>


            <div className='experienceBox'>
                <span className='mainTitle'>
                    <span>Employment</span>
                    <button onClick={() => {
                        setMode('create')
                        setOpenEmployments(true)
                    }}>{userProfileData?.employments?.length > 0 ? 'Add New' : 'Add'}</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.employments?.map((exp, index) => (
                            <div className='card'>
                                <span className='title'><>{exp?.orgDetail?.name} | {exp?.designation}</> <span className='editBtn'>
                                    <img src={deleteIcon} onClick={() => {
                                        setOpenCommonDeleteDialog(true)
                                        setCommonDeleteType('employment')
                                        setCommonDeleteDialogText('Employment')
                                        setCommonDeleteId(exp?.id)
                                    }} />
                                    <img src={editIcon} onClick={() => {
                                        setMode('edit')
                                        setOpenEmployments(true)
                                        setEmploymentId(exp?.id)
                                        setEmploymentData(exp)
                                    }} /></span></span>
                                <span className='subTitle'>{exp?.employmentType}</span>
                                <span className='text'>{exp?.startDate && dateConversion(exp?.startDate)} to {exp?.endDate && dateConversion(exp?.endDate)}</span>
                                <div className='skillBox'>{
                                    exp?.skillsUsed2?.map((skill) => (
                                        <span className='skill'>{skill?.name}</span>
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
                    <button onClick={() => {
                        setMode('create')
                        setOpenCertifications(true)
                    }}>{userProfileData?.certifications2?.length > 0 ? 'Add New' : 'Add'}</button>
                </span>
                <div className='cardBox'>
                    {
                        userProfileData?.certifications2?.map((cert, index) => (
                            <div className='card'>
                                <span className='title'>{cert?.title} <span className='editBtn'>
                                    <img src={deleteIcon} onClick={() => {
                                        setOpenCommonDeleteDialog(true)
                                        setCommonDeleteType('certification')
                                        setCommonDeleteDialogText('Certification')
                                        setCommonDeleteId(cert?.id)
                                    }} />
                                    <img src={editIcon} onClick={() => {
                                        setMode('edit')
                                        setOpenCertifications(true)
                                        setCertificateId(cert?.id)
                                        setCertificateData(cert)
                                    }} /></span></span>
                                <span className='subTitle'>{cert?.issuingOrganization}</span>
                                <span className='text'>Issued {cert?.issueDate && dateConversion(cert?.issueDate)} to {cert?.expirationDate && dateConversion(cert?.expirationDate)}</span>

                                <button>Verify Certificate</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='resumeBox'>
                <CommonDialog
                    open={openDeleteDialog}
                    handleClose={() => setOpenDeleteDialog(false)}
                    component={
                        <DeleteDialogContent
                            handleClose={() => setOpenDeleteDialog(false)}
                            text="Resume"
                            handleDelete={handleResumeDelete}
                            deleteId={resumeId}
                        />
                    }
                />
                <span className='mainTitle'>
                    Resume
                </span>
                <span className='title'>Add upto 3 Resumes</span>

                <div className='resumeChildBox'>
                    {
                        resumeArr.map((resume) => (
                            <div className='resumeCard'>
                                <span className='resumeText'><span onClick={() => handleDownload(resume?.id, resume?.modFilename)}>{resume?.srcFilename}</span> <span className='deleteIcon' onClick={() => {
                                    setOpenDeleteDialog(true)
                                    setResumeId(resume?.id)
                                }}><img src={deleteIcon} /></span></span>
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
    display: flex;
    gap: 0.3rem;
    margin-right: 0.5rem;

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
            display: flex;
            justify-content: space-between;
            width: 100%;

            .editBtn {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 0.5rem;
                gap: 0.3rem;
            
                img {
                    width: 1rem;
                }
            }
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
            width: 100%;
            display: flex;
            justify-content: space-between;

            .editBtn {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 1.5rem;
                gap: 0.5rem;
            
                img {
                    width: 1rem;
                }
            }
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
            width: 100%;
            display: flex;
            justify-content: space-between;

            .editBtn {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 1.5rem;
                gap: 0.5rem;
            
                img {
                    width: 1rem;
                }
            }
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
        }

        .desc {
            font-size: 0.85rem;
            margin-top: -1rem;
            margin-bottom: -0.5rem;
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
            width: 100%;
            display: flex;
            justify-content: space-between;

            .editBtn {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 1.5rem;
                gap: 0.5rem;
            
                img {
                    width: 1rem;
                }
            }
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
            width: 100%;
            display: flex;
            justify-content: space-between;

            .editBtn {
                cursor: pointer;
                display: flex;
                align-items: center;
                margin-right: 1.5rem;
                gap: 0.5rem;
            
                img {
                    width: 1rem;
                }
            }
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
        align-items: start;
        flex-direction: column;

        .deleteIcon {
            border: 0.075rem solid grey;
            border-radius: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.5rem;
            height: 1.5rem;

            img {
                width: 0.9rem;
                height: 0.9rem;
            }
        }

        .resumeCard {
            border-radius: 0.3rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
            box-sizing: border-box;
            cursor: pointer;


            .resumeText {
                font-size: 0.85rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 2rem;
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


