import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          Create Account
        </h2>

        <input
          className="input mb-3"
          placeholder="Full Name"
        />

        <input
          className="input mb-3"
          placeholder="Email"
        />

        <input
          className="input mb-4"
          type="password"
          placeholder="Password"
        />

        <button
          className="w-full bg-blue-600 text-white py-2 rounded"
          onClick={() => navigate("/dashboard")}
        >
          Register
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <span
            className="text-blue-600 cursor-pointer ml-1"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
