import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-gray-900 text-white p-4 min-h-screen">
      <ul className="space-y-3">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/study-plan">Study Plan</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/ai-chat">AI Chat</Link></li>
        <li><Link to="/internship">Internship</Link></li>
      </ul>
    </div>
  );
}
