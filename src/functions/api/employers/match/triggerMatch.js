import axios from "axios";

export const triggerMatch = async (jdIds,
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
