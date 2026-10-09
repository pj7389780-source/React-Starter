import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from '../features/authSlice'

export const store = configureStore({
  reducer: {
    authUser:authUserReducer
  },
});
