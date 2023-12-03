import axios from "axios";

export const getAllAlerts = async (
  accessToken,
  clientCode
  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "X-Client-Code": clientCode,
    },
  };
  try {
    const response =
      await axios.get(`https://dev-api.intelliview.in/api/alerts
        `,config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
