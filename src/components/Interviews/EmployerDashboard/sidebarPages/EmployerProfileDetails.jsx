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

const EmployerProfileDetails = () => {
    const accessToken = useSelector((state) => state.auth.userData.accessToken);
    const clientCode = useSelector((state) => state.auth.userData.user.clientCode);
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser = async () => {
            const res = await getEmployer(accessToken, clientCode);
            if (res) {
                setUser(res?.data);
            }
        }
        getUser();
    }, []);

    console.log(user);

    const textAreaRef = useRef(null);
    const [aboutEdit, setAboutEdit] = useState(false);
    // const [aboutCompany, setAboutCompany] = useState();

    const handleAboutSave = () => {
        setAboutEdit(false);
    }



    useEffect(() => {
        // Focus and set the cursor at the end of the textarea when aboutEdit becomes true
        if (aboutEdit && textAreaRef.current) {
            const textLength = user?.companyDescription?.length;
            textAreaRef.current.focus();
            textAreaRef.current.setSelectionRange(textLength, textLength);
        }
    }, [aboutEdit, user?.companyDescription]);


    return (
        <Box>
            <div className='topBox'>
                <img src={logo} className='profileImg' />
                <div className='middleBox'>
                    <span className='name'>{user?.companyName}</span>
                    <div className='infoBox'>
                        <a href={user?.companyUrl}><img src={website} className='socialIcon' />{user?.companyUrl}</a>
                        <a href={user?.companySocialUrl}><img src={linkedin} className='socialIcon' />{user?.companySocialUrl?.slice(0, 35)}</a>
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
                    <span className='editBtn'><img src={editIcon} /></span>
                </span>

                <div className='contactBox'>
                    <div className='childBox'>
                        <span className='text'><span className='boldText'>UserName:</span>...</span>
                        <span className='text'><span className='boldText'>User Type:</span>...</span>
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

            <div className='contactMainBox'>
                <span className='mainTitle'>
                    <span>About Company</span>
                    <span className='editBtn2'>{aboutEdit ? <button onClick={handleAboutSave}>Save</button> : <img src={editIcon} onClick={() => setAboutEdit(true)} />}</span>
                </span>

                <textarea
                    value={user?.companyDescription}
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