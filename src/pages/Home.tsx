import { FaComment, FaHeart } from "react-icons/fa6";
import imageProfile from "../assets/img/user_male_circle_50px.png";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/postService";
import { likePost, unlikePost } from "@/services/likeservices";
import { getMyProfile } from "@/services/userServices";
import { Link } from "react-router-dom";
import InputBox from "@/features/homePages/inputBox";
import DropDown from "@/features/homePages/DropDown";

type Post = {
  id: number;
  content: string;
  photo?: string;
  createdAt: string;
  author: {
    id: string;
    name: string;
    username: string;
    photo?: string;
  };
  likes?: { userId: string }[];
  _count?: {
    likes: number;
    comments: number;
  };
};

export default function Home() {
  const [posts, setPost] = useState<Post[]>([]);
  const [likes, setLikes] = useState<Record<number, number>>({});
  const [likedPosts, setLikedPosts] = useState<Record<number, boolean>>({});
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getAllPosts();
        const userData = await getMyProfile();
        setCurrentUserId(userData.id);
        setPost(postsData);

        const initialLikes: Record<number, number> = {};
        const initialLikedPosts: Record<number, boolean> = {};

        postsData.forEach((post: Post) => {
          initialLikes[post.id] = post._count?.likes ?? 0;
          initialLikedPosts[post.id] =
            post.likes?.some(
              (like: { userId: string }) => like.userId === userData.id
            ) ?? false;
        });

        setLikes(initialLikes);
        setLikedPosts(initialLikedPosts);
      } catch (error) {
        console.log("Gagal ambil data post atau user:", error);
      }
    };

    fetchData();
  }, []);

  const handleLike = async (postId: number) => {
    try {
      if (likedPosts[postId]) {
        await unlikePost(postId);
        setLikedPosts((prev) => ({ ...prev, [postId]: false }));
        setLikes((prev) => ({ ...prev, [postId]: (prev[postId] || 1) - 1 }));
      } else {
        await likePost(postId);
        setLikedPosts((prev) => ({ ...prev, [postId]: true }));
        setLikes((prev) => ({ ...prev, [postId]: (prev[postId] || 0) + 1 }));
      }
    } catch (error) {
      console.error("Gagal mengubah like:", error);
    }
  };

  return (
    <div className="max-w-screen-lg p-2 mx-auto">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <InputBox />

      {/* Post List */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-[#262626] p-5 rounded-lg mb-6 hover:bg-gray-900 relative"
        >
          {/* Header: Profile Info & Dropdown */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
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

            {post.author.id === userId && (
              <DropDown
                postId={post.id.toString()}
                content={post.content}
                onSuccess={() => {
                  // refresh data setelah delete
                  const fetchData = async () => {
                    const updatedPosts = await getAllPosts();
                    setPost(updatedPosts);
                  };
                  fetchData();
                }}
              />
            )}
          </div>

          {/* Post content (linkable) */}
          <Link to={`/post/${post.id}`}>
            <p className="text-lg mb-3 break-words whitespace-pre-wrap ">
              {post.content}
            </p>
            {post.photo && (
              <img
                src={`http://localhost:3000${post.photo}`}
                alt="Post"
                className="rounded-lg w-4/5 mb-3 mx-auto"
              />
            )}
          </Link>

          {/* Interactions */}
          <div className="flex gap-6 text-lg">
            <button
              onClick={(e) => {
                e.preventDefault(); // supaya tidak trigger link saat like
                handleLike(post.id);
              }}
              className={`flex items-center gap-2 ${
                likedPosts[post.id] ? "text-red-500" : "text-gray-400"
              }`}
            >
              <FaHeart />
              {likes[post.id] ?? 0}
            </button>

            <span className="flex items-center gap-2 text-gray-400">
              <FaComment /> {post._count?.comments ?? 0} Replies
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
