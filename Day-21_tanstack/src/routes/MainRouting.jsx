import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthRoute from "../layout/AuthRoute";
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import Home from '../Pages/Home'
import MainRoute from "../layout/MainRoute";
import About from "../Pages/About";
import Shop from "../Pages/Shop";

const MainRouting = () => {
  let route = createBrowserRouter([
    {
        path:"/",
        element:<AuthRoute/>,
        children:[
            {
                path:"",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            }
        ]
    },
    {
        path:"/main",
        element:<MainRoute/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"shop",
                element:<Shop/>
            }
        ]

    }
]);

  return <RouterProvider router={route} />;
};

export default MainRouting;
