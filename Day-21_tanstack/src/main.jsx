import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from "react-toastify";
import MainRouting from '../src/routes/MainRouting'
import {Provider} from 'react-redux'
import {store} from '../src/app/store'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MainRouting />
      <ToastContainer />
    </Provider>
  </QueryClientProvider>,
);