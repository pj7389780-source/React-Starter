import React from "react";

const ProductCard = ({ product }) => {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl
                    border border-gray-800 bg-gray-950 text-white
                    transition-all duration-300 hover:-translate-y-1
                    hover:border-gray-600 hover:shadow-2xl
                    hover:shadow-black/30">

      {/* Product Image */}
      <div className="relative m-3 overflow-hidden rounded-xl
                      bg-gray-900">

        <img
          src={product.images?.[0] || product.thumbnail}
          alt={product.title}
          className="h-64 w-full object-contain p-5
                     transition-transform duration-500
                     group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-lg
                         bg-white px-3 py-1.5 text-xs
                         font-bold text-black">
          -{Math.round(product.discountPercentage)}% OFF
        </span>

        {/* Stock Status */}
        <span className="absolute right-3 top-3 rounded-full
                         border border-emerald-500/20
                         bg-emerald-500/10 px-2.5 py-1
                         text-xs font-medium text-emerald-400">
          ● {product.availabilityStatus}
        </span>

        {/* Category */}
        <span className="absolute bottom-3 left-3 rounded-md
                         bg-black/60 px-2.5 py-1 text-xs
                         capitalize text-gray-300 backdrop-blur-md">
          {product.category}
        </span>
      </div>

      {/* Product Details */}
      <div className="px-5 pb-5 pt-2">

        {/* Brand */}
        <p className="mb-1 text-xs font-semibold uppercase
                      tracking-[0.2em] text-gray-500">
          {product.brand}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-lg
                       font-semibold leading-6 text-white
                       transition-colors group-hover:text-gray-300">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md
                          bg-amber-400/10 px-2 py-1">
            <span className="text-sm text-amber-400">★</span>
            <span className="text-sm font-semibold text-amber-300">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-gray-500">
            {product.reviews?.length || 0} reviews
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 min-h-10 text-sm
                      leading-5 text-gray-400">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-end gap-2">
          <span className="text-2xl font-bold tracking-tight">
            ${product.price.toFixed(2)}
          </span>

          <span className="pb-0.5 text-sm text-gray-500 line-through">
            ${originalPrice}
          </span>
        </div>

        {/* Shipping */}
        <p className="mt-2 text-xs text-gray-500">
          ↗ {product.shippingInformation}
        </p>

        {/* Button */}
        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center
                     gap-2 rounded-xl bg-white px-4 py-3
                     text-sm font-semibold text-black
                     transition-all duration-300
                     hover:bg-gray-200 active:scale-[0.98]"
        >
          <span>＋</span>
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;