import { FaComment, FaHeart } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import imageProfile from "../assets/img/me.jpg";

export default function Home() {
  return (
    <>
      <div className=" max-w-screen-lg p-2 mx-auto">
        <h1 className="text-3xl font-bold mb-6 ">Home</h1>

        {/* Input Box */}
        <div className="bg-[#262626] p-5 rounded-lg mb-6 flex items-center justify-between">
          <img
            src={imageProfile}
            className="rounded-full w-10 h-10"
            alt="Profile"
          />
          <input
            type="text"
            placeholder="What is happening?!"
            className="w-full bg-transparent text-white px-3 focus:outline-none"
          />
          <div className="flex items-center gap-2">
            <button className="text-green-500 text-xl">
              <IoImageOutline />
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded-lg">
              Post
            </button>
          </div>
        </div>

        {/* Post 1 */}
        <div className="bg-[#262626] p-5 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={imageProfile}
              className="rounded-full w-16 h-16"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-bold">Indah Pra Karya</h2>
              <p className="text-gray-400 text-md">@indahpra • 4h</p>
            </div>
          </div>
          <p className="text-lg mb-3">
            Kalian pernah ga sih bet on saving? Jadi by calculation sebenernya
            kita ga survive sampai tanggal tertentu...
          </p>
          <div className="flex gap-6 text-gray-400 text-lg">
            <span className="flex items-center gap-2">
              <FaHeart /> 36
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> 381 Replies
            </span>
          </div>
        </div>

        {/* Post 2 */}
        <div className="bg-[#262626] p-5 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={imageProfile}
              className="rounded-full w-16 h-16"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-bold">Mona</h2>
              <p className="text-gray-400 text-md">@mnonarizqa • 17h</p>
            </div>
          </div>
          <p className="text-lg mb-3">
            Pernah nggak dapet dream job terus lama-lama ngerasa lah kok tidak
            sesuai harapan dan jadi fall out of love dengan job tsb?
          </p>
          <div className="flex gap-6 text-gray-400 text-lg">
            <span className="flex items-center gap-2">
              <FaHeart /> 293
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> 381 Replies
            </span>
          </div>
        </div>

        {/* Post 3 */}
        <div className="bg-[#262626] p-5 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={imageProfile}
              className="rounded-full w-16 h-16"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-bold">tuantigabelas</h2>
              <p className="text-gray-400 text-md">@tuantigabelas • 10h</p>
            </div>
          </div>
          <p className="text-lg mb-3">
            Dibanding rekan-rekan media menginterview saya terkait issue yang
            ramai, ada baiknya interview instansi yang ngasih izin...
          </p>
          <div className="flex gap-6 text-gray-400 text-lg">
            <span className="flex items-center gap-2">
              <FaHeart /> 293
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> 381 Replies
            </span>
          </div>
        </div>

        {/* Post 4 */}
        <div className="bg-[#262626] p-5 rounded-lg mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={imageProfile}
              className="rounded-full w-16 h-16"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-bold">Compounding Quality</h2>
              <p className="text-gray-400 text-md">@QCompounding • Jul 25</p>
            </div>
          </div>
          <p className="text-lg mb-3">52 Books you should know:</p>
          <img src={imageProfile} alt="Books" className="rounded-lg w-full" />
          <div className="flex gap-6 text-gray-400 text-lg mt-3">
            <span className="flex items-center gap-2">
              <FaHeart /> 293
            </span>
            <span className="flex items-center gap-2">
              <FaComment /> 381 Replies
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
