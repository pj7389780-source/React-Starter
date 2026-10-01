import { useContext } from "react";
import { useNavigate } from "react-router";
import { MyContext } from "../Context/MyContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const { loggedIn, setLoggedIn ,users} = useContext(MyContext);
  const navigate = useNavigate();
  const {register,handleSubmit,reset} = useForm()
  const loginManager = (data)=>{
    let validuser = users.find((elem)=>elem.email === data.email) || null
    if(data.password !== validuser?.password || !validuser){
      toast.error("Invalid Email or Password")
      reset();
      return
    }
    setLoggedIn(data)
    localStorage.setItem("loggedIn",JSON.stringify(data))
    toast.success("Successfully Logged In")
    reset();
    navigate("/main")
  }
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <form 
      onSubmit={handleSubmit(loginManager)}
      className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="text-slate-400 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email
            </label>

            <input
            {...register("email")}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Password
            </label>

            <input
            {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
            />
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-400">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <span className="text-blue-400 cursor-pointer hover:text-blue-300">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
            Login
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-400 cursor-pointer hover:text-blue-300"
          >
            Register
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
