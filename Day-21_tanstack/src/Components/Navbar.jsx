import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { LogOut } from "lucide-react";


const Navbar = () => {
  const {user} = useSelector((store)=>store.authUser)
  let name = user.Name.split(" ")
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <h1 to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-950 text-sm font-black text-lime-400">
            DM
          </div>

          <span className="text-xl font-bold tracking-tight text-zinc-950">
            DryMart
          </span>
        </h1>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? "text-yellow-400 font-semibold transition-colors duration-200"
                : "text-black hover:text-green-400 transition-colors duration-200";
            }}
            to="/main"
            end
          >
            Home
          </NavLink>

          <NavLink
            to="shop"
            className={({ isActive }) => {
              return isActive
                ? "text-yellow-400 font-semibold transition-colors duration-200"
                : "text-black hover:text-green-400 transition-colors duration-200";
            }}
          >
            Shop
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) => {
              return isActive
                ? "text-yellow-400 font-semibold transition-colors duration-200"
                : "text-black hover:text-green-400 transition-colors duration-200";
            }}
          >
            About
          </NavLink>
        </div>
        <div className="flex items-center gap-6">
        <h1>
          Hi!! <strong>{name[0]}</strong>
        </h1>
          <NavLink
            to="/cart"
            className="group flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
          >
            <span>Cart</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-lime-400 px-1.5 text-[11px] font-bold text-black">
              0
            </span>
          </NavLink>
          <LogOut className="cursor-pointer" size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
