import React from 'react'
import { NavLink} from 'react-router'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8 py-4">
      <h1 className="text-xl font-bold text-lime-400">MyApp</h1>

      <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 p-2">
        <NavLink
          className="rounded-lg px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-lime-400 hover:text-black"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className="rounded-lg px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-lime-400 hover:text-black"
          to={"/about"}
        >
          About
        </NavLink>

        <NavLink
          className="rounded-lg px-5 py-2 text-sm font-medium text-zinc-300 transition hover:bg-lime-400 hover:text-black"
          to={"/service"}
        >
          Services
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar
