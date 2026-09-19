import React from "react";
import { Heart, ShoppingCart, Star, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

  const navigate = useNavigate()
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Wishlist */}
      <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-gray-600 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-black hover:text-white">
        <Heart size={18} />
      </button>

      {/* Image Section */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-linear-to- from-gray-50 via-white to-indigo-50">
        {/* Decorative circles */}
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-indigo-200/30 blur-2xl transition-all duration-500 group-hover:scale-150" />

        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-200/30 blur-2xl transition-all duration-500 group-hover:scale-150" />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-semibold capitalize text-white">
          {product.category}
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="relative z-10 h-56 w-56 object-contain transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="absolute cursor-pointer bottom-4 left-1/2 z-20 flex -translate-x-1/2 translate-y-16 items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-800 opacity-0 shadow-lg backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick View
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2.5 py-1">
            <Star size={14} fill="currentColor" className="text-yellow-500" />

            <span className="text-sm font-semibold text-yellow-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            {product.rating.count} reviews
          </span>
        </div>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 min-h text-lg font-bold leading-7 text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          {/* Price */}
          <div>
            <p className="text-xs font-medium text-gray-400">Price</p>

            <span className="text-2xl font-extrabold tracking-tight text-gray-900">
              ${product.price}
            </span>
          </div>

          {/* Cart Button */}
          <button className="group/cart flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 active:scale-95">
            <ShoppingCart
              size={18}
              className="transition-transform duration-300 group-hover/cart:-rotate-12"
            />

            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
