import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">NeuroPlanix</h1>

      <div className="space-x-4">
        <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/tasks" className="text-gray-600 hover:text-blue-600">
          Tasks
        </Link>
        <Link to="/ai-chat" className="text-gray-600 hover:text-blue-600">
          AI Chat
        </Link>
        <Link to="/" className="text-red-500">
          Logout
        </Link>
      </div>
    </nav>
  );
}
