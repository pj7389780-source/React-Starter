import { useState } from "react";

const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 ${filled ? "fill-lime-400" : "fill-zinc-700"}`}
    aria-hidden="true"
  >
    <path d="M10 1.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L10 15.4l-5.4 2.9 1-6.1L1.2 7.9l6.1-.9L10 1.5z" />
  </svg>
);

const HeartIcon = ({ active }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-5 w-5 transition-all duration-300 ${
      active
        ? "scale-110 fill-rose-500 stroke-rose-500"
        : "fill-none stroke-current"
    }`}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />
  </svg>
);

const CartIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 fill-none stroke-current"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
  </svg>
);

const TruckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 fill-none stroke-current"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z" />
    <circle cx="5.5" cy="18.5" r="2" />
    <circle cx="18.5" cy="18.5" r="2" />
  </svg>
);

const ProductCard = ({ product }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  const roundedRating = Math.round(product.rating);
  const outOfStock = product.stock === 0;
  const lowStock = product.stock > 0 && product.stock <= 10;

  const statusStyles = outOfStock
    ? "border-rose-500/30 bg-rose-500/10 text-rose-400"
    : lowStock
      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
      : "border-lime-400/30 bg-lime-400/10 text-lime-400";

  const dotStyles = outOfStock
    ? "bg-rose-400"
    : lowStock
      ? "bg-amber-400"
      : "bg-lime-400";

  const stockBarWidth = Math.min((product.stock / 100) * 100, 100);

  return (
    <div className="group relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-zinc-700/50 to-zinc-800/10 p-px transition-all duration-500 hover:-translate-y-1.5 hover:from-lime-400/40 hover:to-zinc-800/10 hover:shadow-[0_20px_60px_-15px_rgba(163,230,53,0.25)]">
      <div className="overflow-hidden rounded-[15px] bg-zinc-950">
        {/* Image stage */}
        <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_theme(colors.zinc.800)_0%,_theme(colors.zinc.950)_75%)]">
          {/* subtle grid texture */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Discount */}
          <span className="absolute left-4 top-4 z-10 rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-zinc-950 shadow-lg shadow-lime-400/20">
            -{Math.round(product.discountPercentage)}%
          </span>

          {/* Availability */}
          <span
            className={`absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${statusStyles}`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${dotStyles} ${!outOfStock ? "animate-pulse" : ""}`}
            />
            {product.availabilityStatus}
          </span>

          <img
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            className="relative h-full w-full object-contain p-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Brand + Category */}
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-lime-400/80">
              {product.brand}
            </span>
            <span className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-1 text-[11px] font-medium capitalize text-zinc-400">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="truncate text-lg font-semibold tracking-tight text-zinc-50">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="mt-2 flex items-center gap-2">
            <div
              className="flex items-center gap-0.5"
              aria-label={`Rated ${product.rating} out of 5`}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <StarIcon key={n} filled={n <= roundedRating} />
              ))}
            </div>
            <span className="text-sm font-semibold text-zinc-200">
              {product.rating}
            </span>
            <span className="text-xs text-zinc-500">
              ({product.reviews?.length || 0} reviews)
            </span>
          </div>

          {/* Divider */}
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

          {/* Price */}
          <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-3xl font-bold tracking-tight text-white">
                ${product.price}
              </span>
              <span className="font-mono text-sm text-zinc-600 line-through">
                ${originalPrice}
              </span>
            </div>

            <span className="flex items-center gap-1.5 text-xs text-zinc-500">
              <TruckIcon />
              <span className="max-w-[120px] truncate">
                {product.shippingInformation}
              </span>
            </span>
          </div>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <button
              disabled={outOfStock}
              className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-lime-400 py-3 text-sm font-bold text-zinc-950 transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_24px_rgba(163,230,53,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500 disabled:shadow-none"
            >
              <CartIcon />
              {outOfStock ? "Out of Stock" : "Add to Cart"}
            </button>

            <button
              onClick={() => setWishlisted((w) => !w)}
              aria-label={
                wishlisted ? "Remove from wishlist" : "Add to wishlist"
              }
              aria-pressed={wishlisted}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-400 transition-all duration-300 hover:border-rose-500/40 hover:text-rose-400 active:scale-90"
            >
              <HeartIcon active={wishlisted} />
            </button>
          </div>

          {/* Stock bar */}
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] text-zinc-500">
              <span>{lowStock ? "Selling fast" : "In stock"}</span>
              <span>{product.stock} left</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  outOfStock
                    ? "bg-rose-500"
                    : lowStock
                      ? "bg-amber-400"
                      : "bg-lime-400"
                }`}
                style={{ width: `${stockBarWidth}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
