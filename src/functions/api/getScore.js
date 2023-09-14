import axios from "axios";


export const getScore = async (interviewId,accessToken) => {


const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};

  console.log(interviewId)
  try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${interviewId}/score`,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.log('Error:', error);
      }
}




