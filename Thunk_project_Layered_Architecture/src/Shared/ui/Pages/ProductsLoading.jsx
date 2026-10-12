const ProductLoading = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="h-8 w-56 bg-gray-800 rounded-lg animate-pulse mb-3" />
        <div className="h-4 w-72 max-w-full bg-gray-800/70 rounded animate-pulse" />
      </div>

      {/* Product Skeleton Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-4"
          >
            {/* Image */}
            <div className="h-56 w-full rounded-xl bg-gray-800 animate-pulse mb-5" />

            {/* Category */}
            <div className="h-3 w-20 rounded bg-gray-800 animate-pulse mb-3" />

            {/* Product title */}
            <div className="h-5 w-4/5 rounded bg-gray-800 animate-pulse mb-2" />
            <div className="h-5 w-2/5 rounded bg-gray-800 animate-pulse mb-5" />

            {/* Price and button */}
            <div className="flex items-center justify-between gap-3">
              <div className="h-6 w-20 rounded bg-gray-800 animate-pulse" />
              <div className="h-10 w-28 rounded-xl bg-gray-800 animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Loading message */}
      <p className="text-center text-gray-500 text-sm mt-10 animate-pulse">
        Loading products...
      </p>
    </div>
  );
};

export default ProductLoading;