import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-2xl hover:shadow-lime-400/5">
      {/* Image Section */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-white p-8">
        {/* Wishlist */}
        <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 shadow-md transition hover:bg-lime-400 hover:text-black">
          <Heart size={19} />
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-lime-400">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[56px] text-lg font-bold leading-7">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-yellow-400/10 px-2 py-1">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-yellow-400">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-zinc-500">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-400">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between border-t border-zinc-800 pt-5">
          <div>
            <p className="text-xs text-zinc-500">Price</p>

            <p className="text-2xl font-black text-white">${product.price}</p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-lime-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-lime-300 active:scale-95">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
