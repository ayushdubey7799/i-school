import axios from "axios";

export const getEmployer = async (
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
      await axios.get(`https://dev-api.intelliview.in/api/employers/${clientCode}`,config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
