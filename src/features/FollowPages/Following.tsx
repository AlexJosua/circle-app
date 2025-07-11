import { useEffect, useState } from "react";
import { getFollowingUsers, unfollowUser } from "@/services/followServices";
import fallbackImg from "@/assets/img/me.jpg";
import type { User } from "@/types";
import { Link } from "react-router-dom";

export default function Following() {
  const [following, setFollowing] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          console.error("User ID tidak ditemukan di localStorage");
          return;
        }

        const data = await getFollowingUsers(userId);
        setFollowing(data);
      } catch (error) {
        console.error("Gagal ambil following:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowing();
  }, []);

  const handleUnfollow = async (targetUserId: string) => {
    try {
      await unfollowUser(targetUserId);
      setFollowing((prev) => prev.filter((user) => user.id !== targetUserId));
    } catch (err) {
      console.error("Gagal unfollow:", err);
    }
  };

  if (loading) return <p className="text-white p-4">Loading following...</p>;

  return (
    <div className="min-h-screen p-6 rounded-lg text-white">
      {following.length === 0 ? (
        <p className="text-gray-400">Kamu belum mengikuti siapa pun.</p>
      ) : (
        following.map((user) =>
          user?.id ? (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 border-b border-gray-700"
            >
              <div className="flex items-center">
                <Link
                  to={`/profile/${user.username}`}
                  className="flex items-center gap-4"
                >
                  <img
                    src={
                      user.photo?.startsWith("http")
                        ? user.photo
                        : `http://localhost:3000${user.photo}`
                    }
                    alt={user.name}
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src = fallbackImg)
                    }
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-gray-400">@{user.username}</p>
                  </div>
                </Link>
              </div>
              <button
                onClick={() => handleUnfollow(user.id)}
                className="border border-gray-400 px-4 py-1 rounded-full text-white hover:bg-gray-700"
              >
                Unfollow
              </button>
            </div>
          ) : null
        )
      )}
    </div>
  );
}
