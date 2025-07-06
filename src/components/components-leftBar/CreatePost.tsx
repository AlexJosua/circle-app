import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaRegImage } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createPost } from "@/services/postService";
import { getMyProfile } from "@/services/userServices";

type User = {
  photo?: string;
};

export function CreatePost() {
  const [user, setUser] = useState<User | null>(null); // data user
  const [content, setContent] = useState(""); // isi post
  const [photo, setPhoto] = useState<File | null>(null); // file yang akan dikirim
  const [preview, setPreview] = useState<string | null>(null); // preview image
  const [loading, setLoading] = useState(false); // loading state

  // Fetch profil user saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getMyProfile();
        setUser(data);
      } catch (error) {
        console.error("Gagal mengambil data profil:", error);
      }
    };

    fetchUser();
  }, []);

  // Fungsi ketika user klik "Post"
  const handleCreatePost = async () => {
    if (!content.trim()) return alert("Isi konten dulu dong 😅");

    const formData = new FormData();
    formData.append("content", content);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      setLoading(true);
      await createPost(formData); // panggil API buat posting
      alert("Post berhasil dibuat 🎉");

      // Reset form setelah posting
      setContent("");
      setPhoto(null);
      setPreview(null);
    } catch (error) {
      console.error("Gagal post:", error);
      alert("Gagal membuat post");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi ketika user memilih gambar
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file)); // buat URL preview
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
        {/* Foto profil + textarea */}
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

        {/* Preview Image */}
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-4 rounded-lg w-full max-h-[300px] object-cover border border-gray-600"
          />
        )}

        <div className="border-t border-gray-700 my-4" />

        {/* Pilih gambar + tombol post */}
        <div className="flex items-center justify-between">
          <label className="cursor-pointer">
            <FaRegImage className="text-4xl text-green-600" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
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
