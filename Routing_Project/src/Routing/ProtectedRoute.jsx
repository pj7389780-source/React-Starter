import { Navigate, Outlet } from "react-router"
import Navbar from "../Components/Navbar"

const ProtectedRoute = () => {
    let loggedin = localStorage.getItem("loggedInUser")

    if(!loggedin){
      return <Navigate to={"/"}/>
    }
  
  return (
    <div className="grid grid-cols-[1fr_5fr] gap-8 ">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default ProtectedRoute
