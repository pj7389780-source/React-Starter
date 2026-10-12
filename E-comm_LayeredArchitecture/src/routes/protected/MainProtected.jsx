import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';

const MainProtected = () => {
  const { isAuthenticated,isLoading } = useSelector((store) => store.auth);
  if(!isAuthenticated){
    return <Navigate to={"/"}/>
  }
   if (isLoading) {
     return <h1>Loading....</h1>;
   }
  return (
    <div>
      <h1>NavBar</h1>
      <Outlet />
    </div>
  );
};

export default MainProtected
