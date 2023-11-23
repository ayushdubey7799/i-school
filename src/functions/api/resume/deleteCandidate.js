import axios from "axios"


export const deleteCandidate = async (id, accessToken, clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};

    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/candidates/${id}`,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

