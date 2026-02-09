export default function Motivation() {
  const quotes = [
    "The expert in anything was once a beginner. - Helen Hayes",
    "Success is not final, failure is not fatal. - Winston Churchill",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Believe it. Build it. - Thomas Fleischmann",
    "Don't watch the clock; do what it does. Keep going.",
  ];

  const stats = [
    { label: "Study Streak", value: "15 Days", emoji: "🔥" },
    { label: "Total Hours", value: "127", emoji: "⏱️" },
    { label: "Subjects Mastered", value: "3", emoji: "🏆" },
    { label: "Tasks Completed", value: "52", emoji: "✅" },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">🔥 Motivation & Stats</h1>

      {/* Quote of the Day */}
      <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 p-6 rounded-xl border border-indigo-500/30 mb-8">
        <p className="text-lg text-white italic">"{quotes[0]}"</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center"
          >
            <div className="text-4xl mb-2">{stat.emoji}</div>
            <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
            <p className="text-2xl font-bold text-indigo-400">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">🏅 Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {["🥇 Gold Achiever", "📚 Bookworm", "⚡ Quick Learner"].map(
            (achievement, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center"
              >
                {achievement}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
