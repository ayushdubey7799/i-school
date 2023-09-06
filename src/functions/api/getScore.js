import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

export const getScore = async ({interviewId}) => {
  console.log(interviewId)
  try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${interviewId}/score`,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.log('Error:', error);
      }
}




