export default function Internship() {
  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-2xl font-bold mb-6">Internship & Career Guide</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="font-semibold mb-2">Suggested Roles</h2>
          <ul className="text-gray-300 space-y-1">
            <li>✅ Data Science Intern</li>
            <li>✅ AI Research Intern</li>
          </ul>
        </div>

        <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
          <h2 className="font-semibold mb-2">Project Ideas</h2>
          <ul className="text-gray-300 space-y-1">
            <li>🔹 Recommendation System</li>
            <li>🔹 Sentiment Analysis Tool</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
