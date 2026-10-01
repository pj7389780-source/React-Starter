import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "../Routing/ProtectedRoute";
import Public from "../Routing/Public";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Users from "../Pages/Users";

const MainRouting = () => {

    const route = createBrowserRouter([{
        path:"/",
        element:<Public/>,
        children:[
            {
                path:"",
                element:<Login/>
        },
    {
        path:"register",
        element:<Register/>
    }],
    },
    {
        path:"/main",
        element:<ProtectedRoute/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"Products",
                element:<Products/>
            },
            {
                path:"Users",
                element: <Users/>
            }
        ]
    }
])
  return <RouterProvider router={route}/>
};

export default MainRouting;
