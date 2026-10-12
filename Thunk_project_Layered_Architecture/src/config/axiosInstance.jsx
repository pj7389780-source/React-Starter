import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://dummyjson.com",
  withCredentials:true
});