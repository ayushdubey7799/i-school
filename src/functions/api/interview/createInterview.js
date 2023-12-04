import axios from "axios"




export const createInterview = async (payload, accessToken) => {
  // const token = JSON.parse(localStorage.getItem("token"));

console.log(payload,"========",accessToken);
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};
  

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews',payload,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

