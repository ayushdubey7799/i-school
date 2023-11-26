import axios from "axios";



export const getAllTrackers = async (accessToken,clientCode,jdId) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'x-client-code': clientCode

  }
};

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/trackers/${jdId}?page=1&size=100`,config);
        console.log('Data:', response.data);
        console.log('Status:', response.status);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}


