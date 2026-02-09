export default function Internship() {
  const opportunities = [
    { id: 1, title: "Software Engineering Internship", company: "Tech Corp", duration: "3 months" },
    { id: 2, title: "Data Science Internship", company: "AI Solutions", duration: "3 months" },
    { id: 3, title: "Web Development Internship", company: "WebDev Inc", duration: "2 months" },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">🎓 Internship Opportunities</h1>

      <div className="space-y-4">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-colors"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">{opp.title}</h3>
                <p className="text-gray-400">{opp.company}</p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition">
                Apply
              </button>
            </div>
            <p className="text-sm text-gray-500">Duration: {opp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
