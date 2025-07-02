import { useEffect, useState } from "react";
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
import { IoImageOutline } from "react-icons/io5";
import imageProfile from "../../assets/img/me.jpg";
import { getMyProfile, updateProfile } from "@/services/userServices";

type User = {
  name: string;
  username: string;
  bio?: string;
  photo?: string;
};

export default function EditProfileButton() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  // Ambil data user saat komponen mount
  const fetchUser = async () => {
    try {
      const data = await getMyProfile();
      setUser(data);
      setName(data.name);
      setUsername(data.username);
      setBio(data.bio || "");
    } catch (error) {
      console.error("Gagal mengambil data profil:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("bio", bio);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      await updateProfile(formData);
      const updatedUser = await getMyProfile(); // ambil ulang
      setUser(updatedUser); // update tampilan
      alert("Profile updated successfully!");
      setOpen(false); // tutup dialog
    } catch (error) {
      console.error("Gagal update profile", error);
    }
  };

  if (!user) return <div className="text-white">Loading...</div>;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="absolute right-6 -bottom-14 bg-[#262626] text-white px-4 py-1 rounded-full text-sm border-gray-400 border-1">
          Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-[#262626] border border-gray-700">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            <div className="w-full h-20 bg-gradient-to-r from-green-300 via-yellow-400 to-yellow-600 rounded-lg mt-3" />
            <div className="relative w-20 h-20 ml-4 mt-[-30px] group">
              <img
                src={
                  photo
                    ? URL.createObjectURL(photo)
                    : user.photo
                    ? `http://localhost:3000${user.photo}`
                    : imageProfile
                }
                alt="Profile"
                className="w-full h-full object-cover border-4 border-[#191919] rounded-full"
              />
              <label
                htmlFor="photo"
                className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              >
                <IoImageOutline className="text-white text-2xl" />
              </label>
              <input
                id="photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setPhoto(e.target.files[0]);
                  }
                }}
              />
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 mt-2">
          <div className="flex flex-col border p-1.5 rounded-md border-gray-600">
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-md bg-transparent text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col border p-1.5 rounded-md border-gray-600">
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-md bg-transparent text-white focus:outline-none"
            />
          </div>
          <div className="flex flex-col border p-1.5 rounded-md border-gray-600">
            <label className="text-sm text-gray-300">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              className="text-md bg-transparent text-white focus:outline-none resize-none"
            />
          </div>
        </div>

        <DialogFooter className="mt-4">
          <Button
            type="submit"
            className="bg-green-600 text-white hover:bg-green-700 rounded-full px-11 py-2"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
