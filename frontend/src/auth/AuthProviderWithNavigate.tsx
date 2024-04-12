import { Auth0Provider, AppState, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  // const navigate = useNavigate();

  const {
    VITE_AUTH0_DOMAIN: domain,
    VITE_AUTH0_CLIENT_ID: clientId,
    VITE_AUTH0_CALLBACK_URL: redirectUri,
  } = import.meta.env;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    try {
      // navigate("/auth-callback");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
