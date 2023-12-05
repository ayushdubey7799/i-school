import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import linkedin from '../../../../assets/icons/linkedinBlack.png'
import website from '../../../../assets/icons/websiteIcon.png'
import callIcon from '../../../../assets/icons/Profile/call.png'
import emailIcon from '../../../../assets/icons/Profile/email.png'
import logo from '../../../../assets/IntelliViewSmallLogo.png'
import editIcon from '../../../../assets/icons/editBlack.png'

const EmployerProfileDetails = () => {
    const user = useSelector(state => state.auth.userData.user);
    const [companyProfile, setCompanyProfile] = useState({
        logo: logo,
        company: "IntelliView",
        coordinatorName: user.firstName.toUpperCase(),
        industry: "Recruitment",
        employees: "10-50",
        location: user.city.toUpperCase(),
        address: user.address.toUpperCase(),
        email: user.email,
        contact: user.primaryContact.toUpperCase(),
        legalContact: "+91 8000020000",
        linkedin: 'linkedin.com/in/intelliview',
        websiteUrl: 'https://intelliview.in/',
        clientCode: user.clientCode,
        profileId: user.profileId,
        userType: user.userType,
        userName: user.username,
    });

    const textAreaRef = useRef(null);
    const [aboutEdit, setAboutEdit] = useState(false);
    const [aboutCompany, setAboutCompany] = useState('An AI recruitment company leverages advanced artificial intelligence and machine learning technologies to revolutionize the traditional hiring process. By integrating cutting-edge algorithms and automation, these companies enhance talent acquisition efficiency, ensuring faster and more accurate candidate matching. AI recruitment platforms analyze vast amounts of data, including resumes, job descriptions, and candidate profiles, to identify the most suitable matches for specific roles. Through predictive analytics and natural language processing, these solutions streamline candidate screening, assessment, and interview processes. Ultimately, AI recruitment companies empower organizations to make data-driven hiring decisions, reduce time-to-fill, and discover top-tier talent in a competitive job market.')

    const handleAboutSave = () => {
        setAboutEdit(false);
    }

    useEffect(() => {
        // Focus and set the cursor at the end of the textarea when aboutEdit becomes true
        if (aboutEdit && textAreaRef.current) {
            const textLength = aboutCompany.length;
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(textLength, textLength);
        }
    }, [aboutEdit, aboutCompany]);

    console.log(user);

    return (
        <Box>
            <div className='topBox'>
                <img src={companyProfile.logo} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{companyProfile.company}</span>
                    <div className='infoBox'>
                        <a href={companyProfile.websiteUrl}><img src={website} className='socialIcon' />{companyProfile.websiteUrl}</a>
                        <a href={companyProfile.linkedin}><img src={linkedin} className='socialIcon' />{companyProfile.linkedin.slice(0, 35)}</a>
                    </div>
                </div>
                <span className='editBtn'><img src={editIcon} /></span>
            </div>

            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>Contact Details</span>
                    <span className='editBtn'><img src={editIcon} /></span>
                </span>

                <div className='contactBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Contact:</span> {companyProfile.contact}</span>
                        <span className='text'><span className='boldText'>Contact Name:</span> {companyProfile.coordinatorName}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Email:</span> {companyProfile.email}</span>
                        <span className='text'><span className='boldText'>Address:</span> {companyProfile.address} {companyProfile.location}</span>
                    </div>
                </div>

            </div>


            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>Account Information</span>
                    <span className='editBtn'><img src={editIcon} /></span>
                </span>

                <div className='contactBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>UserName:</span> {companyProfile.userName}</span>
                        <span className='text'><span className='boldText'>User Type:</span> {companyProfile.userType}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Coordinator Name:</span> {companyProfile.coordinatorName}</span>
                        <span className='text'><span className='boldText'>Industry:</span> {companyProfile.industry}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Employees:</span> {companyProfile.employees}</span>
                        <span className='text'><span className='boldText'>Client Code:</span> {companyProfile.clientCode}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Account Manager:</span> John Doe</span>
                        <span className='text'><span className='boldText'>Account Manager Contact:</span> 8000020000</span>
                    </div>
                </div>
            </div>

            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>About Company</span>
                    <span className='editBtn2'>{aboutEdit ? <button onClick={handleAboutSave}>Save</button> : <img src={editIcon} onClick={() => setAboutEdit(true)} />}</span>
                </span>

                <textarea
                    value={aboutCompany}
                    onChange={(e) => setAboutCompany(e.target.value)}
                    disabled={!aboutEdit}
                    rows={10}
                    className='textarea'
                    ref={textAreaRef} />
            </div>
        </Box>
    )
}

export default EmployerProfileDetails


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
        gap: 1rem;

        .name {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 2rem;
        }


        .infoBox {
            display: flex;
            gap: 1.5rem;

                span {
                    display: flex;
                    align-items: center;
                    gap: 0.4rem;
                }

                img {
                    width: 1rem;
                }

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

    .profileImg {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        border: 0.1rem solid var(--lightOrange);       
    }

    .editBtn {
        width: 1.3rem;
        cursor: pointer;
        padding-right: 1rem;

        img {
            width: 100%;
        }
    }
}





.contactMainBox {
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


        .editBtn {
            width: 1rem;
            cursor: pointer;
            padding-right: 1rem;
    
            img {
                width: 100%;
            }
        }

        .editBtn2 {
            padding-right: 1rem;
            display: flex;
            align-items: center;
            
            button {
                background-color: var(--lightOrange);
                padding: 0.3rem 0.6rem;
                font-size: 0.9rem;
                border: none;
                font-weight: 600;
                color: var(--white);
                border-radius: 0.3rem;
                cursor: pointer;
            }
            img {
                width: 1rem;
                cursor: pointer;
            }
        }
    }

    .contactBox {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .childBox {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .text {
            font-size: 0.75rem;
            font-weight: 400;
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .boldText {
            font-size: 0.9rem;
            font-weight: 600;
        }

    }

    .textarea {
        background-color: var(--white);
        padding: 1rem;
        line-height: 1.2rem;
        font-size: 0.9rem;
        border-radius: 0.75rem;
        outline-color: var(--grey);
        outline-width: 0.05rem;
        border: 0.075rem solid lightgrey;
    }
}
`