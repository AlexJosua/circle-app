import { useEffect, useState } from "react";
import { searchUsers } from "@/services/searchService";
import imageProfile from "@/assets/img/user_male_circle_50px.png";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  username: string;
  photo?: string;
};

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await searchUsers(query);
      console.log("Data hasil search:", data); // ⬅️ Tambahkan ini
      setResults(data);
    } catch (error) {
      console.error("Gagal mencari user:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      handleSearch();
    }, 500); // debounce

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
          results.map((user) => (
            <Link to={`/profile/${user.username}`} key={user.id}>
              <div className="flex items-center gap-4 p-3 hover:bg-[#2c2c2c] rounded-lg">
                <img
                  src={
                    user.photo
                      ? `http://localhost:3000${user.photo}`
                      : imageProfile
                  }
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-white">{user.name}</p>
                  <p className="text-gray-400 text-sm">@{user.username}</p>
                </div>
              </div>
            </Link>
          ))
        ) : query ? (
          <div className="text-center text-gray-400 mt-10">
            <h2 className="text-lg font-semibold">No results</h2>
            <p className="text-sm mt-2">
              Try searching for something else or check the spelling of what you
              typed.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
