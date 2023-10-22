import React,{useEffect} from 'react'
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import {toast} from "react-toastify";

const InviteRedirect = () => {
    const navigate  = useNavigate();
    const [searchParams] =useSearchParams();
    const token = searchParams.get('token');
  
  
  
  useEffect(() => {
     if(token){
      localStorage.setItem('inviteToken',token);
      toast.success("Login first to select slot");
      navigate('/login');
     }
     
  },[])

  return (
    <div>InviteRedirect</div>
  )
}

export default InviteRedirect