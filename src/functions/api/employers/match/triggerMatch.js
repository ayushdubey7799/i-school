import axios from "axios";

export const triggerMatch = async (
  accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3N2I4YTc3Yy05N2YwLTRlNTMtYTMyYS1iOTQ2MDAzZmIzMzciLCJncmFudHMiOiJST0xFX0NMSUVOVF9BRE1JTiIsImNvZGUiOiJCUkFKMDEiLCJpYXQiOjE2OTczNzM4NDgsImV4cCI6MTY5Nzk3ODY0OH0.5GYSVATYODsGWN4wnYElcylxIXCxpMLbP4INuHqlw2DQHXuG22-0exvNyV2Ww9cv1YJ9-FscwRKPXRUPgFNcCg"
  ,jdIds
  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `https://dev-api.intelliview.in/api/matches/start?jdIds=${jdIds}`,
      config
    );
    console.log("Data1:", response.data);
    console.log("Status1:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
