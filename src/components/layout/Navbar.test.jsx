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

  it('opens mobile menu with navigation links to each page', async () => {
    const user = userEvent.setup();
    renderNavbar();
    await user.click(screen.getByRole('button', { name: /open menu/i }));
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i });
    expect(mobileNav).toBeInTheDocument();
    expect(within(mobileNav).getByRole('link', { name: /^about$/i })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(within(mobileNav).getByRole('link', { name: /^attorneys$/i })).toHaveAttribute(
      'href',
      '/attorneys',
    );
    expect(within(mobileNav).getByRole('link', { name: /^practice areas$/i })).toHaveAttribute(
      'href',
      '/practice-areas',
    );
    expect(within(mobileNav).getByRole('link', { name: /^case results$/i })).toHaveAttribute(
      'href',
      '/case-results',
    );
    expect(within(mobileNav).getByRole('link', { name: /^how it works$/i })).toHaveAttribute(
      'href',
      '/how-it-works',
    );
    expect(within(mobileNav).getByRole('link', { name: /^resources$/i })).toHaveAttribute(
      'href',
      '/resources',
    );
    expect(within(mobileNav).getByRole('link', { name: /^faq$/i })).toHaveAttribute('href', '/faq');
    expect(within(mobileNav).getByRole('link', { name: /^contact$/i })).toHaveAttribute(
      'href',
      '/contact',
    );
    expect(within(mobileNav).getByRole('link', { name: /client portal/i })).toHaveAttribute(
      'href',
      '/client-portal/login',
    );
  });
});
