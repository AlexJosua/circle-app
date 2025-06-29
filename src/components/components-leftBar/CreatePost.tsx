// components/CreatePostDialog.tsx
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaRegImage } from "react-icons/fa";
import imageProfile from "../../assets/img/me.jpg";
import { useEffect, useState } from "react";
import { createPost } from "@/services/postService";
import { getMyProfile } from "@/services/userServices";

type User = {
  photo?: string;
};

export function CreatePost() {
  const [user, setUser] = useState<User | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    try {
      const data = await getMyProfile();
      setUser(data);
      setProfilePhoto(data.photo);
    } catch (error) {
      console.error("Gagal mengambil data profil:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  });

  const handleCreatePost = async () => {
    if (!content.trim()) return alert("Isi konten dulu dong 😅");
    const formData = new FormData();
    formData.append("content", content);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      setLoading(true);
      await createPost(formData); // manggil service ke BE
      setContent("");
      setPhoto(null);
      alert("Post berhasil dibuat 🎉");
    } catch (error) {
      console.error("Gagal post:", error);
      alert("Gagal membuat post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-400 w-full py-3 text-lg font-semibold rounded-xl mt-8 hover:bg-green-500 transition">
          Create Post
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-2xl p-6 bg-[#1a1a1a] text-white max-w-xl border border-gray-700">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 w-full">
            <img
              src={`http://localhost:3000${user?.photo}`}
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
            <textarea
              placeholder="What is happening?!"
              className="bg-transparent text-white placeholder-gray-400 text-xl w-full resize-none focus:outline-none"
              rows={2}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="border-t border-gray-700 my-4" />

        <div className="flex items-center justify-between">
          <label className="cursor-pointer">
            <FaRegImage className="text-4xl text-green-600" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setPhoto(file);
              }}
            />
          </label>

          <Button
            className="bg-green-600 text-white hover:bg-green-700 rounded-full px-11 py-2"
            onClick={handleCreatePost}
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
