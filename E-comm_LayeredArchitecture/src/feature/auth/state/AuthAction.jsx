import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUserAction = createAsyncThunk("/Auth/user",async (credentials,thunkApi)=>{
      try {
         let res = await api.post("/auth/login", credentials);
         localStorage.setItem("accessToken",res.data.accessToken)
         return res.data;
       } catch (error) {
         return thunkApi.rejectWithValue("Login Failed")
       }
            
})