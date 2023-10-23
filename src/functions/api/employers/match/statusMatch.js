import axios from "axios";

export const statusMatch = async (
  jobids,
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
      `https://dev-api.intelliview.in/api/matches/status?JdIds=${jobids}`,
      config
    );
    // console.log("current:", response.data);
    // console.log("Status2:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
