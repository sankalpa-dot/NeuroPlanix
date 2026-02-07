import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div className="bg-white p-4 shadow flex justify-between">
      <h1 className="font-bold text-blue-600">NeuroPlanix</h1>
      <button onClick={logout} className="text-red-600">Logout</button>
    </div>
  );
}
