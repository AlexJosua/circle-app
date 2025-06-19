import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { LuUserRoundSearch } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Button } from "./ui/button";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function LeftBar() {
  return (
    <div className="w-1/5 p-6 bg-[#1d1d1d] h-screen flex flex-col left-0 top-0 fixed border-r-1 border-r-gray-500">
      <h1 className="text-5xl text-green-400 font-semibold mb-8">circle</h1>
      <nav className="space-y-4">
        <NavLink
          to="/"
          className="flex items-center gap-4 text-2xl text-gray-300 hover:text-green-400 transition"
        >
          <IoMdHome className="text-2xl" />
          Home
        </NavLink>

        <NavLink
          to="/search"
          className="flex items-center gap-4 text-2xl text-gray-300 hover:text-green-400 transition"
        >
          <LuUserRoundSearch className="text-2xl" />
          Search
        </NavLink>

        <NavLink
          to="/follows"
          className="flex items-center gap-4 text-2xl text-gray-300 hover:text-green-400 transition"
        >
          <FaRegHeart className="text-2xl" />
          Follows
        </NavLink>

        <NavLink
          to="/profile"
          className="flex items-center gap-4 text-2xl text-gray-300 hover:text-green-400 transition"
        >
          <CgProfile className="text-2xl" />
          Profile
        </NavLink>
      </nav>

      <Button className="bg-green-400 w-full py-3 text-lg font-semibold rounded-2xl mt-8 hover:bg-green-500 transition">
        Create Post
      </Button>

      <Button
        // onClick={clearUser}
        className="flex items-center gap-4 text-2xl text-gray-300 hover:text-green-400 transition mt-auto"
      >
        <RiLogoutBoxLine className="text-2xl" />
        Logout
      </Button>
    </div>
  );
}
