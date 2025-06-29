import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Button } from "../components/ui/button";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CreatePost } from "../components/components-leftBar/CreatePost";
import { logoutUser } from "@/services/authService";

export default function LeftBar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="w-1/5 p-6 bg-[#1d1d1d] h-screen flex flex-col left-0 top-0 fixed border-r-1 border-r-gray-500">
      <h1 className="text-5xl text-green-400 font-semibold mb-8">circle</h1>
      <nav className="space-y-4">
        <NavLink
          to="/"
          className="flex items-center gap-4 text-xl text-gray-300 hover:text-green-400 transition"
        >
          <IoMdHome className="text-xl" />
          Home
        </NavLink>

        <NavLink
          to="/search"
          className="flex items-center gap-4 text-xl text-gray-300 hover:text-green-400 transition"
        >
          <LuUserRoundSearch className="text-xl" />
          Search
        </NavLink>

        <NavLink
          to="/follows"
          className="flex items-center gap-4 text-xl text-gray-300 hover:text-green-400 transition"
        >
          <FaRegHeart className="text-xl" />
          Follows
        </NavLink>

        <NavLink
          to="/profile"
          className="flex items-center gap-4 text-xl text-gray-300 hover:text-green-400 transition"
        >
          <CgProfile className="text-xl" />
          Profile
        </NavLink>
      </nav>

      {!isHomePage && <CreatePost />}

      <div className="flex-grow" />

      <Button
        className="flex items-center gap-4 text-xl text-gray-300 hover:text-green-400 transition"
        onClick={handleLogout}
      >
        <RiLogoutBoxLine className="text-xl" />
        Logout
      </Button>
    </div>
  );
}
