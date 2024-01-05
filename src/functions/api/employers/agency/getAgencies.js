import axios from "axios";

export const getAgencies = async (
  accessToken,
  clientCode,
  page=1,
  size=1000
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
      `https://dev-api.intelliview.in/api/employers/agencies?page=${page}&size=${size}`,
      config
    );
    console.log("Data3:", response.data);
    console.log("Status3:", response.status);
    return response.data;
  } catch (error) {
    throw error;
  }
};
