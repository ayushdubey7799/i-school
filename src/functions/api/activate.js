import axios from "axios";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImdyYW50cyI6IlJPTEVfVVNFUiIsImlhdCI6MTY5MzE4NTY4NCwiZXhwIjoxNjkzNzkwNDg0fQ.Vi5Fx26gwqsQaVVhUhlPAJtkZHCyXj8DNbf1vUYCA-tSffBbloCd6mkXJIUBjmBYAH5CEf9LSbnr_WjAt70tTQ';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

export const activate = async () => {

    let id = "9ddfb0dc-8811-43ad-bdc8-54e90b6b6fe5"
    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/${id}/questions`,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}