import { useEffect, useState } from "react";
import { getSuggestedUsers } from "@/services/suggestedUser";
import imageProfile from "@/assets/img/me.jpg";

type User = {
  id: string;
  name: string;
  username: string;
  photo?: string;
};

export default function SuggestedProfile() {
  const [users, setUsers] = useState<User[]>([]);
  const isProfilePage = location.pathname === "/profile";

  useEffect(() => {
    const fetchSuggested = async () => {
      try {
        const data = await getSuggestedUsers();
        setUsers(data);
      } catch (error) {
        console.error("Gagal ambil suggested users:", error);
      }
    };

    fetchSuggested();
  }, []);

  return (
    <div
      className={` bg-[#262626] p-4 rounded-lg ${
        isProfilePage ? "w-full" : "max-h-[370px] overflow-y-auto"
      } `}
    >
      <h2 className="text-lg font-semibold mb-4">Suggested for you</h2>

      {users.length === 0 ? (
        <p className="text-gray-400 text-sm">Tidak ada user yang disarankan</p>
      ) : (
        users.map((user) => (
          <div key={user.id} className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img
                src={
                  user.photo
                    ? `http://localhost:3000${user.photo}`
                    : imageProfile
                }
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-sm font-bold">{user.name}</h3>
                <p className="text-gray-400 text-xs">@{user.username}</p>
              </div>
            </div>
            <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-800">
              Follow
            </button>
          </div>
        ))
      )}
    </div>
  );
}
