import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { useStudy } from "../context/StudyContext";

export default function Tasks() {
  const { tasks, setTasks, completeTask } = useStudy();

  if (tasks.length === 0) {
    setTasks([
      { id: 1, title: "Math Revision", done: false },
      { id: 2, title: "OS Deadlocks", done: false },
    ]);
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-6 space-y-3">
          {tasks.map(t => (
            <TaskCard key={t.id} task={t} onDone={()=>completeTask(t.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
