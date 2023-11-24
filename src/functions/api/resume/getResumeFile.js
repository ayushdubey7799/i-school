import axios from "axios";

export const getResumeFile = async (
  accessToken,
  clientCode
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/octet-stream",
      "X-Client-Code": clientCode,
    },
  };
  try {
    const response =
      await axios.get(`https://dev-api.intelliview.in/api/media/downloadById?fileType=resume&id=8d5bfa00-c617-48d9-b636-d63c9c9bf696
        `,config);

    console.log("Data:", response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
