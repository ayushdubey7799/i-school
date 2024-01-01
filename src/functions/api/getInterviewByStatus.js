import axios from "axios";




export const getInterviewByStatus = async (status, accessToken, page, size) => {
  // const token = JSON.parse(localStorage.getItem("token"));

    const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
      
        params: {
          page: page,
          size: size,
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



 