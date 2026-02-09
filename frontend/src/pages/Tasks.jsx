export default function Tasks() {
  const tasks = [
    { id: 1, title: "Complete Math Chapter 5", subject: "Mathematics", dueDate: "Feb 12", priority: "High", completed: false },
    { id: 2, title: "Physics Lab Report", subject: "Physics", dueDate: "Feb 14", priority: "High", completed: false },
    { id: 3, title: "Chemistry Notes", subject: "Chemistry", dueDate: "Feb 15", priority: "Medium", completed: true },
    { id: 4, title: "Biology Diagram Practice", subject: "Biology", dueDate: "Feb 16", priority: "Low", completed: false },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">✅ Tasks</h1>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 rounded-lg border transition-all ${
              task.completed
                ? "bg-slate-800/50 border-slate-700 opacity-75"
                : "bg-slate-900 border-slate-800 hover:border-indigo-500"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <input type="checkbox" defaultChecked={task.completed} className="mr-4" />
                <span className={`${task.completed ? "line-through text-gray-500" : "text-white"}`}>
                  {task.title}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-400">{task.subject}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  task.priority === "High" ? "bg-red-500/20 text-red-300" :
                  task.priority === "Medium" ? "bg-yellow-500/20 text-yellow-300" :
                  "bg-green-500/20 text-green-300"
                }`}>
                  {task.priority}
                </span>
                <span className="text-sm text-gray-400">{task.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
