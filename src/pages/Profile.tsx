import { useEffect, useState } from "react";
import AllPost from "@/features/ProfilePages/Allpost";
import Media from "@/features/ProfilePages/Media";
import ProfileHeader from "@/features/ProfilePages/headerProfile";
import { getMyProfile } from "@/services/userServices";

type User = {
  id: string;
  name: string;
  username: string;
  bio?: string;
  photo?: string;
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMyProfile();
        setUser(data);
      } catch (error) {
        console.error("gagal ambil profile user", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="text-white">Loading...</div>;

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
        {activeTab === "all" ? (
          <AllPost userId={user?.id} />
        ) : (
          <Media userId={user.id} />
        )}
      </div>
    </div>
  );
};

export default Profile;
