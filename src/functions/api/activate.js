import axios from "axios";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImdyYW50cyI6IlJPTEVfVVNFUiIsImlhdCI6MTY5MzE4NTY4NCwiZXhwIjoxNjkzNzkwNDg0fQ.Vi5Fx26gwqsQaVVhUhlPAJtkZHCyXj8DNbf1vUYCA-tSffBbloCd6mkXJIUBjmBYAH5CEf9LSbnr_WjAt70tTQ';

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
};

export const activate = async (id) => {

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/auth/activate/${id}`);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

// https://dev-api.intelliview.in/api/auth/activate/237274f9-ce42-4429-bbba-26672effb5f1
