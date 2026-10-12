import { axiosApi } from "../../../config/axiosInstance";

export const getAllProducts = async (titleSearch) => {
  let url = titleSearch
    ? `/products/search?q=${titleSearch}`
    : "/products?limit=100";
  try {
    let res = await axiosApi.get(url);
    return res.data;
  } catch (error) {
    console.log("Error in Product API", error);
  }
};

export const getProductCategories = async () => {
  try {
    let res = await axiosApi.get("/products/categories");
    return res.data;
  } catch (error) {
    console.log("Error in Product API", error);
  }
};

export const getProductByCategory = async (categroy) => {
  try {
    let res = await axiosApi.get(`https://dummyjson.com/products/category/${categroy}`);
    return res.data;
  } catch (error) {
    console.log("Error in Product API", error);
  }
};