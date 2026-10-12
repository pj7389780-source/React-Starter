import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const {handleLogin,handleSubmit,register,navigate} = useAuth()
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#090b10] px-5 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11141c] p-8 shadow-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-2xl font-black text-black">
          C
        </div>

        {/* Heading */}
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-lime-400">
          WELCOME BACK
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Sign in to your account
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Enter your details below to continue your journey.
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="mt-9 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Email address
            </label>

            <input
              {...register("username")}
              type="text"
              placeholder="username"
              className="w-full rounded-xl border border-white/10 bg-[#0b0e14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-lime-400"
            />
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-200"
              >
                Password
              </label>

              <a
                href="#"
                className="text-xs font-medium text-lime-400 transition hover:text-lime-300"
              >
                Forgot password?
              </a>
            </div>

            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-[#0b0e14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-lime-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 accent-lime-400"
            />

            <label htmlFor="remember" className="text-sm text-gray-400">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            Sign in
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="font-semibold cursor-pointer text-lime-400 hover:text-lime-300"
          >
            Register
          </button>
        </p>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-[10px] tracking-[0.2em] text-gray-600">
          SECURE ACCESS · YOUR SPACE, YOUR RULES
        </div>
      </div>
    </main>
  );
};

export default LoginPage;