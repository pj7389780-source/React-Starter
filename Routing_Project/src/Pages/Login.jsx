import { UserHandling } from "../Custom Hooks/FormHandling";

const Login = () => {
  const {handleSubmit,LoginSubmit,register,navigate} = UserHandling()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 shadow-lg shadow-lime-400/20">
            <span className="text-2xl font-black text-black">S</span>
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Login to continue to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-2xl backdrop-blur">
          <form onSubmit={handleSubmit(LoginSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Email Address
              </label>

              <input
                {...register("Email")}
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-medium text-zinc-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-lime-400 transition hover:text-lime-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 accent-lime-400" />

              <span className="text-sm text-zinc-400">Remember me</span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-lime-400 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 active:scale-[0.98]"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-zinc-800"></div>

            <span className="text-xs text-zinc-600">OR</span>

            <div className="h-px flex-1 bg-zinc-800"></div>
          </div>

          <p className="mt-7 text-center text-sm text-zinc-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="cursor-pointer font-semibold text-lime-400 hover:text-lime-300"
            >
              Create account
            </span>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
