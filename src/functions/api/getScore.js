import axios from "axios";


export const getScore = async ({interviewId}) => {

  const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
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




