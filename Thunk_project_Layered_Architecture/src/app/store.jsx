import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../features/Auth/state/authSlice'
const store = configureStore({
    reducer:{
        auth:authSlice,
    }
})

export default store;