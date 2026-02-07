import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProgressCard from "../components/ProgressCard";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-3 gap-4">
          <ProgressCard title="Progress" value="60%" />
          <ProgressCard title="Streak" value="5 Days" />
          <ProgressCard title="Backlogs" value="3" />
        </div>
      </div>
    </div>
  );
}
