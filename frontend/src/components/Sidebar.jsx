import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
<<<<<<< HEAD
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-lg font-semibold mb-6">Menu</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/subjects" className="hover:text-blue-400">
            Subjects
          </Link>
        </li>
        <li>
          <Link to="/study-plan" className="hover:text-blue-400">
            Study Plan
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="hover:text-blue-400">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/internship" className="hover:text-blue-400">
            Internships
          </Link>
        </li>
      </ul>
    </aside>
=======
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <nav className="space-y-3">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/subjects">Subjects</Link>
        <Link to="/study-plan">Study Plan</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/ai-chat">AI Chat</Link>
        <Link to="/internship">Internship</Link>
      </nav>
    </div>
>>>>>>> bc45777d495299e1a47cc4f12907bc447a7b05f1
  );
}
