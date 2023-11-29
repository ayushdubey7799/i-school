import axios from "axios"


export const sendInvite = async (inviteData, accessToken,clientCode) => {

const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
    'X-Client-Code': clientCode,
  }
};
  const requestData = {...inviteData};
  console.log("sendinvite",requestData)
    try {
        const response = await axios.post('https://dev-api.intelliview.in/api/interviews/invites',requestData,config);
        console.log('Data:', response.data);
        console.log("Status", response.status)
        return response.data;
      } catch (error) {

        console.error('Error:', error.response.data);
        return error?.response?.data;
      }
}

