export default function TaskList({ tasks, onToggle }) {
  return (
    <ul className="space-y-2" data-testid="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center gap-3 border border-warm-dark bg-white px-4 py-3">
          <input
            id={`task-${task.id}`}
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
            className="h-4 w-4 accent-[#C7A65A]"
          />
          <label
            htmlFor={`task-${task.id}`}
            className={`text-sm ${task.completed ? 'text-slate line-through' : 'text-navy'}`}
          >
            {task.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
