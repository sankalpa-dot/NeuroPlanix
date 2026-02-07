<<<<<<< HEAD
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
=======
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="bg-white p-4 shadow flex justify-between">
      <h1 className="font-bold text-blue-600">NeuroPlanix</h1>
      <button onClick={logout} className="text-red-600">Logout</button>
    </div>
>>>>>>> bc45777d495299e1a47cc4f12907bc447a7b05f1
  );
}
