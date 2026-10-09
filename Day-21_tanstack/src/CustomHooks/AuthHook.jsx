import {useNavigate} from 'react-router'
import {useForm} from'react-hook-form'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {useDispatch} from 'react-redux'
import { addUser } from '../features/authSlice'


export const useAuthHook = ()=>{
    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(
        addUser(JSON.parse(localStorage.getItem("loggedInUser")) || null),
      );
    }, []);
    const [registeredUsers, setRegisteredUsers] = useState([])
    let navigate = useNavigate()
    const {register,handleSubmit,reset,formState:{errors}} = useForm();

    useEffect(()=>{
        setRegisteredUsers(JSON.parse(localStorage.getItem("registeredUsers")) || [])
    },[])
    const handleLogin = (data)=>{
        let user = registeredUsers.find((val)=>{
            console.log(val)
            return val.Email === data.Email && val.Password === data.Password
        })
        if(!user){
            toast.error("Invalid Credentials");
            reset();
            return;
        }
        localStorage.setItem("loggedInUser",JSON.stringify(user))
        dispatch(addUser(user))
        navigate("/main")
    }
    const handleRegister = (data)=>{
        let arr = [...registeredUsers,data]
        setRegisteredUsers(arr)
        localStorage.setItem("registeredUsers",JSON.stringify(arr))
        navigate("/main");
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        dispatch(addUser(data))
    }
    const [theme, settheme] = useState(false)

    return {
      navigate,
      register,
      handleSubmit,
      reset,
      errors,
      handleLogin,
      handleRegister,
      theme,
      settheme,
    };
}