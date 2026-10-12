import { createSlice } from "@reduxjs/toolkit";
import { hydrateUserApi, LoginApi } from "./authAction";

const authSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    removeUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
  extraReducers:(builder)=>{
    builder
      .addCase(LoginApi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginApi.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(LoginApi.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(hydrateUserApi.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(hydrateUserApi.pending, (state) => {
        state.isLoading = true;
      }).addCase(hydrateUserApi.rejected,(state)=>{
      state.isLoading = false
    })
  }
});

export const {addUser,removeUser} = authSlice.actions
export default authSlice.reducer