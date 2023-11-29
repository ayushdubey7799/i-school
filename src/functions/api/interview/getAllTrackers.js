import axios from "axios";



export const getAllTrackers = async (accessToken,clientCode,jdId) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'x-client-code': clientCode

  }
};

let url = `https://dev-api.intelliview.in/api/interviews/trackers?jdId=${jdId}&page=1&size=100`;
if(!jdId)url = `https://dev-api.intelliview.in/api/interviews/trackers?page=1&size=100`;

    try {
        const response = await axios.get(url,config);
        console.log('Data:', response.data);
        console.log('Status:', response.status);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}


