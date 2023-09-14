import React, { useState } from 'react'
import styled from 'styled-components'
import DemoHeader from '../components/commonComponents/DemoHeader'
import Footer from '../components/commonComponents/Footer'
import demoPageImg from '../assets/demoPageImg.jpg'

const Demo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [company, setCompany] = useState('');
    const [website, setWebsite] = useState('');
    const [employees, setEmployees] = useState('');


    const handleSubmit = () => {

    }

    return (
        <StyledDiv>
            <DemoHeader />

            <div className='content'>
                <div className='left'>
                    <img src={demoPageImg} />
                </div>
                <div className='right'>
                    <span className='title'>Get a Free Demo of IntelliView</span>

                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            id='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Enter Name'
                            required
                        />

                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter Email'
                            required
                        />

                        <input
                            type='tel'
                            id='contact'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            placeholder='Enter Phone Number'
                        />

                        <input
                            type='text'
                            id='company'
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder='Enter Company Name'
                        />

                        <input
                            type='url'
                            id='website'
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder='Enter Website URL'
                        />

                        <select
                            value={employees}
                            onChange={(e) => setEmployees(e.target.value)}
                        >
                            <option value="" disabled selected>
                                Select number of Employees
                            </option>
                            <option value='1'>1</option>
                            <option value='2-5'>2 to 5</option>
                            <option value='6-10'>6 to 10</option>
                            <option value='11-25'>11 to 25</option>
                            <option value='26-50'>26 to 50</option>
                            <option value='51-200'>51 to 200</option>
                            <option value='201-1000'>201 to 1000</option>
                            <option value='1001-10000'>1001 to 10000</option>
                            <option value='10001+'>10001 or more</option>
                        </select>

                        <button type='submit' className='btn'>Request a free Demo</button>
                    </form>
                </div>
            </div>
            <Footer />
        </StyledDiv>
    )
}

export default Demo


const StyledDiv = styled.div`
display: flex;
flex-direction: column;

.content {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 6rem;
    display: flex;
    flex-direction: row;
}

.left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.left > img {
    width: 75%;
}

.right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 2rem 0rem;
}

.title {
    font-size: 1.5rem;
    font-weight: 600;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

input {
    padding: 0.7rem 1rem;
    border: 0.1rem solid var(--color);
    border-radius: 0.3rem;
    width: 75%;
}

select {
    padding: 0.7rem 1rem;
    border: 0.1rem solid var(--color);
    border-radius: 0.3rem;
    width: 81%;
}

.btn {
    background-color: var(--lightOrange);
    color: var(--backgroundColor);
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: none;
    padding: 0.7rem 1rem;
    cursor: pointer;
  }

  @media(max-width: 800px) {

    .left {
        display: none;
    }

    .right {
        width: 100%;
    }

    form {
        width: 90%;
    }

    select {
        width: 80%;
    }

  }


`



