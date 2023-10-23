import axios from "axios";

export const getProductTypes = async (
  accessToken,
  clientCode

  ) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.get(
      ` https://dev-api.intelliview.in/api/configs/value?key=BRAJ01.producttypes`,
      config
    );
    console.log("productypes:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
