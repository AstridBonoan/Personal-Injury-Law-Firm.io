import { within, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';
import { AuthProvider } from '../../hooks/useAuth';

function renderNavbar() {
  return render(
    <AuthProvider>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </AuthProvider>,
  );
}

describe('Navbar', () => {
  it('renders firm brand and consultation CTA', () => {
    renderNavbar();
    expect(screen.getByLabelText(/hartwell & pierce law home/i)).toBeInTheDocument();
    expect(screen.getByText(/hartwell & pierce/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
  });

  it('toggles dark mode', async () => {
    const user = userEvent.setup();
    renderNavbar();
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i });
    await user.click(toggle);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('opens mobile menu with navigation links', async () => {
    const user = userEvent.setup();
    renderNavbar();
    await user.click(screen.getByRole('button', { name: /open menu/i }));
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i });
    expect(mobileNav).toBeInTheDocument();
    expect(within(mobileNav).getByRole('link', { name: /^about$/i })).toBeInTheDocument();
  });
});
