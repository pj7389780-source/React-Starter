import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext'
import { Navigate, Outlet } from 'react-router';

const Auth = () => {
    const { loggedIn } = useContext(MyContext);
    if(!loggedIn){
        return <Navigate to={"/login"}/> 
    }

    return <Outlet/>
}

export default Auth
