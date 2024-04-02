import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";
import AppRoutes from "./AppRoutes";
import Auth0ProviderWithNavigate from "./auth/AuthProviderWithNavigate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <AppRoutes />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
