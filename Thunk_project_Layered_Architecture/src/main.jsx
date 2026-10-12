import { createRoot } from 'react-dom/client'
import store from '../src/app/store.jsx'
import './index.css'
import { AppRoute } from './Routing/AppRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from 'react-redux';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <AppRoute />
    </Provider>
  </QueryClientProvider>,
);
