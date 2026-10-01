import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyContext } from '../Context/MyContext'

const PublicRoute = () => {
    const { loggedIn } = useContext(MyContext);
    if(loggedIn){
        return <Navigate to={"/main"}/>
    }

  return <Outlet/>
}

export default PublicRoute
