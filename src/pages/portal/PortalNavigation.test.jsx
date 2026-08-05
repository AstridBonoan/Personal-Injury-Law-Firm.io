import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { AuthProvider } from '../../hooks/useAuth';
import PortalLayout from '../../components/portal/PortalLayout';
import PortalDashboard from '../../pages/portal/PortalDashboard';
import PortalTasks from '../../pages/portal/PortalTasks';
import PortalLogin from '../../pages/portal/PortalLogin';

function renderPortalApp(initial = '/client-portal/login') {
  return render(
    <AuthProvider>
      <MemoryRouter initialEntries={[initial]}>
        <Routes>
          <Route path="/client-portal/login" element={<PortalLogin />} />
          <Route path="/client-portal" element={<PortalLayout />}>
            <Route index element={<PortalDashboard />} />
            <Route path="tasks" element={<PortalTasks />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </AuthProvider>,
  );
}

describe('Client portal navigation', () => {
  it('logs in with demo credentials and shows dashboard', async () => {
    const user = userEvent.setup();
    renderPortalApp();
    await user.click(screen.getByRole('button', { name: /enter demo portal/i }));
    expect(await screen.findByTestId('portal-dashboard')).toBeInTheDocument();
    expect(screen.getByText(/HP-2025-1847/i)).toBeInTheDocument();
  });

  it('navigates to tasks from sidebar', async () => {
    const user = userEvent.setup();
    sessionStorage.setItem('hp-demo-auth', 'true');
    renderPortalApp('/client-portal');
    await user.click(screen.getByRole('link', { name: /^tasks$/i }));
    expect(await screen.findByTestId('task-list')).toBeInTheDocument();
    sessionStorage.removeItem('hp-demo-auth');
  });
});
