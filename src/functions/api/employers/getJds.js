import axios from "axios";

export const getJds = async (
  accessToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3N2I4YTc3Yy05N2YwLTRlNTMtYTMyYS1iOTQ2MDAzZmIzMzciLCJncmFudHMiOiJST0xFX0NMSUVOVF9BRE1JTiIsImNvZGUiOiJCUkFKMDEiLCJpYXQiOjE2OTc1OTQxNjgsImV4cCI6MTY5ODE5ODk2OH0.h9W7XOsu4t0I0Y2wqwUutycpwrng3v99BM0MQXufvSIO3shc7_28BCQsPy5Zcrlt5JE6OrJJCK0fegpSFTfeOA",
  clientCode = "BRAJ01"
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
      await axios.get(`https://dev-api.intelliview.in/api/jds?page=1&size=10
        `,config);

    console.log("Data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
