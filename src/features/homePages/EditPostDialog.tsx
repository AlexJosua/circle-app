import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { editPost } from "@/services/postService";

type Props = {
  postId: string;
  initialContent: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onSuccess?: () => void;
};

export default function EditPostDialog({
  postId,
  initialContent,
  open,
  setOpen,
  onSuccess,
}: Props) {
  const [content, setContent] = useState(initialContent);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("Konten tidak boleh kosong");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    if (file) formData.append("photo", file);

    try {
      await editPost(postId, formData);
      onSuccess?.();
      setOpen(false);
    } catch (err) {
      console.error("Gagal update post", err);
      alert("Gagal update post");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1f1f1f] text-white">
        <DialogHeader>
          <DialogTitle>Edit Post</DialogTitle>
        </DialogHeader>

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 mt-4 rounded bg-gray-800"
          rows={4}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-2 text-sm text-gray-300 hover:text-green-600"
        />

        <DialogFooter className="mt-4">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded bg-gray-600"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-green-600"
          >
            Simpan
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
