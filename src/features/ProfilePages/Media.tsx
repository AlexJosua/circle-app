import gambar1 from "../../assets/img/media/Albert Einstein.jpeg";
import gambar2 from "../../assets/img/media/squidwat2.jpeg";
import gambar3 from "../../assets/img/media/deadpool2.jpeg";
import gambar4 from "../../assets/img/media/ora.jpeg";
import gambar5 from "../../assets/img/media/sparta.jpeg";
import gambar6 from "../../assets/img/media/spidey.jpeg";
import gambar7 from "../../assets/img/media/rats.jpeg";
import gambar8 from "../../assets/img/media/stone.jpeg";

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

export default function Media() {
  return (
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
  );
}
