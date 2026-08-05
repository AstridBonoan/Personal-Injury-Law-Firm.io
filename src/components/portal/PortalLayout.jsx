import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import PortalSidebar from './PortalSidebar';
import PortalHeader from './PortalHeader';

export default function PortalLayout() {
  const { isAuthenticated } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/client-portal/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-warm" data-testid="portal-layout">
      <PortalSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <PortalHeader onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 p-4 md:p-6">
          <div className="mb-4 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-xs text-navy">
            Frontend-only demo portal. Mock authentication · fictional client data · no real
            documents or messages are stored.
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
