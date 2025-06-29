import { useEffect, useState } from "react";
import imageProfile from "../../assets/img/me.jpg";
import { getMyProfile } from "@/services/userServices";

type User = {
  name: string;
  username: string;
  photo?: string;
  bio?: string;
  followers?: number;
  following?: number;
};

export default function UserProfile() {
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

  if (!user) return <div className="text-gray-300">Loading profile...</div>;

  return (
    <>
      <div className="bg-[#262626] p-2 rounded-md ">
        <h2 className="text-lg font-semibold">My Profile</h2>
        <div className="w-full h-20 bg-gradient-to-r from-green-300 via-yellow-400 to-yellow-600 rounded-lg mt-3"></div>

        <div className="relative flex items-center">
          <img
            src={
              user.photo ? `http://localhost:3000${user.photo}` : imageProfile
            }
            alt="Profile"
            className="w-20 h-20 border-4 border-[#191919] rounded-full ml-4 mt-[-30px]"
          />
          <button className="ml-auto bg-transparent border border-gray-400 px-4 py-1 rounded-full text-white text-sm hover:bg-gray-700">
            Edit Profile
          </button>
        </div>

        <div className="mt-2 px-4">
          <h3 className="text-xl font-bold">✨ {user.name} ✨</h3>
          <p className="text-gray-400">@{user.username}</p>
          <p className="text-gray-300 text-sm mt-1">
            {user.bio || "Fullstack Developer"}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 px-4 text-sm">
          <span className="font-bold">{user.following ?? 0}</span>
          <span className="text-gray-400">Following</span>
          <span className="font-bold">{user.followers ?? 0}</span>
          <span className="text-gray-400">Followers</span>
        </div>
      </div>
    </>
  );
}
