import TaskList from '../../components/portal/TaskList';
import { portalTasks } from '../../data/portal';
import { useLocalStorage } from '../../hooks';
import { usePageTitle } from '../../hooks';

export default function PortalTasks() {
  usePageTitle('Tasks', 'Demo client task list.');
  const [tasks, setTasks] = useLocalStorage('hp-demo-tasks', portalTasks);

  const onToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-navy">Tasks</h1>
      <p className="mt-2 text-sm text-slate">
        {completed} of {tasks.length} completed · Progress saved locally in this browser for the
        demo.
      </p>
      <div className="mt-6 max-w-xl">
        <TaskList tasks={tasks} onToggle={onToggle} />
      </div>
    </div>
  );
}
