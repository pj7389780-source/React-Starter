import { useEffect, useMemo, useState } from "react";

const SIZES = ["S", "M", "L", "XL"];
const R = 20;
const LEN = 2 * Math.PI * R;

const RatingRing = ({ rate }) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOn(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative h-11 w-11 shrink-0">
      <svg
        width="44"
        height="44"
        viewBox="0 0 46 46"
        className="-rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="23"
          cy="23"
          r={R}
          fill="none"
          strokeWidth="4"
          className="stroke-white/10"
        />
        <circle
          cx="23"
          cy="23"
          r={R}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          className="stroke-sky-400 transition-[stroke-dashoffset] duration-1000 ease-out motion-reduce:transition-none"
          style={{
            strokeDasharray: LEN,
            strokeDashoffset: on ? LEN * (1 - rate / 5) : LEN,
          }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-mono text-xs">
        {rate.toFixed(1)}
      </span>
    </div>
  );
};

const ProductCard = ({ product, onAdd }) => {
  const [size, setSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [added, setAdded] = useState(false);

  // The API description uses " / " between sentences -> two bullet notes
  const notes = useMemo(
    () =>
      product.description
        .split(" / ")
        .map((s) => s.trim())
        .filter(Boolean),
    [product.description],
  );

  const handleAdd = () => {
    onAdd?.({ ...product, size, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="relative w-[300px] rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] px-5 pb-5 pt-14 text-white shadow-2xl shadow-black/60 backdrop-blur-xl transition-transform duration-500 hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-3deg)] motion-reduce:transition-none motion-reduce:hover:transform-none">
      {/* stitched edge */}
      <div className="pointer-events-none absolute inset-2 rounded-[21px] border-[1.5px] border-dashed border-orange-300/25" />

      {/* punched hole + thread */}
      <div className="absolute left-1/2 top-4 h-[18px] w-[18px] -translate-x-1/2 rounded-full bg-zinc-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_0_0_3px_rgba(255,255,255,0.08)]">
        <span className="absolute -top-3 left-1/2 h-7 w-0.5 origin-bottom rotate-[8deg] rounded bg-gradient-to-b from-orange-300 to-transparent" />
      </div>

      {/* category + wishlist */}
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-xs capitalize text-zinc-400">
          {product.category}
        </span>
        <button
          onClick={() => setLiked((v) => !v)}
          aria-pressed={liked}
          aria-label={liked ? "Remove from wishlist" : "Save to wishlist"}
          className={`grid h-9 w-9 place-items-center rounded-full border border-white/10 transition ${
            liked
              ? "bg-rose-400/15 text-rose-400"
              : "bg-white/5 text-zinc-400 hover:text-white"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`transition-transform ${liked ? "scale-110" : ""}`}
            aria-hidden="true"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </button>
      </div>

      {/* image tile + price sticker */}
      <div className="group relative flex h-[250px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-100">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-zinc-200" />
        )}
        <img
          src={product.image}
          alt={product.title}
          onLoad={() => setLoaded(true)}
          className="h-[86%] w-[80%] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105 hover:-rotate-1 motion-reduce:transition-none"
        />
        <span className="absolute bottom-3 right-3 -rotate-3 rounded-xl rounded-bl-sm bg-orange-300 px-3 py-1.5 text-lg font-extrabold text-zinc-950 shadow-lg shadow-orange-300/40">
          ${product.price}
        </span>
      </div>

      {/* title */}
      <h2 className="mb-3 mt-4 line-clamp-2 text-xl font-bold leading-tight tracking-tight">
        {product.title}
      </h2>

      {/* rating */}
      <div className="flex items-center gap-3">
        <RatingRing rate={product.rating.rate} />
        <p className="text-sm leading-snug">
          {product.rating.rate.toFixed(1)} out of 5
          <br />
          <span className="text-zinc-400">
            {product.rating.count.toLocaleString()} reviews
          </span>
        </p>
      </div>

      {/* sizes */}
      <div className="mb-2 mt-5 flex justify-between text-[13px] font-semibold text-zinc-400">
        <span>Size</span>
        {!size && <span>Pick one to add</span>}
      </div>
      <div
        role="radiogroup"
        aria-label="Size"
        className="grid grid-cols-4 gap-2"
      >
        {SIZES.map((s) => (
          <button
            key={s}
            role="radio"
            aria-checked={size === s}
            onClick={() => setSize(s)}
            className={`h-10 rounded-xl border font-mono text-sm transition ${
              size === s
                ? "border-sky-400 bg-sky-400 text-zinc-950"
                : "border-white/10 bg-white/5 hover:border-sky-400/50"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* fit notes */}
      <p className="mb-2 mt-5 text-[13px] font-semibold text-zinc-400">
        Fit notes
      </p>
      <ul className="space-y-2">
        {notes.map((n, i) => (
          <li
            key={i}
            className="flex gap-2 text-[13.5px] leading-relaxed text-zinc-300"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-1 shrink-0 text-sky-400"
              aria-hidden="true"
            >
              <path d="M5 12l5 5L20 7" />
            </svg>
            <span className={open ? "" : "line-clamp-2"}>{n}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-1.5 text-[13px] font-medium text-sky-400 hover:text-sky-300"
      >
        {open ? "Show less" : "Read full notes"}
      </button>

      {/* quantity + add */}
      <div className="mt-5 flex gap-2.5">
        <div className="flex items-center rounded-2xl border border-white/10 bg-white/5">
          <button
            onClick={() => setQty((q) => q - 1)}
            disabled={qty <= 1}
            aria-label="Decrease quantity"
            className="h-12 w-9 text-lg disabled:cursor-not-allowed disabled:opacity-30"
          >
            −
          </button>
          <span
            className="min-w-[22px] text-center font-mono text-sm"
            aria-live="polite"
          >
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            aria-label="Increase quantity"
            className="h-12 w-9 text-lg"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAdd}
          disabled={!size}
          className={`h-[50px] flex-1 rounded-2xl font-bold text-zinc-950 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 ${
            added ? "bg-sky-400" : "bg-zinc-100 hover:bg-white"
          }`}
        >
          {added ? (
            "Added to cart"
          ) : (
            <>
              Add to Cart
              <span className="ml-1.5 font-medium opacity-60">
                ${(product.price * qty).toFixed(2)}
              </span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
