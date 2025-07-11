import EditProfileButton from "./EditProfile";
import { useEffect, useState } from "react";
import { getMyProfile, getUserProfile } from "@/services/userServices";

type User = {
  name: string;
  username: string;
  photo?: string;
  bio?: string;
  _count?: {
    followers: number;
    following: number;
  };
};

type props = {
  username?: string;
};

export default function ProfileHeader({ username }: props) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = username
          ? await getUserProfile(username)
          : await getMyProfile();
        setUser(data);
      } catch (error) {
        console.error("gagal ambil profile user", error);
      }
    };
    fetchUser();
  }, [username]);

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <div className="bg-[#262626] rounded-lg">
      <div className="relative">
        <div className="h-32 w-full bg-gradient-to-r from-green-300 to-yellow-300 rounded-t-lg"></div>
        <img
          src={user.photo ? user.photo : "imageProfile"}
          className="rounded-full border-4 border-gray-900 absolute -bottom-11 left-6 w-25"
          alt="Profile"
        />
        {!username && <EditProfileButton />}
      </div>
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold">✨ {user?.name} ✨</h1>
        <p className="text-gray-400">@{user?.username}</p>
        <p className="text-gray-300 text-sm mt-1">
          {user?.bio || "Picked over by the worms, and weird fishes"}
        </p>
        <p className="text-gray-400 text-sm mt-2">
          <span className="font-bold text-white">
            {user?._count?.followers || 0}
          </span>{" "}
          Following
          <span className="font-bold text-white ml-2">
            {user?._count?.following || 0}
          </span>{" "}
          Followers{" "}
        </p>
      </div>
    </div>
  );
}
