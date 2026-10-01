import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import {  useNavigate } from "react-router";
import { MyContext } from '../Context/MyContext';

const Register = () => {
  const navigate = useNavigate();
  const {setUsers,users} = useContext(MyContext)
  const {register,handleSubmit,formState:{errors}} = useForm()
  const formManage = (data)=>{
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === ""
    ){
      return
    }
      setUsers((prev) => [...prev, data]);
    localStorage.setItem("Users",JSON.stringify(users))
    localStorage.setItem("loggedIn",JSON.stringify(data));
    navigate("/main")
  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(formManage)}
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="text-slate-400 mt-2">Register to get started</p>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
          {errors.name && <h1>{errors.name.message}</h1>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
          {errors.email && <h1>{errors.email.message}</h1>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required:"Password is required",
                minLength:{
                  value:6,
                  message: "Password must be more than 6 character",
                }
              })}
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
            {errors.password && <h1>{errors.password.message}</h1>}
          </div>

          {/* Register Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
            Register
          </button>
        </div>

        {/* Login */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-400 cursor-pointer hover:text-blue-300"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;