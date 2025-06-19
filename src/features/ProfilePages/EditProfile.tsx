import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import imageProfile from "../../assets/img/me.jpg";

export default function EditProfileButton() {
  return (
    <>
      <Dialog>
        <form action="">
          <DialogTrigger asChild>
            <Button className="absolute right-6 -bottom-11 bg-[#262626] text-white px-4 py-1 rounded-full text-sm border-gray-400 border-1">
              Edit Profile
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-[#262626] border-1 border-gray-700">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>
                <div className="w-full h-20 bg-gradient-to-r from-green-300 via-yellow-400 to-yellow-600 rounded-lg mt-3"></div>

                <div className="relative flex items-center">
                  <img
                    src={imageProfile}
                    alt="Profile"
                    className="w-20 h-20 border-4 border-[#191919] rounded-full ml-4 mt-[-30px]"
                  />
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <div className="flex flex-col border-1 p-1.5 rounded-md border-gray-600 ">
                <label htmlFor="" className="text-sm text-gray-300">
                  name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="text-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col border-1 p-1.5 rounded-md border-gray-600">
                <label htmlFor="" className="text-sm text-gray-300">
                  username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="text-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col border-1 p-1.5 rounded-md border-gray-600">
                <label htmlFor="" className="text-sm text-gray-300">
                  bio
                </label>
                <textarea
                  placeholder="Bio"
                  className="text-md focus:outline-none resize-none"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-11 py-2 ">
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
