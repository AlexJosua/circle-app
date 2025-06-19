import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import imageLogo from "../../assets/img/logo-dumbways.png";

export default function Footer() {
  return (
    <>
      <div className="border-t border-gray-700 pt-1 text-xs">
        <p className="text-gray-400">
          Developed by{" "}
          <span className="font-semibold text-white">Alex Josua</span> •
          <FaGithub className="inline w-3 h-3 mx-1" />
          <FaLinkedin className="inline w-3 h-3 mx-1 text-blue-500" />
          <FaFacebook className="inline w-3 h-3 mx-1 text-blue-600" />
          <FaInstagram className="inline w-3 h-3 mx-1 text-pink-500" />
        </p>
        <p className="text-gray-400 mt-1">
          Powered by DumbWays Indonesia{" "}
          <img src={imageLogo} alt="Logo" className="h-3 inline-block" /> • #1
          Coding Bootcamp
        </p>
      </div>
    </>
  );
}
