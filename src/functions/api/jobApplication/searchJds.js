import axios from "axios";

export const searchJds = async (
  accessToken,
  clientCode,
  page = 1,
  size = 1000
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
      await axios.get(`https://dev-api.intelliview.in/api/jds/search?page=${page}&size=${size}
        `, config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
