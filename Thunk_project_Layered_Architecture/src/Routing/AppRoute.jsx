import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PublicProtected from "./ProtectedRoutes/PublicProtected";
import PublicLayout from "../app/layouts/PublicLayout";
import LoginPage from "../features/Auth/ui/Pages/LoginPage";
import RegisterPage from "../features/Auth/ui/Pages/RegisterPage";
import MainProtected from "./ProtectedRoutes/MainProtected";
import MainLayout from "../app/layouts/MainLayout";
import Home from "../Shared/ui/Pages/Home";
import { useEffect } from "react";
import { hydrateUserApi } from "../features/Auth/state/authAction";
import { useDispatch } from "react-redux";
import About from "../Shared/ui/Pages/About";
import Cart from "../features/Cart/ui/Pages/Cart";
import Order from "../features/Orders/ui/Pages/Order";
import ProductPage from "../features/Products/ui/Pages/ProductPage";

export const AppRoute = () => {
    let dispatch = useDispatch()
    useEffect(()=>{
      (async()=>{
         try {
         let res = await dispatch(hydrateUserApi());
       } catch (error) {
        console.log(error)
       }
      })()
    },[])
    const router = createBrowserRouter([
      {
        path: "",
        element: <PublicProtected />,
        children: [
          {
            path: "",
            element: <PublicLayout />,
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
        path: "/main",
        element: <MainProtected />,
        children: [
          {
            path: "",
            element: <MainLayout />,
            children: [
              {
                path: "",
                element: <Home />,
              },
              {
                path: "about",
                element: <About />,
              },
              {
                path: "shop",
                element: <ProductPage />,
              },
              ,
              {
                path: "cart",
                element: <Cart />,
              },
              ,
              {
                path: "order",
                element: <Order />,
              },
            ],
          },
        ],
      },
    ]);

  return <RouterProvider router={router} />;
};
