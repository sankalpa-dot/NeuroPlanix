import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();   

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900">
      <div className="bg-slate-900/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[380px] border border-slate-700">
        <h1 className="text-3xl font-bold mb-1">NeuroPlanix</h1>
        <p className="text-gray-400 mb-6">Smart Study, Better Results</p>

        <input
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Email"
        />
        <input
          className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Password"
          type="password"
        />

        {/* 👇 add onClick navigation here */}
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-lg font-semibold"
        >
          Login
        </button>

        <button className="w-full mt-3 bg-slate-800 hover:bg-slate-700 transition p-3 rounded-lg text-sm">
          Continue with Google
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <span className="text-indigo-400 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}
