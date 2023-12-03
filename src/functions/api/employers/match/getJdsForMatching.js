import axios from "axios";
export const getJdsForMatching = async (
  accessToken,
  clientCode,
  page=1,
  size=100
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "x-client-code": clientCode,
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response = await axios.get(
      `https://dev-api.intelliview.in/api/jds?page=${page}&size=${size}&active=true`,
      config
    );
    console.log("Data:", response.data);
    console.log("Status:", response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
