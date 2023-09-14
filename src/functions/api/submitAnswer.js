import axios from "axios";



export const submitAnswer = async (answer,id,lastQuestion,interviewId,accessToken) => {


const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
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