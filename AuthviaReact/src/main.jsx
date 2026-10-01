import { createRoot } from 'react-dom/client'
import './index.css'
 import { ToastContainer} from "react-toastify";
import AuthRouting from './Routing/AuthRouting.jsx';
import { ContextProvider } from './Context/MyContext.jsx';

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AuthRouting />
    <ToastContainer />
  </ContextProvider>,
);
