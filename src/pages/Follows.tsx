import { useState, useEffect } from "react";
import Following from "@/features/FollowPages/Following";
import Followers from "@/features/FollowPages/Followers";

function Follows() {
  const [activeTab, setActiveTab] = useState("follow");
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

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
          Following
        </button>
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "unfollow"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("unfollow")}
        >
          Followers
        </button>
      </div>

      {userId ? (
        activeTab === "follow" ? (
          <Following />
        ) : (
          <Followers userId={userId} />
        )
      ) : (
        <p className="text-white p-4">
          User belum login atau userId tidak ditemukan.
        </p>
      )}
    </>
  );
}

export default Follows;
