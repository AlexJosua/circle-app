import { useEffect, useState } from "react";
import imageProfile from "../../assets/img/me.jpg";
import { getMyProfile } from "@/services/userServices";
import EditProfileButton from "@/features/ProfilePages/EditProfile";

type User = {
  name: string;
  username: string;
  photo?: string;
  bio?: string;
  _count: {
    followers?: number;
    following?: number;
  };
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

          <div className="absolute -right-4 -top-2">
            <EditProfileButton />
          </div>
        </div>

        <div className="mt-2 px-4">
          <h3 className="text-xl font-bold">✨ {user.name} ✨</h3>
          <p className="text-gray-400">@{user.username}</p>
          <p className="text-gray-300 text-sm mt-1">
            {user.bio || "Fullstack Developer"}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2 px-4 text-sm">
          <span className="font-bold">{user._count.followers ?? 0}</span>
          <span className="text-gray-400">Followers</span>
          <span className="font-bold">{user._count.following ?? 0}</span>
          <span className="text-gray-400">Following</span>
        </div>
      </div>
    </>
  );
}
