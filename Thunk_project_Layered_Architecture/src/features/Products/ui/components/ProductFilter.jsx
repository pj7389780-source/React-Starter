import { getAllcategories } from "../../hook/useProducts";

const ProductFilter = ({ search, setSearch, setCategroy }) => {
  const { data, isPending } = getAllcategories();
  return (
    <section className="w-full border-b border-gray-800 bg-gray-950 px-4 py-6 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        {/* Search Bar */}
        <div className="relative w-full sm:max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.34-4.34m1.59-5.16a7.75 7.75 0 1 1-15.5 0 7.75 7.75 0 0 1 15.5 0Z"
            />
          </svg>

          <input
            value={search || ""}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            placeholder="Search products by title..."
            className="w-full rounded-xl border border-gray-800
                       bg-gray-900 py-3.5 pl-12 pr-4 text-sm
                       text-white placeholder:text-gray-500
                       outline-none transition-all duration-300
                       focus:border-gray-600 focus:ring-2
                       focus:ring-white/5"
          />
        </div>

        {/* Category Select */}
        <div className="flex w-full flex-col gap-2 sm:w-64">
          <label
            htmlFor="category"
            className="text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Filter by category
          </label>

          <select
            onChange={(e) => setCategroy(e.target.value)}
            id="category"
            defaultValue=""
            className="w-full appearance-none rounded-xl border
                       border-gray-800 bg-gray-900 px-4 py-3.5
                       text-sm text-gray-300 outline-none
                       transition-all duration-300
                       focus:border-gray-600 focus:ring-2
                       focus:ring-white/5"
          >
            <option value="" >
              All Categroies
            </option>
            {isPending ? (
              <option>Loading Categroies</option>
            ) : (
              data.map((item) => {
                return (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                );
              })
            )}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ProductFilter;
