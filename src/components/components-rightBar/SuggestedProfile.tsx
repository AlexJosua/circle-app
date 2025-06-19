import imageProfile from "../../assets/img/me.jpg";

export default function SuggestedProfile() {
  return (
    <>
      <div className="mt-2 bg-[#262626]">
        <h2 className="text-lg font-semibold mb-4">Suggested for you</h2>

        {/* User 1 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={imageProfile}
              alt="Jordan"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold">Jordanioioio</h3>
              <p className="text-gray-400 text-xs">@jordan</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-500 text-gray-400 rounded-full cursor-default">
            Following
          </button>
        </div>

        {/* User 2 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={imageProfile}
              alt="Daniel Eka"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold">Daniel Eka</h3>
              <p className="text-gray-400 text-xs">@daniel</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-800">
            Follow
          </button>
        </div>

        {/* User 3 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={imageProfile}
              alt="Pedro Hufer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold">Pedro Hufer</h3>
              <p className="text-gray-400 text-xs">@pedro</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-800">
            Follow
          </button>
        </div>

        {/* User 4 */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img
              src={imageProfile}
              alt="Jefta Vrendo"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold">Jefta Vrendo</h3>
              <p className="text-gray-400 text-xs">@jefta</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-800">
            Follow
          </button>
        </div>

        {/* User 5 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={imageProfile}
              alt="Ryan Manu"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-sm font-bold">Ryan Manu</h3>
              <p className="text-gray-400 text-xs">@ryan</p>
            </div>
          </div>
          <button className="px-4 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-800">
            Follow
          </button>
        </div>
      </div>
    </>
  );
}
