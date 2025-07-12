import { useEffect, useState } from "react";
import { searchUsers } from "@/services/searchService";
import {
  followUser,
  unfollowUser,
  getFollowingUsers,
} from "@/services/followServices";

import { Link } from "react-router-dom";
import type { User } from "@/types";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [followingIds, setFollowingIds] = useState<string[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setCurrentUserId(id);
      getFollowingUsers(id).then((data) => {
        setFollowingIds(data.map((user: User) => user.id));
      });
    }
  }, []);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await searchUsers(query);
      setResults(
        data.filter((user: User) => user.id.toString() !== currentUserId)
      );
    } catch (error) {
      console.error("Gagal mencari user:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleFollow = async (targetUserId: string) => {
    try {
      const isFollowing = followingIds.includes(targetUserId);
      if (isFollowing) {
        await unfollowUser(targetUserId);
        setFollowingIds((prev) => prev.filter((id) => id !== targetUserId));
      } else {
        await followUser(targetUserId);
        setFollowingIds((prev) => [...prev, targetUserId]);
      }
    } catch (error) {
      console.error("Gagal follow/unfollow:", error);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="bg-[#1d1d1d] min-h-screen rounded-lg text-white p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your friend"
          className="w-full p-3 rounded-3xl mt-3 bg-[#383838] text-white focus:outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      <div className="mt-6">
        {loading ? (
          <p className="text-center text-gray-400">Searching...</p>
        ) : Array.isArray(results) && results.length > 0 ? (
          results.map((user) => {
            const isFollowing = followingIds.includes(user.id.toString());

            return (
              <div
                key={user.id}
                className="flex items-center justify-between p-3 hover:bg-[#2c2c2c] rounded-lg"
              >
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
                    alt="profile"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{user.name}</p>
                    <p className="text-gray-400 text-sm">@{user.username}</p>
                  </div>
                </Link>

                <button
                  onClick={() => handleToggleFollow(user.id.toString())}
                  className={`px-4 py-1 rounded-full border transition-colors ${
                    isFollowing
                      ? "text-red-400 border-red-400 hover:bg-red-700"
                      : "text-white border-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
              </div>
            );
          })
        ) : query ? (
          <div className="text-center text-gray-400 mt-10">
            <h2 className="text-lg font-semibold">No results</h2>
            <p className="text-sm mt-2">
              Try searching for something else or check the spelling.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
