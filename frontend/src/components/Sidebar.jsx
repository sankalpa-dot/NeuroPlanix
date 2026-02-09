import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [expandedSection, setExpandedSection] = useState(null);

  const menuItems = [
    {
      icon: "📊",
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: "📚",
      label: "Subjects",
      path: "/subjects",
    },
    {
      icon: "🗓️",
      label: "Study Plan",
      path: "/study-plan",
    },
    {
      icon: "✅",
      label: "Tasks",
      path: "/tasks",
    },
    {
      icon: "🧠",
      label: "AI Chat",
      path: "/chat",
    },
    {
      icon: "🎓",
      label: "Internship",
      path: "/internship",
    },
    {
      icon: "🔥",
      label: "Motivation",
      path: "/motivation",
    },
    {
      icon: "👤",
      label: "Profile",
      path: "/profile",
    },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-slate-800/50 flex-col fixed left-0 top-0 z-30">
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-800/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-indigo-500/20">
            <img
              src="/src/assets/logo.png"
              alt="NeuroPlanix"
              className="w-full h-full rounded-lg object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.textContent = "NP";
              }}
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">NeuroPlanix</h1>
            <p className="text-xs text-gray-400">Study Smart</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="w-full group flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:text-indigo-400 transition-all duration-300 hover:bg-indigo-600/10 hover:border-indigo-500/30 border border-transparent"
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              {item.icon}
            </span>
            <span className="font-medium text-sm">{item.label}</span>
            <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800/50 space-y-2">
        <button
          onClick={() => navigate("/")}
          className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors text-sm font-medium border border-red-500/20"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
