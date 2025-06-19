import imageProfile from "../../assets/img/me.jpg";

export default function UserProfile() {
  return (
    <>
      <div className="bg-[#262626] p-2 rounded-md ">
        <h2 className="text-lg font-semibold">My Profile</h2>
        <div className="w-full h-20 bg-gradient-to-r from-green-300 via-yellow-400 to-yellow-600 rounded-lg mt-3"></div>

        <div className="relative flex items-center">
          <img
            src={imageProfile}
            alt="Profile"
            className="w-20 h-20 border-4 border-[#191919] rounded-full ml-4 mt-[-30px]"
          />
          <button className="ml-auto bg-transparent border border-gray-400 px-4 py-1 rounded-full text-white text-sm hover:bg-gray-700">
            Edit Profile
          </button>
        </div>

        <div className="mt-2 px-4">
          <h3 className="text-xl font-bold">✨ Alex Josua ✨</h3>
          <p className="text-gray-400">@alexjosua</p>
          <p className="text-gray-300 text-sm mt-1">Fullstack Developer</p>
        </div>

        <div className="mt-4 flex items-center gap-4 px-4 text-sm">
          <span className="font-bold">300</span>
          <span className="text-gray-400">Following</span>
          <span className="font-bold">300</span>
          <span className="text-gray-400">Followers</span>
        </div>
      </div>
    </>
  );
}
