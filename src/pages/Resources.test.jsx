import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Resources from './Resources';

describe('Resource search', () => {
  it('filters resources by search query', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>,
    );

    const input = screen.getByTestId('resource-search');
    await user.type(input, 'client portal');
    expect(screen.getByTestId('resource-grid').children.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/using a client portal effectively/i)).toBeInTheDocument();
  });
});
