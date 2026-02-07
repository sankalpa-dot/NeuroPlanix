import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 space-y-3">
          <TaskCard task="Math Revision" />
          <TaskCard task="OS Notes" />
        </div>
      </div>
    </div>
  );
}
