import Footer from "./components-rightBar/Footer";
import SuggestedProfile from "./components-rightBar/SuggestedProfile";
import UserProfile from "./components-rightBar/UserProfile";

export default function RightBar() {
  return (
    <div className="fixed right-0 top-0 h-screen w-1/5 flex flex-col justify-between max-w-md bg-[#1d1d1d] text-white p-2 shadow-lg border-l-1 border-l-gray-500">
      <UserProfile />
      <SuggestedProfile />
      <Footer />
    </div>
  );
}
