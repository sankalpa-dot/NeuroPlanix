export default function Tasks() {
  const tasks = [
    { title: "Solve Algebra Problems", subject: "Math" },
    { title: "Read History Chapter 4", subject: "History" },
    { title: "Review Biology Notes", subject: "Biology" },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-2xl font-bold mb-6">Today's Tasks</h1>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <div
            key={i}
            className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center justify-between"
          >
            <div>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-400">{task.subject}</p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        ))}
      </div>
    </div>
  );
}
