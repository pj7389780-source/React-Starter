import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const { register, handleSubmit, handleRegister,errors,navigate } =
    useAuth();
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090b10] px-5 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#11141c] p-8 shadow-2xl sm:p-10">
        {/* Logo */}
        <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-2xl font-black text-black">
          C
        </div>

        {/* Heading */}
        <p className="mb-3 text-xs font-bold tracking-[0.25em] text-lime-400">
          GET STARTED
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Create your account
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Join us today and get started with your journey.
        </p>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="mt-9 space-y-5"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Full name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-xl border border-white/10 bg-[#0b0e14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-lime-400"
            />
          </div>
          {errors.name && <h1>{errors.name.message}</h1>}

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Username
            </label>

            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              placeholder="Choose a username"
              className="w-full rounded-xl border border-white/10 bg-[#0b0e14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-lime-400"
            />
          </div>
          {errors.username && <h1>{errors.username.message}</h1>}
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              placeholder="Create a strong password"
              className="w-full rounded-xl border border-white/10 bg-[#0b0e14] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-lime-400"
            />
          </div>
          {errors.password && <h1>{errors.password.message}</h1>}
          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-4 py-3.5 text-sm font-bold text-black transition hover:bg-lime-300"
          >
            Create account
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-semibold cursor-pointer text-lime-400 hover:text-lime-300"
          >
            Login
          </button>
        </p>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-[10px] tracking-[0.2em] text-gray-600">
          YOUR SPACE · YOUR JOURNEY
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
