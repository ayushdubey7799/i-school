import axios from "axios"


export const getInviteDetails = async (token, accessToken) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': "inteliiview",
  }
};
  console.log("sendinvite",requestData)
    try {
        const response = await axios.get(`https://dev-api.intelliview.in/api/interviews/invites/${token}`,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {
        console.error('Error:', error);
      }
}

