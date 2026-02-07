export default function TaskCard({ task }) {
  return (
    <div className="bg-white p-3 rounded shadow flex justify-between">
      <span>{task}</span>
      <button className="text-green-600">Done</button>
    </div>
  );
}
