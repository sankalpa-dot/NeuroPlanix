import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-6 shadow w-80">
        <h2 className="font-bold text-xl mb-4">Login</h2>
        <input className="w-full border p-2 mb-3" placeholder="Email" />
        <input className="w-full border p-2 mb-4" placeholder="Password" />
        <button
          className="bg-blue-600 text-white w-full p-2"
          onClick={() => navigate("/dashboard")}
        >
          Login
        </button>
      </div>
    </div>
  );
}
