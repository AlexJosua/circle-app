import { useEffect, useState } from "react";
import {
  getFollowersUsers,
  followUser,
  unfollowUser,
  getFollowingUsers,
} from "@/services/followServices";
import fallbackImg from "@/assets/img/me.jpg";
import type { User } from "@/types";

export default function Followers({ userId }: { userId: string }) {
  const [followers, setFollowers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [followingStatus, setFollowingStatus] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const [followersData, followingData] = await Promise.all([
          getFollowersUsers(userId),
          getFollowingUsers(userId),
        ]);

        setFollowers(followersData);

        const initialStatus: Record<string, boolean> = {};
        followingData.forEach((user: User) => {
          initialStatus[user.id] = true;
        });
        setFollowingStatus(initialStatus);
      } catch (error) {
        console.error("Gagal mengambil data followers atau following:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchFollowers();
  }, [userId]);

  const handleToggleFollow = async (targetUserId: string) => {
    try {
      const isFollowed = followingStatus[targetUserId];

      if (isFollowed) {
        await unfollowUser(targetUserId);
      } else {
        await followUser(targetUserId);
      }

      // Toggle status
      setFollowingStatus((prev) => ({
        ...prev,
        [targetUserId]: !isFollowed,
      }));
    } catch (err) {
      console.error("Gagal follow/unfollow user:", err);
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
              onClick={() => handleToggleFollow(user.id)}
              className={`border px-4 py-1 rounded-full text-white hover:bg-gray-700 ${
                followingStatus[user.id]
                  ? "border-gray-600 text-gray-400"
                  : "border-gray-400"
              }`}
            >
              {followingStatus[user.id] ? "Unfollow" : "Follow"}
            </button>
          </div>
        ))
      )}
    </div>
  );
}
