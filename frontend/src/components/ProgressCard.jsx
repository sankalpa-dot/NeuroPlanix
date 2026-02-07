const ProgressCard = ({ title, progress }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm mt-1">{progress}% completed</p>
    </div>
  );
};

export default ProgressCard;
