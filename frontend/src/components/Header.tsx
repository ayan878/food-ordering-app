import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <div className="flex border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-end">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tighter text-orange-500"
        >
          tastyTrials
        </Link>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}

export default Header;
