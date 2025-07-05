import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { deletePost } from "@/services/postService";
import EditPostDialog from "./EditPostDialog"; // Pastikan path-nya sesuai
import type { DropDownProps } from "@/types";

export default function DropDown({
  postId,
  content,
  onSuccess,
}: DropDownProps) {
  const [openEdit, setOpenEdit] = useState(false);

  const handleDelete = async () => {
    const confirmDelete = confirm("Yakin ingin menghapus post ini?");
    if (!confirmDelete) return;

    try {
      await deletePost(postId);
      alert("Post berhasil dihapus");
      onSuccess?.();
    } catch (error) {
      console.error("Gagal menghapus post:", error);
      alert("Gagal menghapus post");
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-xl focus:outline-none">
          ⋮
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-[#1f1f1f] border border-gray-700 rounded-md p-2 shadow-lg animate-fade-in transition ease-in-out duration-800"
          sideOffset={8}
        >
          <DropdownMenuSeparator className="h-px bg-gray-600 my-1" />

          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setOpenEdit(true);
            }}
            className="hover:bg-gray-700 px-2 py-1 rounded cursor-pointer"
          >
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={handleDelete}
            className="hover:bg-gray-700 px-2 py-1 rounded cursor-pointer text-red-500"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Modal Edit langsung ditampilkan berdasarkan state */}
      <EditPostDialog
        postId={postId}
        initialContent={content}
        open={openEdit}
        setOpen={setOpenEdit}
        onSuccess={() => {
          setOpenEdit(false);
          onSuccess?.();
        }}
      />
    </>
  );
}
