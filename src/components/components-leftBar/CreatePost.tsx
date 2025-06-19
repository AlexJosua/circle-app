// components/CreatePostDialog.tsx
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaRegImage } from "react-icons/fa";

import imageProfile from "../../assets/img/me.jpg";

export function CreatePost() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-400 w-full py-3 text-lg font-semibold rounded-xl mt-8 hover:bg-green-500 transition">
          Create Post
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-2xl p-6 bg-[#1a1a1a] text-white max-w-xl border-1 border-gray-700 h-50">
        <div className="flex justify-between items-start">
          {/* Avatar + Input */}
          <div className="flex gap-4 w-full">
            <img
              src={imageProfile}
              alt="avatar"
              className="rounded-full w-10 h-10"
            />
            <textarea
              placeholder="What is happening?!"
              className="bg-transparent text-white placeholder-gray-400 text-xl w-full resize-none focus:outline-none"
              rows={2}
            />
          </div>
        </div>

        <div className="border-t border-gray-700" />

        <div className="flex items-center justify-between">
          <FaRegImage className="text-4xl text-green-600" />

          <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-11 py-2 ">
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
