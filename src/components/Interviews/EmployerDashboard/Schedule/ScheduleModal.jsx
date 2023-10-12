import React,{useEffect,useState} from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { getProductTypes } from '../../../../functions/api/employers/getProductTypes';
import { getTestTypes } from '../../../../functions/api/employers/getTestTypes';
import styled from 'styled-components';


export default function ScheduleModal({ array }) {
  const [value, setValue] = useState(dayjs('2022-04-17'));
  const [productTypes, setProductTypes] = useState([]);
  const [testTypes, setTestTypes] = useState([]);
  const [productType, setProductType] = useState('');
  const [testType, setTestType] = useState('');

  useEffect(() => {
    const getTypes = async () => {
       const response1 = await getProductTypes();
       if(response1.code==2000){
        setProductTypes(response1.data.value.split(','));
       }
  
       const response2 = await getTestTypes();
       if(response2.code==2000){
        setTestTypes(response2.data.value.split(','));
       }
    }
  
    getTypes();
  },[])
  
  const handleProductTypeChange = (e) => {
    setProductType(e.target.value);
  };

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };


console.log("Current",productTypes,testTypes);

  return (
    <Container>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
    
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
      <button className='btn'>Send Invite</button>
    </Container>
  );
}

const Select = styled.select`
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .btn {
    padding: 0.5rem 1rem;
    margin-top: 3rem;
    background-color: var(--lightOrange);
    border: none;
    color: var(--white);
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    cursor: pointer;
    
  }
  
`;

