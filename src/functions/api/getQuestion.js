import axios from "axios";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImdyYW50cyI6IlJPTEVfVVNFUiIsImlhdCI6MTY5MzE4NTY4NCwiZXhwIjoxNjkzNzkwNDg0fQ.Vi5Fx26gwqsQaVVhUhlPAJtkZHCyXj8DNbf1vUYCA-tSffBbloCd6mkXJIUBjmBYAH5CEf9LSbnr_WjAt70tTQ';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

export const getQuestion = async (id) => {
    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${id}/questions`,config);
        console.log('Data:', response.data);
        console.log('Status:', response.status);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}


