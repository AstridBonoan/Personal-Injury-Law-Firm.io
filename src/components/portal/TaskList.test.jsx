import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from '../../components/portal/TaskList';
import { useState } from 'react';

function Harness() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Upload identification', completed: false },
    { id: 2, title: 'Review case documents', completed: true },
  ]);
  return (
    <TaskList
      tasks={tasks}
      onToggle={(id) =>
        setTasks((prev) =>
          prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
        )
      }
    />
  );
}

describe('Task completion', () => {
  it('toggles task completed state', async () => {
    const user = userEvent.setup();
    render(<Harness />);
    const checkbox = screen.getByLabelText(/upload identification/i);
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
