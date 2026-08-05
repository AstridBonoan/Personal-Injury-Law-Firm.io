import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PracticeAreas from './PracticeAreas';

describe('Practice area filtering', () => {
  it('filters practice areas when a category is selected', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <PracticeAreas />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('practice-grid').children.length).toBeGreaterThan(5);
    await user.click(screen.getByTestId('filter-Car Accidents'));
    expect(screen.getByTestId('practice-grid').children).toHaveLength(1);
    expect(screen.getByRole('heading', { name: /car accidents/i })).toBeInTheDocument();
  });
});
