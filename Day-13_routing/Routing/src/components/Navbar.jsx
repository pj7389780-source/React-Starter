import React from 'react'
import {NavLink} from 'react-router'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="./src/assets/logo.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-8">
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/"}>
          Home
        </NavLink>
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/About"}>
          About
        </NavLink>
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/Contact"}>
          Contact
        </NavLink>
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/Docs"}>
          Docs
        </NavLink>
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/GitHub"}>
          GitHub
        </NavLink>
        <NavLink className="text-gray-700 hover:text-blue-600" to={"/Enterprise"}>
          Enterprise
        </NavLink>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}

export default Navbar
