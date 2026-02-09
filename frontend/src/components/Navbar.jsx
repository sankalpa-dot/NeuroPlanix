import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Subjects", path: "/subjects" },
    { label: "Study Plan", path: "/study-plan" },
    { label: "Tasks", path: "/tasks" },
    { label: "AI Chat", path: "/chat" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-64 right-0 h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50 z-40">
        <div className="h-full px-8 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-gray-300 hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              👤
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 h-14 bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/logo.png"
            alt="NeuroPlanix"
            className="h-8 w-8 rounded-lg"
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%234F46E5' width='100' height='100' rx='16'/%3E%3Ctext x='50' y='65' font-size='60' font-weight='bold' fill='%23fff' text-anchor='middle'%3E𝓝%3C/text%3E%3C/svg%3E";
            }}
          />
          <span className="font-bold text-white text-sm">NeuroPlanix</span>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-300" />
          ) : (
            <Menu className="w-5 h-5 text-gray-300" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bottom-0 bg-slate-900/95 backdrop-blur-md z-40 pt-4 px-4 space-y-2 animate-in fade-in duration-200">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-800/50 hover:text-indigo-400 transition-colors rounded-lg"
            >
              {item.label}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-800 mt-4">
            <button
              onClick={() => {
                navigate("/profile");
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-gray-300 hover:bg-slate-800/50 hover:text-indigo-400 transition-colors rounded-lg"
            >
              Profile
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors rounded-lg"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
