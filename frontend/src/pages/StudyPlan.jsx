export default function StudyPlan() {
  const weekPlan = [
    { day: "Monday", subjects: ["Mathematics", "Physics"] },
    { day: "Tuesday", subjects: ["Chemistry", "Biology"] },
    { day: "Wednesday", subjects: ["English", "History"] },
    { day: "Thursday", subjects: ["Mathematics", "Chemistry"] },
    { day: "Friday", subjects: ["Physics", "Biology"] },
    { day: "Saturday", subjects: ["Revision", "Practice Tests"] },
    { day: "Sunday", subjects: ["Rest & Review"] },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">🗓️ Study Plan</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {weekPlan.map((plan, index) => (
          <div
            key={index}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800"
          >
            <h3 className="font-semibold text-lg mb-4">{plan.day}</h3>
            <ul className="space-y-2">
              {plan.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-300">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
