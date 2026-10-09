const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white">
      
      {/* Image Skeleton */}
      <div className="relative flex h-72 items-center justify-center bg-zinc-100">
        {/* Discount badge */}
        <div className="absolute left-4 top-4 h-6 w-16 animate-pulse rounded-full bg-zinc-200" />

        {/* Stock badge */}
        <div className="absolute right-4 top-4 h-6 w-20 animate-pulse rounded-full bg-zinc-200" />

        {/* Product image */}
        <div className="h-48 w-48 animate-pulse rounded-xl bg-zinc-200" />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Brand + Category */}
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-16 animate-pulse rounded bg-zinc-200" />
          <div className="h-6 w-16 animate-pulse rounded-md bg-zinc-200" />
        </div>

        {/* Title */}
        <div className="h-6 w-4/5 animate-pulse rounded bg-zinc-200" />

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="h-4 w-20 animate-pulse rounded bg-zinc-200" />
          <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <div className="h-8 w-20 animate-pulse rounded bg-zinc-200" />
          <div className="mb-1 h-4 w-16 animate-pulse rounded bg-zinc-200" />
        </div>

        {/* Shipping */}
        <div className="mt-3 h-3 w-48 animate-pulse rounded bg-zinc-200" />

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <div className="h-11 flex-1 animate-pulse rounded-xl bg-zinc-200" />
          <div className="h-11 w-11 animate-pulse rounded-xl bg-zinc-200" />
        </div>

        {/* Stock */}
        <div className="mx-auto mt-3 h-3 w-28 animate-pulse rounded bg-zinc-200" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton