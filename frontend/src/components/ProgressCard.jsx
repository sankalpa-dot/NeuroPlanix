export default function ProgressCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md">
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}
