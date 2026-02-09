import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ProgressRing from "../components/ProgressRing";
import ProgressCard from "../components/ProgressCard";

export default function Dashboard() {
  const subjectsProgress = [
    { title: "Mathematics", progress: 78, icon: "📐", color: "indigo" },
    { title: "Physics", progress: 65, icon: "⚛️", color: "emerald" },
    { title: "Chemistry", progress: 82, icon: "🧪", color: "amber" },
  ];

  const streakData = [
    { label: "Current Streak", value: "15 Days", emoji: "🔥" },
    { label: "Total Hours", value: "127 hrs", emoji: "⏱️" },
    { label: "Tasks Completed", value: "52", emoji: "✅" },
  ];

  return (
    <div className="md:ml-64">
      <Navbar />
      <Sidebar />

      {/* Mobile spacing */}
      <div className="md:hidden h-14"></div>

      {/* Background animation */}
      <div className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 p-6 md:p-8">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Welcome Back 👋</h1>
            <p className="text-gray-400">Let's make today productive. Here's your study overview.</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {streakData.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  </div>
                  <div className="text-4xl">{stat.emoji}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Progress & Subjects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Progress Ring */}
            <div className="lg:col-span-1 bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8 flex items-center justify-center">
              <ProgressRing percentage={72} size={140} label="Overall" />
            </div>

            {/* Subject Cards */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-white mb-4">Subject Progress</h2>
              {subjectsProgress.map((subject, idx) => (
                <ProgressCard
                  key={idx}
                  title={subject.title}
                  progress={subject.progress}
                  icon={subject.icon}
                  color={subject.color}
                />
              ))}
            </div>
          </div>

          {/* Recent Tasks Section */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Today's Tasks</h2>

            <div className="space-y-3">
              {[
                { title: "Complete calculus homework", subject: "Math", priority: "High" },
                { title: "Read chapter 3-4", subject: "Physics", priority: "Medium" },
                { title: "Lab report", subject: "Chemistry", priority: "High" },
              ].map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-indigo-500/50 transition-colors"
                >
                  <input type="checkbox" className="w-5 h-5 rounded border-slate-600 cursor-pointer" />
                  <div className="flex-1">
                    <p className="text-white font-medium">{task.title}</p>
                    <p className="text-sm text-gray-400">{task.subject}</p>
                  </div>
                  <span
                    className={`text-xs px-3 py-1 rounded border ${
                      task.priority === "High"
                        ? "bg-red-500/10 text-red-300 border-red-500/30"
                        : "bg-yellow-500/10 text-yellow-300 border-yellow-500/30"
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
