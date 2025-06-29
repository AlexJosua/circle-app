import { useEffect, useState } from "react";
import { getPostsByUserId } from "@/services/postService";
import imageFallback from "../../assets/img/me.jpg";

type Post = {
  id: number;
  photo?: string;
};

export default function Media({ userId }: { userId: string }) {
  const [mediaPosts, setMediaPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchMediaPosts = async () => {
      try {
        const posts = await getPostsByUserId(userId);
        console.log("DATA POST DARI BACKEND:", posts); // 👈 tambahkan ini
        const filtered = posts.filter((post: Post) => post.photo);
        setMediaPosts(filtered);
      } catch (error) {
        console.error("Gagal mengambil media post:", error);
      }
    };

    fetchMediaPosts();
  }, [userId]);

  return (
    <div className="text-gray-400 text-center p-6 grid grid-cols-3 gap-2">
      {mediaPosts.map((post) => (
        <img
          key={post.id}
          src={`http://localhost:3000${post.photo}`}
          className="rounded-lg w-full border-1 border-yellow-300"
          alt="User Media"
          onError={(e) => (e.currentTarget.src = imageFallback)}
        />
      ))}
    </div>
  );
}
