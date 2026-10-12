import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { loginUserAction } from "../state/AuthAction"

export const useAuth = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register,formState:{errors},reset,handleSubmit} =  useForm()


    const handleLogin = async (data)=>{
      try {
       const res = dispatch(loginUserAction(data))
       console.log(res)
        toast.success("User logged in")
      } catch (error) {
        console.log("something ",error)
      }
    }
     const handleRegister = (data)=>{
        console.log("registered",data)
        reset();
    }
    


    return {
      register,
      errors,
      handleLogin,
      handleSubmit,
      handleRegister,
      navigate,
    };
}