import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-3 flex justify-between">
      <h1 className="font-bold text-blue-600">NeuroPlanix</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}
