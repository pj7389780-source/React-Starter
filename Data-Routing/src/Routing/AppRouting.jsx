import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'

const AppRouting = () => {
    const route = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/service",
            element: <Services />,
          },
        ],
      },
    ]);


  return <RouterProvider router={route}/>
}

export default AppRouting
