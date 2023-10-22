import axios from "axios"


export const sendInvite = async (inviteData, accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3N2I4YTc3Yy05N2YwLTRlNTMtYTMyYS1iOTQ2MDAzZmIzMzciLCJncmFudHMiOiJST0xFX0NMSUVOVF9BRE1JTiIsImNvZGUiOiJCUkFKMDEiLCJpYXQiOjE2OTczNzM4NDgsImV4cCI6MTY5Nzk3ODY0OH0.5GYSVATYODsGWN4wnYElcylxIXCxpMLbP4INuHqlw2DQHXuG22-0exvNyV2Ww9cv1YJ9-FscwRKPXRUPgFNcCg",clientCode = 'BRAJ01') => {

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
        console.error('Error:', error);
      }
}

