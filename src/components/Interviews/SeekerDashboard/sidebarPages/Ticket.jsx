import React, { useEffect } from 'react'
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import LogoHeader from '../../../commonComponents/LogoHeader';

const Ticket = () => {


    const nonce = uuidv4();

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.nonce = nonce;
        script.src = 'https://desk.zoho.com/portal/api/web/inapp/911498000000261001?orgId=831614665';
        script.defer = true;

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [nonce]);
    return (
        <StyledDiv>
            <LogoHeader/>
            <span>Click on the Ticket Icon on right-bottom to raise a Ticket.</span>
        </StyledDiv>
    )
}

export default Ticket

const StyledDiv = styled.div`

margin: 0rem 10%;
height: calc(100vh - 8rem);
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;

span {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 8rem;
}

`

