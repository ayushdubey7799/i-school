import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import linkedin from '../../../../assets/icons/linkedinBlack.png'
import website from '../../../../assets/icons/websiteIcon.png'
import callIcon from '../../../../assets/icons/Profile/call.png'
import emailIcon from '../../../../assets/icons/Profile/email.png'
import logo from '../../../../assets/IntelliViewSmallLogo.png'
import editIcon from '../../../../assets/icons/editBlack.png'
import { getEmployer } from '../../../../functions/api/employers/profile/getEmployer';
import ModalHOC from '../../SeekerDashboard/ModalHOC';
import BasicDetails from '../profileForms/BasicDetails';
import ContactDetails from '../profileForms/ContactDetails';
import AccountDetails from '../profileForms/AccountDetails';
import { editEmployerDetails } from '../../../../functions/api/employers/profile/editEmployerDetails';
import { toast } from 'react-toastify';
import Saved from '../../../commonComponents/infoDialog/Saved';
import { formatRole } from '../../../../utils/globalFunctions';
import { useJwt } from 'react-jwt';
import ReactQuill from 'react-quill';


const EmployerProfileDetails = () => {
    const accessToken = useSelector((state) => state.auth.userData.accessToken);
    const clientCode = useSelector((state) => state.auth.userData.user.clientCode);

    const [user, setUser] = useState();

    const [userRole, setUserRole] = useState('');
    const decodedToken = useJwt(accessToken);

    const [formData, setFormData] = useState();

    const [profileTrigger, setProfileTrigger] = useState(false);
    const [openBasicDetails, setOpenBasicDetails] = useState(false);
    const [openContactDetails, setOpenContactDetails] = useState(false);
    const [openAccountDetails, setOpenAccountDetails] = useState(false);
    const [companyDesc, setCompanyDesc] = useState('');

    const [savedPopup, setSavedPopup] = useState(false);

    const textAreaRef = useRef(null);
    const [aboutEdit, setAboutEdit] = useState(false);

    useEffect(() => {
        // Focus and set the cursor at the end of the textarea when aboutEdit becomes true
        if (aboutEdit && textAreaRef.current) {
            const textLength = user?.companyDescription?.length;
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(textLength, textLength);
        }
    }, [aboutEdit, user?.companyDescription]);

    useEffect(() => {
        const getUser = async () => {
            const res = await getEmployer(accessToken, clientCode);
            if (res) {
                setUser(res?.data);
                setCompanyDesc(res?.data?.companyDescription);
            }
        }
        getUser();
    }, [profileTrigger]);

    useEffect(() => {
        setFormData(user);
    }, [openBasicDetails, openContactDetails, openAccountDetails, profileTrigger, aboutEdit])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (companyDesc !== '') {
            setFormData({
                ...formData,
                companyDescription: companyDesc,
            })
        }
    }, [companyDesc])


    const handleEdit = async () => {
        try {
            const editRes = await editEmployerDetails(formData, accessToken, clientCode);

            if (editRes) {
                console.log(editRes);
                setSavedPopup(true);
                setProfileTrigger(!profileTrigger);
                setOpenBasicDetails(false);
                setOpenContactDetails(false);
                setOpenAccountDetails(false);
            }
        } catch (error) {
            const errMsg =
                error?.response?.data?.notify?.message ||
                "An error occurred. Please try again.";
            toast.error(errMsg, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 8000, // Time in milliseconds, adjust as needed
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    }

    // Access Roles by access Token  
    useEffect(() => {
        const getUserRoles = () => {
            const userRoles = decodedToken?.decodedToken?.grants || '';
            setUserRole(userRoles);
        }
        getUserRoles();
    }, [accessToken, decodedToken]);


    return (
        <Box>
            <ModalHOC openNewInterviewModal={openBasicDetails} setOpenNewInterviewModal={setOpenBasicDetails} component={<BasicDetails formData={formData} setFormData={setFormData} handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openContactDetails} setOpenNewInterviewModal={setOpenContactDetails} component={<ContactDetails formData={formData} setFormData={setFormData} handleEdit={handleEdit} />} />
            <ModalHOC openNewInterviewModal={openAccountDetails} setOpenNewInterviewModal={setOpenAccountDetails} component={<AccountDetails formData={formData} setFormData={setFormData} handleEdit={handleEdit} />} />
            {
                savedPopup &&
                <Saved
                    handleClose={() => setSavedPopup(false)}
                    open={savedPopup}
                    msg='Profile changes successfully updated.'
                />
            }
            <div className='topBox'>
                <img src={logo} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{user?.companyName}</span>
                    <div className='infoBox'>
                        <a href={user?.companyUrl} target="_blank"><img src={website} className='socialIcon' />{user?.companyUrl}</a>
                        <a href={user?.companySocialUrl} target="_blank"><img src={linkedin} className='socialIcon' />{user?.companySocialUrl?.slice(0, 35)}</a>
                    </div>
                </div>
                <span className='editBtn' onClick={() => setOpenBasicDetails(true)}><img src={editIcon} /></span>
            </div>

            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>Contact Details</span>
                    <span className='editBtn' onClick={() => setOpenContactDetails(true)}><img src={editIcon} /></span>
                </span>

                <div className='contactBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Contact:</span> {user?.spocContact}</span>
                        <span className='text'><span className='boldText'>Contact Name:</span> {user?.spocName}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Email:</span> {user?.spocEmail}</span>
                        <span className='text'><span className='boldText'>Address:</span> {user?.address} {user?.city}</span>
                    </div>
                </div>

            </div>


            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>Account Information</span>
                    <span className='editBtn' onClick={() => setOpenAccountDetails(true)}><img src={editIcon} /></span>
                </span>

                <div className='contactBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>UserName:</span>...</span>
                        <span className='text'><span className='boldText'>User Type:</span>{formatRole(userRole)}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Coordinator Name:</span> {user?.coOrdinatorName}</span>
                        <span className='text'><span className='boldText'>Industry:</span> {user?.industry}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Employees:</span> {user?.companySize}</span>
                        <span className='text'><span className='boldText'>Client Code:</span> {user?.clientCode}</span>
                    </div>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>Account Manager:</span> {user?.accountManagerName}</span>
                        <span className='text'><span className='boldText'>Account Manager Contact:</span>{user?.accountManagerContact}</span>
                    </div>
                </div>
            </div>

            <div className='contactMainBox descBox'>
                <span className='mainTitle'>
                    <span>About Company</span>
                    <span className='editBtn2'>{aboutEdit ? <button onClick={async () => {
                        handleEdit();
                        setAboutEdit(false);
                    }}>Save</button> : <img src={editIcon} onClick={() => setAboutEdit(true)} />}</span>
                </span>

                {
                    aboutEdit ?
                        <ReactQuill value={companyDesc} onChange={setCompanyDesc} className='textEditor' />
                        :
                        <span dangerouslySetInnerHTML={{ __html: user?.companyDescription }} className='textarea' />
                }

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


.textEditor {
    height: calc(100% - 6rem);
}

.descBox {
    min-height: 10rem;
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
        padding: 0.5rem 1rem;
        line-height: 1.2rem;
        font-size: 0.9rem;
        border-radius: 0.75rem;
        outline-color: var(--grey);
        outline-width: 0.05rem;
        border: 0.075rem solid lightgrey;
    }
}
`
