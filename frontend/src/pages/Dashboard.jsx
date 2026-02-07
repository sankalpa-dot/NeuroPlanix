import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProgressCard from "../components/ProgressCard";
import { useStudy } from "../context/StudyContext";

export default function Dashboard() {
  const { progress } = useStudy();

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 grid grid-cols-3 gap-4">
          <ProgressCard title="Progress" value={`${progress}%`} />
          <ProgressCard title="Streak" value="5 Days" />
          <ProgressCard title="Backlogs" value="2" />
        </div>
      </div>
    </div>
  );
}
