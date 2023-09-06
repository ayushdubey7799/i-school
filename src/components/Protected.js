import React from 'react'
import { useNavigate } from 'react-router';

const Protected = (Component) => {
    let accessToken = JSON.parse(localStorage.getItem("token"));
    if(!accessToken){
           return <p>Page Not Found</p>
    }

  return <Component/>
}

export default Protected