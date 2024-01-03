import axios from "axios"


export const getSavedJobs = async (accessToken, clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};

    try {
        const response = await axios.get('https://dev-api.intelliview.in/api/jds/savedJobs',config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
        // throw error;
      }
}

