import React, { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { activate } from '../functions/api/authentication/activate';

const Activate = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const accessToken = searchParams.get('token');
    const clientCode = searchParams.get('clientCode')
    console.log(accessToken,clientCode);
    useEffect(() => {
        async function act() {
            const res = await activate(accessToken,clientCode);
            if (res?.ok) {
                navigate("/login");
            }
            
        }
        act();
    })
    if (!accessToken) {
        return <div>Page Not Found</div>
    }


    return (
        <div>Activate</div>
    )
}

export default Activate



