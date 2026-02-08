export default function Dashboard() {
  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">Welcome Back 👋</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="font-semibold mb-2">Today's Plan</h2>
          <ul className="text-gray-300 space-y-1">
            <li>📘 Math Revision</li>
            <li>📗 History Notes</li>
            <li>📙 Biology Quiz</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="font-semibold mb-2">Progress</h2>
          <p className="text-sm text-gray-400">Overall Progress: 65%</p>
          <div className="w-full bg-gray-700 h-2 rounded mt-2">
            <div className="bg-emerald-500 h-2 w-[65%] rounded"></div>
          </div>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="font-semibold mb-2">🔥 Study Streak</h2>
          <p className="text-2xl font-bold">15 Days</p>
          <p className="text-gray-400 text-sm">Keep going!</p>
        </div>
      </div>
    </div>
  );
}
