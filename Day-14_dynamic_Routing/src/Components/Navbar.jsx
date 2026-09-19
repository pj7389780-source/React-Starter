import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav class="bg-white border-b border-gray-200 shadow-sm">
      <div class="w-full  mx-auto px-5 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-indigo-600 cursor-pointer">
            ShopEase
          </h1>

          <div class="hidden md:flex items-center gap-8">
            <h1
              onClick={() => navigate("/")}
              class="text-gray-700 font-medium cursor-pointer hover:text-indigo-600 transition"
            >
              Home
            </h1>
            <h1
              onClick={() => navigate("/Categories")}
              class="text-gray-700 font-medium cursor-pointer hover:text-indigo-600 transition"
            >
              Categories
            </h1>

            <h1
              onClick={() => navigate("/About")}
              class="text-gray-700 font-medium cursor-pointer hover:text-indigo-600 transition"
            >
              About
            </h1>
            <h1
              onClick={() => navigate("/Contact")}
              class="text-gray-700 font-medium cursor-pointer hover:text-indigo-600 transition"
            >
              Contact
            </h1>
          </div>
          <button
            class="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-lg
               font-medium hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <button class="md:hidden text-2xl text-gray-700">☰</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
