import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import InRoute from "../Routes/InRoute";
import { lazy, Suspense } from "react";
import Waiting from '../Components/Waiting'
let Home = lazy(() => import("../Pages/Home"));
let About = lazy(() => import("../Pages/About"));
let Service = lazy(() => import("../Pages/Service"));
let App = lazy(() => import("../App"));

let router = createBrowserRouter([
  {
    path: "/",
    element: <InRoute />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Waiting />}>
            <App />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Waiting />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/About",
        element: (
          <Suspense fallback={<Waiting />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Service",
        element: (
          <Suspense fallback={<Waiting />}>
            <Service />
          </Suspense>
        ),
      },
    ],
  },
]);
const MainRoute = ()=>{
  return <RouterProvider router={router} />;
}

export default MainRoute