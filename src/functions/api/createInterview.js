import axios from "axios"

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImdyYW50cyI6IlJPTEVfVVNFUiIsImlhdCI6MTY5MzE4NTY4NCwiZXhwIjoxNjkzNzkwNDg0fQ.Vi5Fx26gwqsQaVVhUhlPAJtkZHCyXj8DNbf1vUYCA-tSffBbloCd6mkXJIUBjmBYAH5CEf9LSbnr_WjAt70tTQ';
const requestData = {
  jobSummary: 'jobSummary example',
  resumeText: 'resumeText example'
};

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};


export const createInterview = async () => {
    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews',requestData,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}