import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import MainRouting from '../src/routes/MainRouting'
import {Provider} from 'react-redux'
import {store} from '../src/app/store'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainRouting />
    <ToastContainer />
  </Provider>,
);