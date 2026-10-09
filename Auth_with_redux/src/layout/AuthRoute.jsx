import { Navigate, Outlet } from 'react-router'
import {useSelector} from 'react-redux'
import { toast } from 'react-toastify';

const AuthRoute = () => {
  const {user} = useSelector((store) => store.authUser);
  if(user){
    toast.success("Authorized User");
    return <Navigate to={"/main"}/>
  }

  return <Outlet/>
}

export default AuthRoute
