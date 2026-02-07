import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/study-plan">Study Plan</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/ai-chat">AI Chat</Link></li>
        <li><Link to="/internship">Internship</Link></li>
      </ul>
    </aside>
  );
}
