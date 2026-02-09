export default function ProgressCard({ title, progress, icon, color = "indigo" }) {
  const colorMap = {
    indigo: "from-indigo-600/20 to-purple-600/20 border-indigo-500/30",
    emerald: "from-emerald-600/20 to-teal-600/20 border-emerald-500/30",
    amber: "from-amber-600/20 to-orange-600/20 border-amber-500/30",
    rose: "from-rose-600/20 to-pink-600/20 border-rose-500/30",
  };

  const progressBarColor = {
    indigo: "bg-indigo-500",
    emerald: "bg-emerald-500",
    amber: "bg-amber-500",
    rose: "bg-rose-500",
  };

  return (
    <div className={`bg-gradient-to-br ${colorMap[color]} backdrop-blur-sm border rounded-xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white">{progress}%</h3>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>

      <div className="w-full bg-slate-800/50 h-2 rounded-full overflow-hidden border border-slate-700/50">
        <div
          className={`h-full ${progressBarColor[color]} transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
