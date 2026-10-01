import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './Pages/Login.jsx'
import MainRouting from './MainRouting/MainRouting.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <>
    <MainRouting />
    <ToastContainer />
  </>,
);

