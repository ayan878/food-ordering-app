import { useCreateMyUser } from "@/api/MyUserApi";
import { Auth0Provider, AppState, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const { createUser } = useCreateMyUser();

  const {
    VITE_AUTH0_DOMAIN: domain,
    VITE_AUTH0_CLIENT_ID: clientId,
    VITE_AUTH0_CALLBACK_URL: redirectUri,
  } = import.meta.env;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth");
  }

  const onRedirectCallback = (appState: AppState, user: User) => {
    console.log(user);
    if (user?.sub && user?.email) {
      console.log(user?.sub);
      console.log("success");
      createUser({ auth0id: user.sub, email: user.email });
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
