import axios from "axios";



export const submitAnswer = async (answer,id,lastQuestion,interviewId) => {

  const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

    const requestData = {
        answer,
        id,
        lastQuestion
    };
  console.log(requestData);
    try {
        const response = await axios.put(`https://dev-api.intelliview.in/api/interviews/${interviewId}/answers`,requestData,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}