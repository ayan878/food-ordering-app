import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/AuthProviderWithNavigate";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0ProviderWithNavigate>
        <AppRoutes />
      </Auth0ProviderWithNavigate>
    </QueryClientProvider>
  </React.StrictMode>
);
