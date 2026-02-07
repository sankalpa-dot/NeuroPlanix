import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <ul className="space-y-3">
        <li><Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link></li>
        <li><Link to="/subjects" className="block hover:text-blue-400">Subjects</Link></li>
        <li><Link to="/study-plan" className="block hover:text-blue-400">Study Plan</Link></li>
        <li><Link to="/tasks" className="block hover:text-blue-400">Tasks</Link></li>
        <li><Link to="/internship" className="block hover:text-blue-400">Internships</Link></li>
        <li><Link to="/ai-chat" className="block hover:text-blue-400">AI Chat</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
