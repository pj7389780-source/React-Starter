import {createBrowserRouter,RouterProvider} from 'react-router'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Auth from '../Components/Auth'
import PublicRoute from '../Components/PublicRoute'


const AuthRouting = () => {
    const route = createBrowserRouter([
      {
        path: "",
        element: <PublicRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/main",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
      },
    ]);


  return <RouterProvider router = {route}/>
}

export default AuthRouting
