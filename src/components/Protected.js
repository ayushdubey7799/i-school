import React from 'react'
import { useNavigate } from 'react-router';

const Protected = () => {
    const navigate = useNavigate();
    let currentUser = JSON.parse(localStorage.getItem("current"));
    if(!currentUser.name){
           navigate('/login');
    }

  return (
    <div>Protected</div>
  )
}

export default Protected