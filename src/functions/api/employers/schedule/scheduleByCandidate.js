import axios from "axios"
import {toast} from 'react-toastify';

export const scheduleByCandidate = async (scheduleData, accessToken,clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};
  const requestData = {...scheduleData};
  console.log("sendinvite",requestData)
    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews/schedules',requestData,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        toast.error(error.message);
        console.error('Error:', error);
      }
}

