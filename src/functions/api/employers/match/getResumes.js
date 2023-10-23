import axios from "axios";

export const getMatches = async (
  jdIds,
  accessToken,
  clientCode

  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      `https://dev-api.intelliview.in/api/matches?jdIds=${jdIds}&page=1&size=20`,
      config
    );
    console.log("Data3:", response.data);
    console.log("Status3:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
