import React, { use } from 'react'
import Navbar from '../Components/Navbar'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const MainRoute = () => {
  const {user} = useSelector((store)=>store.authUser)
  if(!user){
    toast.error("Unauthorized User");
    return <Navigate to={"/"}/>
  }
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainRoute
