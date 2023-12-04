import axios from "axios";

export const checkJdExist = async (
  accessToken,
  clientCode,
  jdId
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
      await axios.get(`https://dev-api.intelliview.in/api/jds/existsByJdId?jdId=${jdId}
        `,config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
