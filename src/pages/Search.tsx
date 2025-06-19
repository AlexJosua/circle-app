export default function Search() {
  return (
    <>
      <div className=" bg-[#1d1d1d] min-h-screen rounded-lg text-white text-center flex flex-col p-2">
        <input
          type="text"
          placeholder="Search your friend"
          className="w-full p-3 rounded-3xl mt-3 bg-[#383838] text-white focus:outline-none"
        />

        <div className="flex-grow flex flex-col justify-center items-center text-gray-400">
          <h2 className="text-lg font-semibold">No results</h2>
          <p className="text-sm mt-2">
            Try searching for something else or check the spelling of what you
            typed.
          </p>
        </div>
      </div>
    </>
  );
}
