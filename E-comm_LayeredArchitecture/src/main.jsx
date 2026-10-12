import { createRoot } from 'react-dom/client'
import { store } from './app/store.jsx'
import './index.css'
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import AppRoute from './routes/AppRoutes.jsx';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRoute/>
    <ToastContainer/>
  </Provider>,
);
