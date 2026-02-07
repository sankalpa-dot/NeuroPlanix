import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">NeuroPlanix</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/study-plan" className="hover:text-blue-400">Study Plan</Link>
        <Link to="/tasks" className="hover:text-blue-400">Tasks</Link>
        <Link to="/profile" className="hover:text-blue-400">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
