import { useForm } from "react-hook-form"
import { LoginApi } from "../state/authAction"
import { useDispatch } from "react-redux";

export const useAuth = ()=>{
    let dispatch = useDispatch();
    const {register,formState:{errors},handleSubmit,reset} = useForm()

    const handleLogin = async (data)=>{
        console.log(data)
        const res = await dispatch(LoginApi(data))
        console.log(res)
    }
    const handleRegister = (data)=>{
        console.log(data)
    }

    return{
        register,errors,handleSubmit,reset,handleLogin,handleRegister
    }
}