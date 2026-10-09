import { useAuthHook } from "../CustomHooks/AuthHook";

const Login = () => {
  const {
    navigate,
    register,
    handleSubmit,
    theme,
    settheme,
    handleLogin,
  } = useAuthHook();

  return (
    <div
      className={`flex min-h-screen items-center justify-center px-4 ${
        theme ? "bg-zinc-100" : "bg-zinc-950"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-2xl border p-8 ${
          theme
            ? "border-zinc-200 bg-white shadow-xl shadow-zinc-200/60"
            : "border-zinc-800 bg-zinc-900 shadow-2xl"
        }`}
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-xl font-bold text-black shadow-sm">
            R
          </div>

          <h1
            className={`text-3xl font-bold ${
              theme ? "text-zinc-900" : "text-white"
            }`}
          >
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-5"
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className={`mb-2 block text-sm font-medium ${
                theme ? "text-zinc-700" : "text-zinc-300"
              }`}
            >
              Email
            </label>

            <input
              {...register("Email")}
              id="email"
              type="email"
              placeholder="you@example.com"
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                theme
                  ? "border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-400/10"
                  : "border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400/20"
              }`}
            />
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className={`text-sm font-medium ${
                  theme ? "text-zinc-700" : "text-zinc-300"
                }`}
              >
                Password
              </label>

              <button
                type="button"
                className={`text-xs font-medium transition ${
                  theme
                    ? "text-lime-600 hover:text-lime-700"
                    : "text-lime-400 hover:text-lime-300"
                }`}
              >
                Forgot password?
              </button>
            </div>

            <input
              {...register("Password")}
              id="password"
              type="password"
              placeholder="••••••••"
              className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${
                theme
                  ? "border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-lime-400 focus:bg-white focus:ring-4 focus:ring-lime-400/10"
                  : "border-zinc-800 bg-zinc-950 text-white placeholder:text-zinc-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400/20"
              }`}
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
            className={`cursor-pointer font-medium transition ${
              theme
                ? "text-lime-600 hover:text-lime-700"
                : "text-lime-400 hover:text-lime-300"
            }`}
          >
            Create account
          </button>
        </p>

        {/* Theme */}
        <button
          type="button"
          onClick={() => settheme((prev) => !prev)}
          className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition ${
            theme
              ? "border border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900"
              : "border border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          }`}
        >
          <span>{theme ? "☾" : "☀"}</span>
          {theme ? "Dark theme" : "Light theme"}
        </button>
      </div>
    </div>
  );
};

export default Login;
