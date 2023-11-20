import axios from "axios";




export const getInterviewByStatus = async (status,accessToken) => {
  // const token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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



 