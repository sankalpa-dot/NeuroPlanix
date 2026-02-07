import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Motivation() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <p className="text-lg font-semibold">
            Keep going! You’re doing great 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
