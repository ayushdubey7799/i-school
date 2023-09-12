import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ProfilePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem("token");
        if (!accessToken) navigate("/login");
    }, []);
    return (
        <div>ProfilePage</div>
    )
}

export default ProfilePage


