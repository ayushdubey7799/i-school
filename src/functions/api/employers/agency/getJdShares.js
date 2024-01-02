import axios from "axios";

export const getJdShares = async (
    jdId,
  accessToken,
  clientCode
  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      'x-client-code': clientCode
    },
  };

  try {
    const response = await axios.get(
      `https://dev-api.intelliview.in/api/jds/${jdId}/jdShares`,
      config
    );
    console.log(response.data);
    console.log(response.status);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
