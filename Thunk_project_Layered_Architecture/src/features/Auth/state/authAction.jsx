import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from "../../../config/axiosInstance";

export const LoginApi = createAsyncThunk("/auth/login", async (credential,ThunkAPI) => {
  try {
    console.log("running")
    const res = await axiosApi.post("/auth/login",credential)
    localStorage.setItem("accessToken",res.data.accessToken)
    return res.data
  } catch (error) {
    return ThunkAPI.rejectWithValue("Login failed")
  }
});

export const hydrateUserApi = createAsyncThunk("/auth/me", async () => {
  let token = localStorage.getItem("accessToken");
  const res = await axiosApi.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});