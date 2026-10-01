import axios from "axios";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [productData, setProductData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const getdata = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      setProductData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    let filtered = productData.filter((val) => {
      return val.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    console.log(filtered)
    setProductData(filtered)
  },[searchItem])
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm text-lime-400 font-medium uppercase tracking-widest">
            Store
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Find your product
          </h1>

          <p className="text-zinc-400 mt-3">
            Search through our collection of products.
          </p>
        </div>

        {/* Search Box */}
        <div className="relative mb-10">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400 text-xl">
            🔍
          </span>

          <input
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="
              w-full
              bg-zinc-900
              border border-zinc-800
              rounded-2xl
              py-4
              pl-14
              pr-5
              text-white
              placeholder:text-zinc-500
              outline-none
              transition
              focus:border-lime-400
              focus:ring-2
              focus:ring-lime-400/20
            "
          />
        </div>

        {/* Result Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-semibold">Products</h2>

          <span className="text-sm text-zinc-500">
            {productData.length} results
          </span>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productData.map((val) => (
            <div
              key={val.id}
              className="
                group
                bg-zinc-900
                border border-zinc-800
                rounded-2xl
                p-5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-lime-400/50
                hover:shadow-lg
                hover:shadow-lime-400/5
              "
            >
              {/* Image */}
              <div className="h-56 bg-white rounded-xl flex items-center justify-center p-6 mb-5 overflow-hidden">
                <img
                  src={val.image}
                  alt={val.title}
                  className="
                    h-full
                    max-w-full
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Category */}
              <p className="text-xs uppercase tracking-wider text-lime-400 mb-2">
                {val.category}
              </p>

              {/* Title */}
              <h3 className="font-semibold text-lg leading-snug line-clamp-2 min-h-14">
                {val.title}
              </h3>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-5">
                <span className="text-2xl font-bold">${val.price}</span>

                <button
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-lime-400
                    text-black
                    font-semibold
                    text-sm
                    transition
                    hover:bg-lime-300
                    active:scale-95
                  "
                >
                  Add +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;