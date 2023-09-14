import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router'

const ProfilePage = () => {
    const accessToken = useSelector(state => state.auth.userData?.accessToken)
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            navigate("/login");
        } else {
            navigate('/profile');
        }
    }, []);
    return (
        <div>ProfilePage</div>
    )
}

export default ProfilePage


