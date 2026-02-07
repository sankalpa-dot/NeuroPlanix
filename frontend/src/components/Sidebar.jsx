import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
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
  );
}
