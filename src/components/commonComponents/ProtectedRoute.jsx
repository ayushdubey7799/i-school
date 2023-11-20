import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthenticationConstants } from '../../utils/constants';
import { isAuthenticated } from '../../utils/isAuthenticated';
const ProtectedRoute = ({ role }) => {
    let currentUser = isAuthenticated();
    
    if(currentUser == AuthenticationConstants.deny){
        toast.warn("Login to access this resource")
        return <Navigate to='/login'/>
    }
   
    if(role !== "basic" && role !== currentUser){
        return <Navigate to='/access-denied'/>
    }

    return <Outlet />
}

export default ProtectedRoute;
