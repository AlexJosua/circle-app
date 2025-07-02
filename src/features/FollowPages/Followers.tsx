import { useEffect, useState } from "react";
import { getFollowersUsers, followUser } from "@/services/followServices";
import fallbackImg from "@/assets/img/me.jpg";

type User = {
  id: string;
  name: string;
  username: string;
  photo?: string | null;
};

export default function Followers({ userId }: { userId: string }) {
  const [followers, setFollowers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [followingIds, setFollowingIds] = useState<string[]>([]); // simpan siapa yg sudah di-follow

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const data = await getFollowersUsers(userId);
        setFollowers(data);
        console.log("Fetched followers:", data);
      } catch (error) {
        console.error("Gagal mengambil followers:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchFollowers();
  }, [userId]);

  const handleFollow = async (targetUserId: string) => {
    try {
      await followUser(targetUserId);
      setFollowingIds((prev) => [...prev, targetUserId]);
    } catch (err) {
      console.error("Gagal follow user:", err);
    }
  };

  if (loading) return <p className="text-white p-4">Loading followers...</p>;

  return (
    <div className="min-h-screen p-6 rounded-lg text-white">
      {followers.length === 0 ? (
        <p className="text-gray-400">Belum ada followers.</p>
      ) : (
        followers.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between p-4 border-b border-gray-700"
          >
            <div className="flex items-center">
              <img
                src={
                  user.photo
                    ? `http://localhost:3000${user.photo}`
                    : fallbackImg
                }
                onError={(e) =>
                  ((e.target as HTMLImageElement).src = fallbackImg)
                }
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-400">@{user.username}</p>
              </div>
            </div>

            <button
              disabled={followingIds.includes(user.id)}
              onClick={() => handleFollow(user.id)}
              className={`border px-4 py-1 rounded-full text-white hover:bg-gray-700 ${
                followingIds.includes(user.id)
                  ? "border-gray-600 text-gray-400 cursor-not-allowed"
                  : "border-gray-400"
              }`}
            >
              {followingIds.includes(user.id) ? "Following" : "Follow"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
