import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let loggedin = localStorage.getItem("loggedInUser");
  if (loggedin) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
