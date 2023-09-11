import axios from "axios"




export const createInterview = async (jobSummary,resumeText) => {
  console.log(jobSummary,resumeText);
  const token = JSON.parse(localStorage.getItem("token"));

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};
  const requestData = {
    jobSummary,
    resumeText
  };

    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews',requestData,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

