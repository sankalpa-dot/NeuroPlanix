import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow">Daily Progress: 60%</div>
          <div className="bg-white p-4 shadow">Study Streak: 5 Days</div>
          <div className="bg-white p-4 shadow">Backlogs: 3</div>
        </div>
      </div>
    </div>
  );
}
