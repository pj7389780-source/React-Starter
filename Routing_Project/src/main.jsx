import { createRoot } from 'react-dom/client'
import './index.css'
import MainRouting from './MainRouting/MainRouting.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById("root")).render(
  <>
    <MainRouting />
    <ToastContainer />
  </>,
);

