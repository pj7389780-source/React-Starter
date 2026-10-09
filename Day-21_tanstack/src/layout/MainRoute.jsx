import React, { use } from 'react'
import Navbar from '../Components/Navbar'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const MainRoute = () => {
  const {user} = useSelector((store)=>store.authUser)
  if(!user){
    return <Navigate to={"/"}/>
  }
  return (
    <div>
      <Navbar />
      <div className='p-4'>
        <Outlet />
      </div>
    </div>
  );
}

export default MainRoute
