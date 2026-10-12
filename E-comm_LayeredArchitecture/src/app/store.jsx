import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from '../feature/auth/state/AuthSlice'

export const store = configureStore({
    reducer:{auth:AuthSlice}
})