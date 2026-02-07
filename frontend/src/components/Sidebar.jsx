import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
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
  );
}
