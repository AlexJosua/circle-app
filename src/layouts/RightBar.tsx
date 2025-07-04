import Footer from "@/components/components-rightBar/Footer";
import SuggestedProfile from "@/components/components-rightBar/SuggestedProfile";
import UserProfile from "@/components/components-rightBar/UserProfile";
import { useLocation } from "react-router-dom";

export default function RightBar() {
  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  return (
    <div className="fixed right-0 top-0 h-screen w-1/5 flex flex-col justify-between max-w-md bg-[#1d1d1d] text-white p-2 shadow-lg border-l-1 border-l-gray-500">
      <div className="flex flex-col gap-3">
        {!isProfilePage && <UserProfile />}
        <SuggestedProfile />
      </div>
      <Footer />
    </div>
  );
}
