import { useAuthHook } from "../CustomHooks/AuthHook";

const Login = () => {
  const {navigate,register,handleSubmit,handleLogin} = useAuthHook()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-xl font-bold text-black">
            R
          </div>

          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <input
              {...register("Email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400/20"
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-zinc-300"
              >
                Password
              </label>

              <button
                type="button"
                className="text-xs font-medium text-lime-400 hover:text-lime-300"
              >
                Forgot password?
              </button>
            </div>

            <input
              {...register("Password")}
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400/20"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-xl bg-lime-400 py-3 font-semibold text-black transition duration-200 hover:bg-lime-300 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        {/* Register */}
        <p className="mt-7 text-center text-sm text-zinc-500">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-medium text-lime-400 cursor-pointer hover:text-lime-300"
          >
            Create account
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
