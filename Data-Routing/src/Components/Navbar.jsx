import React from 'react'
import { NavLink } from 'react-router'
const Navbar = () => {
  return (
    <div className='flex item-center justify-between p-3 bg-pink-50'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/service'}>Services</NavLink>
    </div>
  )
}

export default Navbar
