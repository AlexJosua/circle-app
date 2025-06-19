import gambar1 from "../../assets/img/media/rats.jpeg";
import gambar2 from "../../assets/img/media/sparta.jpeg";
import gambar3 from "../../assets/img/media/spidey.jpeg";
import gambar4 from "../../assets/img/media/stone.jpeg";

export default function Unfollowers() {
  const users = [
    {
      name: "rats",
      username: "@rats",
      avatar: gambar1,
    },
    {
      name: "sparta",
      username: "@sparta",
      avatar: gambar2,
    },
    {
      name: "spiderman",
      username: "@spidey",
      avatar: gambar3,
    },
    {
      name: "stone",
      username: "@stone",
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
              Follow
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
