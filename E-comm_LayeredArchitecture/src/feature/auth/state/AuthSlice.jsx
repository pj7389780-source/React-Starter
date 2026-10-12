import {createSlice} from '@reduxjs/toolkit'
import { loginUserAction } from './AuthAction';
const AuthSlice = createSlice({
    name:"Auth",
    initialState:{
        user:null,
        isAuthenticated:false,
        isLoading:false
    },
    reducers:{
        addUser:(state,action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            state.isLoading = false
        },
        removeUser:(state)=>{
             state.user = null;
             state.isAuthenticated = false;
             state.isLoading = false;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(loginUserAction.pending,()=>{}).addCase(loginUserAction.fulfilled,()=>{}).addCase(loginUserAction.rejected,()=>{
            
        })
    }
})
export const {addUser,removeUser} = AuthSlice.actions
export default AuthSlice.reducer