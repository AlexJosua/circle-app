import { FaComment, FaHeart } from "react-icons/fa6";
import gambar1 from "../assets/img/media/Albert Einstein.jpeg";
import gambar2 from "../assets/img/media/squidwat2.jpeg";
import gambar3 from "../assets/img/media/deadpool2.jpeg";
import gambar4 from "../assets/img/media/ora.jpeg";
import gambar5 from "../assets/img/media/sparta.jpeg";
import gambar6 from "../assets/img/media/spidey.jpeg";
import gambar7 from "../assets/img/media/rats.jpeg";
import gambar8 from "../assets/img/media/stone.jpeg";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("all");

  const GambarMedia = [
    gambar1,
    gambar2,
    gambar3,
    gambar8,
    gambar6,
    gambar7,
    gambar5,
    gambar4,
  ];

  return (
    <div className=" max-w-screen-lg p-2 mx-auto">
      {/* Profile Header */}
      <div className="bg-[#262626] rounded-lg">
        <div className="relative">
          <div className="h-32 w-full bg-gradient-to-r from-green-300 to-yellow-300 rounded-t-lg"></div>
          <img
            src={gambar1}
            className="rounded-full border-4 border-gray-900 absolute -bottom-11 left-6 w-25"
            alt="Profile"
          />
          <button className="absolute right-6 -bottom-11 bg-gray-700 text-white px-4 py-1 rounded-full text-sm">
            Follow
          </button>
        </div>
        <div className="p-6 pt-12">
          <h1 className="text-2xl font-bold">✨ Albert ✨</h1>
          <p className="text-gray-400">@albert</p>
          <p className="text-gray-300 text-sm mt-1">
            Picked over by the worms, and weird fishes
          </p>
          <p className="text-gray-400 text-sm mt-2">
            <span className="font-bold text-white">291</span> Following{" "}
            <span className="font-bold text-white">23</span> Followers
          </p>
        </div>
      </div>

      {/* Tabs (All Post & Media) */}
      <div className="flex border-b border-gray-700 mt-6">
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "all"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Post
        </button>
        <button
          className={`flex-1 text-center py-2 ${
            activeTab === "media"
              ? "border-b-2 border-green-400 text-white font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("media")}
        >
          Media
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        {activeTab === "all" ? (
          <>
            {/* Post 1 */}
            <div className="bg-[#262626] p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={gambar1}
                  className="rounded-full w-10 h-10"
                  alt="User"
                />
                <div>
                  <h2 className="text-md font-bold">✨ Albert ✨</h2>
                  <p className="text-gray-400 text-sm">@albert • 4h</p>
                </div>
              </div>
              <p className="text-sm mb-2">
                Well beauty is in the eye of the beholder
              </p>
              <div className="flex gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <FaHeart /> 24
                </span>
                <span className="flex items-center gap-1">
                  <FaComment /> 381 Replies
                </span>
              </div>
            </div>

            {/* Post 2 with Image */}
            <div className="bg-[#262626] p-4 rounded-lg mb-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={gambar1}
                  className="rounded-full w-10 h-10"
                  alt="User"
                />
                <div>
                  <h2 className="text-md font-bold">✨ Albert ✨</h2>
                  <p className="text-gray-400 text-sm">@albert • 12h</p>
                </div>
              </div>
              <p className="text-sm mb-2">
                Yg miss menurut gw minum sih. Mango lassi ok aja, mangga
                melimpah tp sisanya yauda, gw punya standar lbh tinggi di
                goodlife 🏾
              </p>
              <img
                src={gambar1}
                className="rounded-lg w-full mb-2"
                alt="Post Media"
              />
              <div className="flex gap-4 text-gray-400 text-sm">
                <span className="flex items-center gap-1">
                  <FaHeart /> 75
                </span>
                <span className="flex items-center gap-1">
                  <FaComment /> 102 Replies
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-gray-400 text-center p-6 grid grid-cols-3 ">
            {GambarMedia.map((hasil, index) => (
              <img
                key={index}
                src={hasil}
                className="rounded-lg w-full border-1 border-yellow-300"
                alt={`Media ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
