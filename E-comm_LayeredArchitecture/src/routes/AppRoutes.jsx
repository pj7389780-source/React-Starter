import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import LoginPage from "../feature/auth/ui/LoginPage";
import RegisterPage from "../feature/auth/ui/RegisterPage";
import PublicProtected from "./protected/PublicProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import { hydratedUser } from "../feature/auth/api/authApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/auth/state/AuthSlice";
import MainProtected from "./protected/MainProtected";
import MainLayout from "../app/layouts/MainLayout";
import HomePage from "../shared/ui/HomePage";

const AppRoute = () =>{

  // const dispatch = useDispatch()
  // useEffect(()=>{
  //  (async()=>{
  //   try {
  //     let res = await hydratedUser();
  //     dispatch(addUser(res))
  //   } catch (error) {
  //     console.log(error)
  //   }
  //  })()
  // },[])

    const router = createBrowserRouter([
      {
        path: "",
        element: <PublicProtected />,
        children: [
          {
            path: "",
            element: <AuthLayout />,
            children: [
              {
                path: "",
                element: <LoginPage />,
              },
              {
                path: "/register",
                element: <RegisterPage />,
              },
            ],
          },
        ],
      },
      {
        path:"/main",
        element:<MainProtected/>,
        children:[
          {
            path:"",
            element:<MainLayout/>,
            children:[
              {
                path:"",
                element:<HomePage/>
              }
            ]
          }
        ]
      }
    ]);
    return <RouterProvider router={router}/>
}

export default AppRoute