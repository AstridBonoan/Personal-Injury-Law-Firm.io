import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Timeline from '../../components/common/Timeline';

const steps = [
  { id: 1, title: 'Consultation', description: 'Intro call' },
  { id: 2, title: 'Investigation', description: 'Gather evidence' },
  { id: 3, title: 'Resolution', description: 'Close matter' },
];

describe('Case timeline', () => {
  it('highlights the active step and supports interactive selection', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(
      <Timeline steps={steps} interactive activeIndex={1} onSelect={onSelect} />,
    );

    expect(screen.getByRole('button', { name: /investigation \(current\)/i })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /^consultation$/i }));
    expect(onSelect).toHaveBeenCalledWith(0);
  });
});
