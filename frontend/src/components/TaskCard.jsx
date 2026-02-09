export default function TaskCard({ title, subject, dueDate, priority, completed }) {
  const priorityColors = {
    High: "bg-red-500/10 text-red-300 border-red-500/30",
    Medium: "bg-yellow-500/10 text-yellow-300 border-yellow-500/30",
    Low: "bg-green-500/10 text-green-300 border-green-500/30",
  };

  return (
    <div
      className={`p-4 rounded-lg border transition-all duration-300 hover:scale-102 ${
        completed
          ? "bg-slate-800/30 border-slate-700/50 opacity-75"
          : "bg-slate-900/50 border-slate-800 hover:border-indigo-500/50"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              defaultChecked={completed}
              className="w-5 h-5 rounded border-slate-700 cursor-pointer"
            />
            <h4
              className={`font-medium ${
                completed ? "line-through text-gray-500" : "text-white"
              }`}
            >
              {title}
            </h4>
          </div>
          <p className="text-sm text-gray-400 mt-2 ml-8">{subject}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className={`text-xs px-2 py-1 rounded border ${priorityColors[priority]}`}>
            {priority}
          </span>
          <span className="text-xs text-gray-400">{dueDate}</span>
        </div>
      </div>
    </div>
  );
}
