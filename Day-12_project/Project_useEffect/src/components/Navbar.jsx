import React, { useContext } from "react";
import { ShoppingCart, Home } from "lucide-react";
import { MyStore } from "../Context/MyStore";
const Navbar = () => {
  const {setIsCartOpen,cartItems}=useContext(MyStore)
  return (
    <nav className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-8 py-4 shadow-md">
      {" "}
      {/* Logo */}{" "}
      <div className="text-2xl font-bold tracking-tight text-gray-900">
        {" "}
        Shopify{" "}
      </div>{" "}
      {/* Navigation */}{" "}
      <div className="flex items-center gap-8">
        {" "}
        {/* Home */}{" "}
        <button
          onClick={() => {
            setIsCartOpen(true);
          }}
          className="flex cursor-pointer items-center gap-2 font-semibold text-gray-700 transition hover:text-black"
        >
          {" "}
          <Home size={19} /> Home{" "}
        </button>{" "}
        {/* Cart */}{" "}
        <button
          onClick={() => {
            setIsCartOpen(false);
          }}
          className="relative flex cursor-pointer items-center gap-2 font-semibold text-gray-700 transition hover:text-black"
        >
          {" "}
          <ShoppingCart size={20} /> Cart {/* Cart count */}{" "}
          <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
            {" "}
            {cartItems.length}{" "}
          </span>{" "}
        </button>{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;