import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

function MainNav() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
        onClick={async()=> await loginWithRedirect()}
      >
        Login In
      </Button>
    </div>
  );
}

export default MainNav;
