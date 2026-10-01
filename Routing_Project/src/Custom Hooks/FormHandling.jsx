import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const UserHandling = ()=>{
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || []);
    const RegisterFormSubmit = (data) => {
        if(data.Name.trim() === "" || data.Password.trim() ==="" || data.Email.trim()===""){
            toast.error("Fill all fields")
            return}

      setUsers((prev)=>{
        let arr = [...prev,data]
        localStorage.setItem("users", JSON.stringify(arr));
        return arr;
      });

      reset();
    };
    const [loggedInUser, setLoggedInUser] = useState(
      localStorage.getItem("loggedInUser") || {},
    );
    const LoginSubmit = (data) => {
      let isValid = users?.find((elem) => elem.Email === data.Email);
      if (!isValid) {
        toast.error("Invalid Email or password");
        return;
      }
      if (isValid.Password !== data.password) {
        toast.error("Invalid Email or password");
        return;
      }
      setLoggedInUser(data);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      toast.success("User Loggedin");
      navigate("/main");
      reset();
    };
    return {
      RegisterFormSubmit,
      users,
      navigate,
      register,
      handleSubmit,
      formState: { errors },
      reset,
      LoginSubmit,
    };
}