import axios from "axios";

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMCIsImdyYW50cyI6IlJPTEVfVVNFUiIsImlhdCI6MTY5MzE4NTY4NCwiZXhwIjoxNjkzNzkwNDg0fQ.Vi5Fx26gwqsQaVVhUhlPAJtkZHCyXj8DNbf1vUYCA-tSffBbloCd6mkXJIUBjmBYAH5CEf9LSbnr_WjAt70tTQ';



export const getInterviewByStatus = async (status) => {

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      
        params: {
          page: 1,
        size: 100,
        status: status
        }
    };

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews`,config);
        console.log('Data:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}



 