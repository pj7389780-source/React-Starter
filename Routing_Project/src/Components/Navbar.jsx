import React from "react";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate()
  const linkClass = ({ isActive }) =>
    `rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
      isActive
        ? "bg-lime-400 text-black shadow-lg shadow-lime-400/10"
        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
    }`;

  return (
    <div className="flex h-screen min-h-0 flex-col border-r border-zinc-800 bg-zinc-950 p-5 text-white">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400 shadow-lg shadow-lime-400/20">
          <span className="text-xl font-black text-black">S</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight">
          Sky<span className="text-lime-400">MART</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/main" className={linkClass} end>
          Home
        </NavLink>

        <NavLink to="/main/Users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/main/Products" className={linkClass}>
          Products
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto border-t border-zinc-800 pt-5">
        <button
          onClick={() => {
            localStorage.removeItem("loggedInUser")
            navigate("/")
            toast.warning("User LoggedOut ")
          }}
          className="w-full rounded-xl px-4 py-3 text-left text-base font-medium text-red-400 transition-all duration-200 hover:bg-red-500/10 hover:text-red-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
