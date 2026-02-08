import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-5">
      <h2 className="text-2xl font-bold mb-8">NeuroPlanix</h2>
      <nav className="space-y-3">
        <Link className="block text-gray-300 hover:text-white" to="/dashboard">Dashboard</Link>
        <Link className="block text-gray-300 hover:text-white" to="/tasks">Tasks</Link>
        <Link className="block text-gray-300 hover:text-white" to="/chat">AI Chat</Link>
        <Link className="block text-gray-300 hover:text-white" to="/internship">Internship</Link>
      </nav>
    </div>
  );
}
