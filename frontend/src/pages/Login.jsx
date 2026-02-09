import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 1200);
  };

  const recentLogins = [
    { id: 1, name: "Zion Squid", initials: "ZS", color: "bg-pink-100" },
    { id: 2, name: "Molly Wells", initials: "MW", color: "bg-blue-100" },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4" style={{ background: '#f3f3f3' }}>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Welcome back
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Join the world's largest community
          </p>
        </div>

        {/* Recent Logins */}
        <div className="space-y-4">
          <h2 className="text-base font-semibold text-gray-900">Recent logins</h2>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
            {recentLogins.map((login) => (
              <div key={login.id} className="flex flex-col items-center gap-2">
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 ${login.color} rounded-full flex items-center justify-center relative`}
                >
                  <span className="text-sm sm:text-base font-semibold text-gray-700">
                    {login.initials}
                  </span>
                  <div className="absolute top-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full border border-white flex items-center justify-center">
                    <span className="text-white text-xs">×</span>
                  </div>
                </div>
                <span className="text-xs text-gray-700 text-center font-medium">
                  {login.name}
                </span>
              </div>
            ))}

            {/* Add Account Button */}
            <div className="flex flex-col items-center gap-2">
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl transition"
                title="Add Account"
              >
                +
              </button>
              <span className="text-xs text-gray-700 text-center font-medium">
                Add Account
              </span>
            </div>

            {/* Help Button */}
            <div className="flex flex-col items-center gap-2">
              <button
                className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-2xl sm:text-3xl transition"
                title="Help"
              >
                ▶
              </button>
              <span className="text-xs text-gray-700 text-center font-medium">
                <a href="#" className="text-blue-600 underline">
                  Help
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-3 bg-white text-gray-600 font-medium text-sm">
              or
            </span>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Input */}
          <div>
            <input
              id="email"
              type="email"
              placeholder="Phone number, username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-600 hover:text-gray-900"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-2.5 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-xs text-red-700">{error}</p>
            </div>
          )}

          {/* Remember & Forgot */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-blue-600"
              />
              <span className="text-gray-700">Remember for 30 days</span>
            </label>
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all text-sm flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>

          {/* Create Account Button */}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="w-full py-2.5 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all text-sm"
          >
            Create New Account
          </button>
        </form>

        {/* Social Login */}
        <div className="space-y-2.5">
          <p className="text-center text-xs text-gray-600">
            Or continue with
          </p>
          <div className="flex justify-center gap-2.5">
            <button
              type="button"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
              title="Google"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            <button
              type="button"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition text-white"
              title="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              type="button"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gray-900 hover:bg-black flex items-center justify-center transition text-white"
              title="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M17 15l.001-.001" />
              </svg>
            </button>
          </div>
        </div>

        {/* Terms */}
        <p className="text-center text-xs text-gray-600 leading-relaxed">
          By clicking Sign In below, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policies
          </a>
        </p>
      </div>
    </div>
  );
}
