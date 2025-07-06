import { IoImageOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { getMyProfile } from "@/services/userServices";
import { createPost } from "@/services/postService";

type User = {
  photo?: string;
};

export default function InputBox() {
  const [user, setUser] = useState<User | null>(null);
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const data = await getMyProfile();
      setUser(data);
    } catch (error) {
      console.error("gagal ambil data profile", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleCreatePost = async () => {
    if (!content.trim()) return alert("Isi konten dulu dong 😅");

    const formData = new FormData();
    formData.append("content", content);
    if (photo) formData.append("photo", photo);

    try {
      await createPost(formData);
      setContent("");
      setPhoto(null);
      setPreview(null);
      alert("post berhasil dibuat");
    } catch (error) {
      console.error("Gagal post", error);
      alert("Gagal Membuat Post");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCancelPhoto = () => {
    setPhoto(null);
    setPreview(null);
  };

  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mb-6 flex items-center justify-between">
        <img
          src={`http://localhost:3000${user?.photo}`}
          className="rounded-full w-10 h-10"
          alt="Profile"
        />

        <input
          type="text"
          placeholder="Make Your Post here"
          className="w-full bg-transparent text-white px-3 focus:outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex items-center gap-2">
          <label className="text-green-500 text-xl cursor-pointer">
            <IoImageOutline />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <button
            onClick={handleCreatePost}
            className="bg-green-900 hover:bg-green-400 text-white px-5 py-2 rounded-lg"
          >
            Post
          </button>
        </div>
      </div>

      {/* ✅ Preview dan tombol Cancel */}
      {preview && (
        <div className="relative mb-6 max-w-md mx-auto">
          <img
            src={preview}
            alt="Preview"
            className="w-full max-h-64 object-contain rounded-lg border border-gray-600"
          />
          <button
            onClick={handleCancelPhoto}
            className="absolute top-1 right-1 bg-black bg-opacity-50 hover:bg-opacity-80 cursor-pointer text-white rounded-full w-6 h-6 flex items-center justify-center"
            title="Hapus gambar"
          >
            ✖️
          </button>
        </div>
      )}
    </>
  );
}
