import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { activate } from '../../functions/api/activate';

const Activate = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get('token');
  if (!accessToken) {
    return <div>Page Not Found</div>
  }
  useEffect(() => {
    async function act() {
      const res = await activate(accessToken);
      if (res.ok) {
        navigate("/login");
      }
    }

    act();
  })


  return (
    <div>Activate</div>
  )
}

export default Activate



