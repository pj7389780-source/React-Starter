import { useNavigate } from "react-router";
import { useAuth } from "../../hook/useAuth";

const RegisterPage = () => {
  let navigate = useNavigate()
  const { register, handleSubmit, errors, handleRegister } = useAuth();
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-4 py-8">
      <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-md rounded-2xl border border-white/10 bg-[#141414] p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white">Create Account</h1>

        <p className="mt-2 mb-8 text-sm text-gray-400">
          Join us today and get started.
        </p>

        {/* Name */}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>

          <input
            {...register("name", {
              required: "Name is requierd",
            })}
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
          />
        </div>
        {errors.name && <h1>{errors.name.message}</h1>}

        {/* Username */}
        <div className="mb-5">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Username
          </label>

          <input
            {...register("username", {
              required: "Username is required",
            })}
            type="text"
            placeholder="Choose a username"
            autoComplete="username"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
          />
        </div>
        {errors.username && <h1>{errors.username.message}</h1>}

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-300"
          >
            Password
          </label>

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 10,
                message: "Password should be more than 10 characters",
              },
            })}
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
            className="w-full rounded-xl border border-white/10 bg-[#0b0b0b] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
          />
        </div>
        {errors.password && <h1>{errors.password.message}</h1>}
        <button
          type="submit"
          className="w-full rounded-xl bg-lime-400 py-3 font-semibold text-black transition hover:bg-lime-300 active:scale-[0.98]"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="font-medium cursor-pointer text-lime-400 hover:text-lime-300"
          >
            Login
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
