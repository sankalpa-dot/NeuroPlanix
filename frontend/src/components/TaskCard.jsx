export default function TaskCard({ task, onComplete }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center mb-3">
      <span className="text-gray-700">{task}</span>

      <button
        onClick={onComplete}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Done
      </button>
    </div>
  );
}
