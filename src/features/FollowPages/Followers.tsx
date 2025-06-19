import gambar1 from "../../assets/img/media/Albert Einstein.jpeg";
import gambar2 from "../../assets/img/media/squidwat2.jpeg";
import gambar3 from "../../assets/img/media/deadpool2.jpeg";
import gambar4 from "../../assets/img/media/ora.jpeg";

export default function Followers() {
  const users = [
    {
      name: "albert",
      username: "@albert",
      avatar: gambar1,
    },
    {
      name: "squidwart",
      username: "@wart",
      avatar: gambar2,
    },
    {
      name: "deadpool",
      username: "@dead",
      avatar: gambar3,
    },
    {
      name: "oraaa",
      username: "@ora",
      avatar: gambar4,
    },
  ];
  return (
    <>
      <div className="  min-h-screen p-6 rounded-lg text-white">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-b border-gray-700"
          >
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-400">{user.username}</p>
              </div>
            </div>
            <button className="border border-gray-400 px-4 py-1 rounded-full text-white hover:bg-gray-700">
              Unfollow
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
