import axios from "axios";

export const getJds = async (
  accessToken,
  clientCode,
  page,
  size
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
      await axios.get(`https://dev-api.intelliview.in/api/jds?page=${page}&size=${size}
        `,config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
