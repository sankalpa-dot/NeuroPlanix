export default function TaskCard({ task, onDone }) {
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between">
      <span>{task.title}</span>
      {!task.done && (
        <button onClick={onDone} className="text-green-600">Done</button>
      )}
    </div>
  );
}
