import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function AIChat() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6">
          <input className="input" placeholder="Ask your doubt..." />
        </div>
      </div>
    </div>
  );
}
