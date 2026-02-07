const TaskCard = ({ task, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5"
      />
    </div>
  );
};

export default TaskCard;
