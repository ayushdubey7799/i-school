import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { getProductTypes } from '../../../../functions/api/employers/getProductTypes';
import { getTestTypes } from '../../../../functions/api/employers/getTestTypes';
import styled from 'styled-components';
import axios from 'axios';
import { sendInvite } from '../../../../functions/api/employers/match/sendInvite';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify';
export default function ScheduleModal({ array }) {
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const [productTypes, setProductTypes] = useState([]);
  const [testTypes, setTestTypes] = useState([]);
  const [productType, setProductType] = useState('');
  const [testType, setTestType] = useState('');
  const accessToken = useSelector(state => state.auth.userData.accessToken);
  const clientCode = useSelector(state => state.auth.userData.user.clientCode);
 const navigate = useNavigate();

  useEffect(() => {
    if(!accessToken || !clientCode){
      toast.error("Login First");
      navigate("/login");
     }
    const getTypes = async () => {
      const response1 = await getProductTypes(accessToken,clientCode);
      if (response1.code == 2000) {
        setProductTypes(response1.data.value.split(','));
      }

      const response2 = await getTestTypes(accessToken,clientCode);
      if (response2.code == 2000) {
        setTestTypes(response2.data.value.split(','));
      }
    }

    getTypes();
  }, [])

  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

 const handleInvite = () => {
  const makeApiCall = async () => {

    const payload = {
      "jdId": array[array.length-1],
      "productType": "skill based",
      "resumeIds": array.slice(0,-1),
      "slotDate": value.format('YYYY-MM-DD'),
      "testType": "AI",
      "welcomeMessage": "string"
    }


    try {
      const response = await sendInvite(payload, accessToken,clientCode)
      console.log('API call successful:', response.data);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  makeApiCall();
 }
 console.log("Date->",value.format('YYYY-MM-DD'));

  return (
    <Container>

      <div className='mainBox'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={value} onChange={(newValue) => setValue(dayjs(newValue))} />
      </LocalizationProvider>

      <div className='selectBox'>
        <Select value={productType} onChange={handleProductTypeChange}>
          <option value="">Select Product Type</option>
          {productTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </Select>

        <Select value={testType} onChange={handleTestTypeChange}>
          <option value="">Select Test Type</option>
          {testTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>
      </div>
      <button className='btn' onClick={handleInvite}>Send Invite</button>
    </Container>
  );
}

const Select = styled.select`
  padding: 0.6rem;
  margin: 0.6rem;
  border: 0.08rem solid #ccc;
  border-radius: 0.3rem;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0%;
  align-items: center;


  .btn {
    padding: 0.5rem 1rem;
    margin-top: 0rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    
  }

  .mainBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }

  .selectBox {
    width: 50%;
  }
  
`;

