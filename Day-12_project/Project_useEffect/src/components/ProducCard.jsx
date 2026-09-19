import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../Context/MyStore";

const ProductCard = ({ product, isProduct}) => {
  const { addToCart, increment, decrement } = useContext(MyStore);
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-64 items-center justify-center bg-slate-100 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-100 px-2 py-1">
            <Star size={14} fill="currentColor" className="text-yellow-500" />
            <span className="text-sm font-semibold text-slate-700">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h text-lg font-bold leading-7 text-slate-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              Price
            </p>

            <p className="text-2xl font-bold text-slate-900">
              ${product.price}
            </p>
          </div>

          {isProduct && isProduct.quantity  ? (
            <button className="flex items-center overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <span
                onClick={() => decrement(product.id)}
                className="flex h-9 w-9 cursor-pointer items-center justify-center text-lg font-medium transition hover:bg-gray-100"
              >
                −
              </span>
              <span className="flex h-9 w-10 items-center justify-center border-x border-gray-300 text-sm font-semibold">
                {isProduct.quantity}
              </span>
              <span
                onClick={ () =>increment(product.id)
                  }
                className="flex h-9 w-9 cursor-pointer items-center justify-center text-lg font-medium transition hover:bg-gray-100"
              >
                +
              </span>
            </button>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-95"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
