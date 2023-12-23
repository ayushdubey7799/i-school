import axios from "axios";

export const getEmployees = async (
  accessToken,
  clientCode,
  page = 1,
  size = 1000,
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
      await axios.get(`https://dev-api.intelliview.in/api/employers/employees?page=${page}&size=${size}`, config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
