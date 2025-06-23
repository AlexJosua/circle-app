import gambar1 from "../assets/img/media/Albert Einstein.jpeg";

import { useState } from "react";
import EditProfileButton from "@/features/ProfilePages/EditProfile";
import AllPost from "@/features/ProfilePages/Allpost";
import Media from "@/features/ProfilePages/Media";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className=" max-w-screen-lg p-2 mx-auto">
      {/* Profile Header */}
      <div className="bg-[#262626] rounded-lg">
        <div className="relative">
          <div className="h-32 w-full bg-gradient-to-r from-green-300 to-yellow-300 rounded-t-lg"></div>
          <img
            src={gambar1}
            className="rounded-full border-4 border-gray-900 absolute -bottom-11 left-6 w-25"
            alt="Profile"
          />
          <EditProfileButton />
        </div>
        <div className="p-6 pt-12">
          <h1 className="text-2xl font-bold">✨ Albert ✨</h1>
          <p className="text-gray-400">@albert</p>
          <p className="text-gray-300 text-sm mt-1">
            Picked over by the worms, and weird fishes
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="font-bold text-white">291</span> Following{" "}
            <span className="font-bold text-white">23</span> Followers
          </p>
        </div>
      </div>

      {/* Tabs (All Post & Media) */}
      <div className="flex border-b border-gray-700 mt-6">
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "all"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Post
        </button>
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "media"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("media")}
        >
          Media
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "all" ? <AllPost /> : <Media />}
      </div>
    </div>
  );
};

export default Profile;
