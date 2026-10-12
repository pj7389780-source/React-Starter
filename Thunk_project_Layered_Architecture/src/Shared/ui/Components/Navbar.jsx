import { Box, ShoppingCart } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full  bg-gray-900 rounded-2xl text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Shop<span className="text-blue-500">X</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-400">
          <NavLink
            to={"/main"}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium
  transition-all duration-300
  ${
    isActive
      ? "text-white bg-white/10 shadow-sm"
      : "text-gray-400 hover:text-white hover:bg-white/5"
  }`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to={"/main/shop"}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium
  transition-all duration-300
  ${
    isActive
      ? "text-white bg-white/10 shadow-sm"
      : "text-gray-400 hover:text-white hover:bg-white/5"
  }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to={"/main/about"}
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium
  transition-all duration-300
  ${
    isActive
      ? "text-white bg-white/10 shadow-sm"
      : "text-gray-400 hover:text-white hover:bg-white/5"
  }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Cart & Logout */}
        <div className="flex items-center gap-4">
          {/* Cart Box */}
          <NavLink  className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium
  transition-all duration-300
  ${
    isActive
      ? "text-white bg-white/10 shadow-sm"
      : "text-gray-400 hover:text-white hover:bg-white/5"
  }`
            } to={"/main/cart"}>
            <ShoppingCart className="cursor-pointer" />
          </NavLink>
          <NavLink  className={({ isActive }) =>
              `relative px-4 py-2 rounded-xl text-sm font-medium
  transition-all duration-300
  ${
    isActive
      ? "text-white bg-white/10 shadow-sm"
      : "text-gray-400 hover:text-white hover:bg-white/5"
  }`
            } to={"/main/order"}>
            <Box className="cursor-pointer" />
          </NavLink>

          {/* Logout Button */}
          <button
            className="px-5 py-2 rounded-xl bg-blue-600
                       hover:bg-blue-500 transition-colors
                       font-medium text-sm cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;