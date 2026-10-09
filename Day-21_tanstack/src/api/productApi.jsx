import { axiosInstance } from "../config/axiosInstance";

export const getDataApi = async () => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data.products
    } catch (error) {
      console.log(error);
    }
  };
