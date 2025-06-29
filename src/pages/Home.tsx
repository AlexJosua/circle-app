import { FaComment, FaHeart } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import imageProfile from "../assets/img/user_male_circle_50px.png";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/postService";
import { Link } from "react-router-dom";

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
    likes: number;
    comments: number;
  };
};

export default function Home() {
  const [posts, setPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPost(data);
      } catch (error) {
        console.log("gagal ambil post:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-screen-lg p-2 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      {/* Input Box */}
      <div className="bg-[#262626] p-5 rounded-lg mb-6 flex items-center justify-between">
        <img
          src={imageProfile}
          className="rounded-full w-10 h-10"
          alt="Profile"
        />
        <input
          type="text"
          placeholder="Make Your Post here"
          className="w-full bg-transparent text-white px-3 focus:outline-none"
        />
        <div className="flex items-center gap-2">
          <button className="text-green-500 text-xl">
            <IoImageOutline />
          </button>
          <button className="bg-green-900 hover:bg-green-400 text-white px-5 py-2 rounded-lg">
            Post
          </button>
        </div>
      </div>

      {/* Post List */}
      {posts.map((post) => (
        <Link to={`/post/${post.id}`}>
          <div className="bg-[#262626] p-5 rounded-lg mb-6 hover:bg-gray-900">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={
                  post.author.photo
                    ? `http://localhost:3000${post.author.photo}`
                    : imageProfile
                }
                className="rounded-full w-16 h-16"
                alt="Profile"
              />
              <div>
                <h2 className="text-xl font-bold">{post.author.name}</h2>
                <p className="text-gray-400 text-md">
                  @{post.author.username} •{" "}
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-lg mb-3">{post.content}</p>

            {post.photo && (
              <img
                src={`http://localhost:3000${post.photo}`}
                alt="Post"
                className="rounded-lg w-4/5 mb-3 mx-auto"
              />
            )}

            <div className="flex gap-6 text-gray-400 text-lg">
              <span className="flex items-center gap-2">
                <FaHeart /> {post._count?.likes ?? 0}
              </span>
              <span className="flex items-center gap-2">
                <FaComment /> {post._count?.comments ?? 0} Replies
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
