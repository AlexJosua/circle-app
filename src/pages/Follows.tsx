import Followers from "@/features/FollowPages/followers";
import Unfollowers from "@/features/FollowPages/Unfollowers";
import { useState } from "react";

function Follows() {
  const [activeTab, setActiveTab] = useState("follow");

  return (
    <>
      <div className="flex border-b border-gray-700 mt-6">
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "follow"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("follow")}
        >
          Followers
        </button>
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "unfollow"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("unfollow")}
        >
          Unfollowers
        </button>
      </div>

      {activeTab === "follow" ? (
        <>
          <Followers />
        </>
      ) : (
        <>
          <Unfollowers />
        </>
      )}
    </>
  );
}

export default Follows;
