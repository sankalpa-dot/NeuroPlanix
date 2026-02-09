export default function Subjects() {
  const subjects = [
    { id: 1, name: "Mathematics", progress: 75 },
    { id: 2, name: "Physics", progress: 60 },
    { id: 3, name: "Chemistry", progress: 82 },
    { id: 4, name: "Biology", progress: 70 },
    { id: 5, name: "English", progress: 88 },
    { id: 6, name: "History", progress: 65 },
  ];

  return (
    <div className="p-8 min-h-screen bg-slate-950">
      <h1 className="text-3xl font-bold mb-6">📚 Subjects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-indigo-500 transition-colors"
          >
            <h2 className="font-semibold text-lg mb-4">{subject.name}</h2>
            <div className="w-full bg-gray-700 h-2 rounded">
              <div
                className="bg-indigo-500 h-2 rounded transition-all"
                style={{ width: `${subject.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-sm mt-2">{subject.progress}% Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}
