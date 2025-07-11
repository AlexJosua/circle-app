// src/pages/PostCommentsPage.tsx
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import imageProfile from "@/assets/img/user_male_circle_50px.png";
import { getPostById } from "@/services/postService";
import { IoImageOutline } from "react-icons/io5";
import { createComment } from "@/services/commentServices";

type Comment = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    name: string;
    username: string;
    photo?: string;
  };
};

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
  comments: Comment[];
};

export default function PostCommentsPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(true);

  const handleReply = async () => {
    if (!reply.trim() || !id) return;

    try {
      await createComment(id, reply);
      setReply(""); // Kosongkan textarea

      // Ambil ulang post untuk refresh komentar
      const updatedPost = await getPostById(id);
      setPost(updatedPost);
    } catch (err) {
      console.error("Gagal kirim komentar:", err);
    }
  };

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const data = await getPostById(id); // id tetap string
        setPost(data);
      } catch (err) {
        console.error("Gagal fetch detail post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-gray-300">Loading post...</div>;
  if (!post) return <div className="text-red-500">Post tidak ditemukan.</div>;

  return (
    <div className="max-w-screen-lg mx-auto text-white">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold mb-6 ml-3 mt-3">⭠ Home</h1>
      </Link>
      {/* Post Utama */}
      <div className="bg-[#262626] p-3 rounded-lg mb-4">
        <div className="flex gap-4 mb-3">
          <img
            src={
              post.author.photo?.startsWith("http")
                ? post.author.photo
                : imageProfile
            }
            className="w-12 h-12 rounded-full"
            alt="Author"
          />
          <div>
            <h2 className="font-bold text-xl">{post.author.name}</h2>
            <p className="text-gray-400">
              @{post.author.username} •{" "}
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        <p className="text-lg mb-2">{post.content}</p>

        {post.photo && (
          <img
            src={
              post.photo.startsWith("http")
                ? post.photo
                : `http://localhost:3000${post.photo}`
            }
            alt="Post"
            className="rounded-lg w-3/5 mb-3 object-cover"
          />
        )}

        <div className="flex gap-6 text-gray-400">
          <span className="flex items-center gap-1">
            <FaHeart /> {post._count?.likes ?? 0}
          </span>
          <span className="flex items-center gap-1">
            <FaComment /> {post._count?.comments ?? 0} Replies
          </span>
        </div>
      </div>

      {/* Reply Box */}
      <div className="flex items-center gap-3 bg-[#1a1a1a] p-4  border-y-1 border-gray-600">
        <img src={imageProfile} className="w-10 h-10 rounded-full" alt="User" />
        <textarea
          className="flex-1 bg-transparent border-none text-white placeholder-gray-400 focus:outline-none resize-none"
          rows={1}
          placeholder="Type your reply!"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
        <button className="text-green-500 text-2xl hover:text-green-400">
          <IoImageOutline />
        </button>

        {/* Reply Button */}
        <Button
          onClick={handleReply}
          className="bg-green-700 hover:bg-green-600 px-4 py-1 rounded-full"
        >
          Reply
        </Button>
      </div>

      {/* Komentar List */}
      <div className="space-y-4 mt-3 p-3">
        {post.comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <img
              src={
                comment.author.photo
                  ? `http://localhost:3000${comment.author.photo}`
                  : imageProfile
              }
              className="w-10 h-10 rounded-full"
              alt="User"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold">{comment.author.name}</h3>
                <span className="text-gray-500">
                  @{comment.author.username}
                </span>
              </div>
              <p className="text-gray-300 text-sm">{comment.content}</p>
              <p className="text-gray-500 text-xs">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
