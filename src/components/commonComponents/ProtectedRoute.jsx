import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthenticationConstants } from '../../utils/constants';
import AccessDenied from '../../pages/AccessDenied';
const ProtectedRoute = ({ path,component: Component, role }) => {
    const navigate = useNavigate();
    let currentUser = isAuthenticated();
    
    if(currentUser == AuthenticationConstants.deny){
        toast.warn("Login to access this resource")
        navigate('/login');
    }

    if(role !== currentUser){
        navigate('/access-denied')
    }

    return <Route path={path} element={Component}/>
}

export default ProtectedRoute;
