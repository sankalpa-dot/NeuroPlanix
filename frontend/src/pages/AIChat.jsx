export default function AIChat() {
  return (
    <div className="p-8 min-h-screen bg-slate-950 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">AI Study Assistant</h1>

      <div className="flex-1 bg-slate-900 rounded-xl p-4 mb-4 overflow-y-auto space-y-3">
        <div className="text-right">
          <span className="inline-block bg-indigo-600 px-4 py-2 rounded-lg">
            Explain Newton’s Third Law
          </span>
        </div>
        <div>
          <span className="inline-block bg-slate-800 px-4 py-2 rounded-lg text-gray-200">
            For every action, there is an equal and opposite reaction...
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-3 rounded-lg bg-slate-800 outline-none"
          placeholder="Ask something..."
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 px-6 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
