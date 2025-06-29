import EditProfileButton from "./EditProfile";
import gambar1 from "../../assets/img/media/Albert Einstein.jpeg";
import { useEffect, useState } from "react";
import { getMyProfile } from "@/services/userServices";

type User = {
  name: string;
  username: string;
  photo?: string;
  bio?: string;
  followers?: number;
  following?: number;
};

export default function ProfileHeader() {
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

  return (
    <div className="bg-[#262626] rounded-lg">
      <div className="relative">
        <div className="h-32 w-full bg-gradient-to-r from-green-300 to-yellow-300 rounded-t-lg"></div>
        <img
          src={`http://localhost:3000${user?.photo}`}
          className="rounded-full border-4 border-gray-900 absolute -bottom-11 left-6 w-25"
          alt="Profile"
        />
        <EditProfileButton />
      </div>
      <div className="p-6 pt-12">
        <h1 className="text-2xl font-bold">✨ {user?.name} ✨</h1>
        <p className="text-gray-400">@{user?.username}</p>
        <p className="text-gray-300 text-sm mt-1">
          {user?.bio || "Picked over by the worms, and weird fishes"}
        </p>
        <p className="text-gray-400 text-sm mt-2">
          <span className="font-bold text-white">{user?.following || 200}</span>{" "}
          Following{" "}
          <span className="font-bold text-white">{user?.followers || 200}</span>{" "}
          Followers
        </p>
      </div>
    </div>
  );
}
