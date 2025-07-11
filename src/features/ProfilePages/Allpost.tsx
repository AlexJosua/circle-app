import { useEffect, useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa6";
import { getPostsByUserId } from "@/services/postService";
import imageProfileFallback from "../../assets/img/me.jpg";
import { Link } from "react-router-dom";
import DropDown from "../homePages/DropDown";

type Post = {
  id: number;
  content: string;
  photo?: string;
  createdAt: string;
  author: {
    name: string;
    username: string;
    photo?: string;
  };
  _count?: {
    comments: number;
    likes: number;
  };
};

export default function AllPost({ userId }: { userId: string }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsByUserId(userId);
        setPosts(data);
      } catch (error) {
        console.error("Gagal mengambil post:", error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-[#262626] p-4 rounded-lg mb-4 text-white"
        >
          <div className="flex items-center gap-3 mb-3 justify-between">
            <div className="flex gap-3">
              <img
                src={
                  post.author.photo?.startsWith("http")
                    ? post.author.photo
                    : imageProfileFallback
                }
                className="rounded-full w-10 h-10"
                alt="User"
              />
              <div>
                <h2 className="text-md font-bold">{post.author.name}</h2>
                <p className="text-gray-400 text-sm">
                  @{post.author.username} •{" "}
                  {new Date(post.createdAt).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <DropDown
              postId={post.id.toString()}
              content={post.content}
              onSuccess={async () => {
                const updatedPosts = await getPostsByUserId(userId);
                setPosts(updatedPosts);
              }}
            />
          </div>

          <Link to={`/post/${post.id}`}>
            {" "}
            {/* ✅ Perubahan utama */}
            <div className="hover:bg-gray-600 p-2 rounded-2xl">
              <p className="text-sm mb-2 break-words whitespace-pre-wrap">
                {post.content}
              </p>
              {post.photo && (
                <img
                  src={
                    post.photo?.startsWith("http")
                      ? post.photo
                      : `http://localhost:3000${post.photo}`
                  }
                  alt="Post Media"
                  className="rounded-lg w-full mb-2"
                />
              )}
            </div>
          </Link>
          <div className="flex gap-4 text-gray-400 text-sm">
            <span className="flex items-center gap-1">
              <FaHeart /> {post._count?.likes}
            </span>
            <span className="flex items-center gap-1">
              <FaComment /> {post._count?.comments} Replies
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
