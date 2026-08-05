import { NavLink } from 'react-router-dom';
import {
  FiCalendar,
  FiCheckSquare,
  FiFileText,
  FiHome,
  FiMessageSquare,
  FiX,
} from 'react-icons/fi';
import { firmInfo } from '../../data/firm';

const links = [
  { to: '/client-portal', label: 'Dashboard', icon: FiHome, end: true },
  { to: '/client-portal/progress', label: 'Case Progress', icon: FiCheckSquare },
  { to: '/client-portal/documents', label: 'Documents', icon: FiFileText },
  { to: '/client-portal/appointments', label: 'Appointments', icon: FiCalendar },
  { to: '/client-portal/messages', label: 'Messages', icon: FiMessageSquare },
  { to: '/client-portal/tasks', label: 'Tasks', icon: FiCheckSquare },
];

export default function PortalSidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-navy/50 lg:hidden"
          aria-label="Close sidebar backdrop"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-warm-dark bg-navy text-warm transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Client portal navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <div>
            <p className="font-heading text-lg font-semibold">Client Portal</p>
            <p className="text-[10px] uppercase tracking-widest text-gold">Demo Only</p>
          </div>
          <button type="button" className="p-2 lg:hidden" onClick={onClose} aria-label="Close menu">
            <FiX />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-3">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors ${
                  isActive ? 'bg-gold/15 text-gold' : 'text-warm/80 hover:bg-white/5 hover:text-warm'
                }`
              }
            >
              <Icon aria-hidden />
              {label}
            </NavLink>
          ))}
        </nav>
        <p className="mt-auto px-4 py-6 text-xs text-warm/40">{firmInfo.name} · Fictional demo</p>
      </aside>
    </>
  );
}
