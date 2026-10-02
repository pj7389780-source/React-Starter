import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard'
import { data } from './CustomHooks/Searching'

const App = () => {
  const { setSearch, afterfilter } = data();
  const [scrollY, setScrollY] = useState(null)
  let troatle = false

  useEffect(() => {
    let handleScroll = ()=>{
      if(troatle) return;
      troatle = true
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll);
    setInterval(()=>{
      troatle = false
    },7000)
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      {/* Search */}
      <div className="sticky top-5 z-999 mx-auto mb-10 max-w-2xl">
        <div className="relative">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3.5 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-lime-400 focus:ring-1 focus:ring-lime-400"
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500">
            🔍
          </span>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {afterfilter.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
}

export default App
