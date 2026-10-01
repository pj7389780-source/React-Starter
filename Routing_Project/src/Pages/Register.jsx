import { UserHandling } from "../Custom Hooks/FormHandling";


const Register = () => {
  const {
    RegisterFormSubmit,
    navigate,
    register,
    handleSubmit,
    formState: { errors },
  } = UserHandling();
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 shadow-lg shadow-lime-400/20">
            <span className="text-2xl font-black text-black">S</span>
          </div>

          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-zinc-400">
            Create your account to get started
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-2xl backdrop-blur">
          <form
            onSubmit={handleSubmit(RegisterFormSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Name
              </label>

              <input
                {...register("Name")}
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
              />
            </div>

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
              <label className="mb-2 block text-sm font-medium text-zinc-300">
                Password
              </label>

              <input
                {...register("Password")}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/10"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-lime-400 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/20 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="cursor-pointer font-semibold text-lime-400 hover:text-lime-300"
            >
              Login
            </span>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          By creating an account, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
