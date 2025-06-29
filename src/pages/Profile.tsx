import { useState } from "react";
import AllPost from "@/features/ProfilePages/Allpost";
import Media from "@/features/ProfilePages/Media";
import ProfileHeader from "@/features/ProfilePages/headerProfile";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className=" max-w-screen-lg p-2 mx-auto">
      <ProfileHeader />
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
