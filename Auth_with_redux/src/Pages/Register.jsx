import { useAuthHook } from "../CustomHooks/AuthHook";

const Register = () => {
  const {navigate,register,handleRegister,handleSubmit,errors} = useAuthHook()
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-8">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900/90 p-8 shadow-[0_0_80px_-20px_rgba(163,230,53,0.35)] backdrop-blur-xl sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-300 to-lime-500 text-2xl font-extrabold text-black shadow-[0_0_30px_rgba(163,230,53,.5)]">
            R
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Join us and get started today
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 transition duration-300 focus-within:border-lime-400 focus-within:shadow-[0_0_28px_-8px_rgba(163,230,53,.5)]">
              <svg
                className="h-4 w-4 shrink-0 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
              </svg>

              <input
                {...register("Name", {
                  required: "Name is Required",
                })}
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </div>
            {errors.Name && (
              <p className="text-red-700">{errors.Name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 transition duration-300 focus-within:border-lime-400 focus-within:shadow-[0_0_28px_-8px_rgba(163,230,53,.5)]">
              <svg
                className="h-4 w-4 shrink-0 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>

              <input
                {...register("Email", {
                  required: "Email is required",
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </div>
            {errors.Email && (
              <p className="text-red-700">{errors.Email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 transition duration-300 focus-within:border-lime-400 focus-within:shadow-[0_0_28px_-8px_rgba(163,230,53,.5)]">
              <svg
                className="h-4 w-4 shrink-0 text-zinc-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="4" y="11" width="16" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>

              <input
                {...register("Password", {
                  required: "Password is Required",
                  minLength: {
                    value: 8,
                    message: "Password must be greater than 8 characters",
                  },
                })}
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-600"
              />
            </div>
            {errors.Password && (
              <p className="text-red-700">{errors.Password.message}</p>
            )}
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-lime-400 py-3 font-semibold text-black shadow-[0_0_30px_-6px_rgba(163,230,53,.7)] transition duration-200 hover:bg-lime-300 hover:shadow-[0_0_44px_-4px_rgba(163,230,53,.9)] active:scale-[0.98]"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="mt-7 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-medium cursor-pointer text-lime-400 transition hover:text-lime-300"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
