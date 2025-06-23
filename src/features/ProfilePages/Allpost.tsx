import { FaComment, FaHeart } from "react-icons/fa6";
import gambar1 from "../../assets/img/media/Albert Einstein.jpeg";

export default function AllPost() {
  return (
    <>
      {/* Post 1 */}
      <div className="bg-[#262626] p-4 rounded-lg mb-4">
        <div className="flex items-center gap-3 mb-3">
          <img src={gambar1} className="rounded-full w-10 h-10" alt="User" />
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
          <img src={gambar1} className="rounded-full w-10 h-10" alt="User" />
          <div>
            <h2 className="text-md font-bold">✨ Albert ✨</h2>
            <p className="text-gray-400 text-sm">@albert • 12h</p>
          </div>
        </div>
        <p className="text-sm mb-2">
          Yg miss menurut gw minum sih. Mango lassi ok aja, mangga melimpah tp
          sisanya yauda, gw punya standar lbh tinggi di goodlife 🏾
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
  );
}
