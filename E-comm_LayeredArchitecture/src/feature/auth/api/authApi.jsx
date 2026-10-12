import { api } from "../../../config/axiosInstance";

export const hydratedUser = async () => {
    let token = localStorage.getItem("accessToken");
  try {
    let response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data
  } catch (error) {
    console.log("error in hydration ->", error);
  }
};