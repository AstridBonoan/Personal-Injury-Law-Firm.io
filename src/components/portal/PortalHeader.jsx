import { Link } from 'react-router-dom';
import { FiBell, FiMenu, FiLogOut } from 'react-icons/fi';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { portalNotifications } from '../../data/portal';
import Modal from '../common/Modal';

export default function PortalHeader({ onMenuClick }) {
  const { user, logout } = useAuth();
  const [openNotifs, setOpenNotifs] = useState(false);
  const unread = portalNotifications.filter((n) => n.unread).length;

  return (
    <header className="flex items-center justify-between border-b border-warm-dark bg-white px-4 py-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-sm p-2 text-navy lg:hidden"
          onClick={onMenuClick}
          aria-label="Open portal menu"
        >
          <FiMenu size={20} />
        </button>
        <div>
          <p className="text-sm text-slate">Welcome back</p>
          <p className="font-heading text-xl font-semibold text-navy">{user.name}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative rounded-sm p-2 text-navy hover:bg-warm"
          aria-label={`Notifications, ${unread} unread`}
          onClick={() => setOpenNotifs(true)}
        >
          <FiBell size={18} />
          {unread > 0 && (
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gold" aria-hidden />
          )}
        </button>
        <Link to="/" className="hidden text-xs text-slate hover:text-gold sm:inline">
          Back to website
        </Link>
        <button
          type="button"
          onClick={logout}
          className="inline-flex items-center gap-1 rounded-sm px-3 py-2 text-sm text-navy hover:bg-warm"
        >
          <FiLogOut aria-hidden />
          Sign out
        </button>
      </div>

      <Modal open={openNotifs} onClose={() => setOpenNotifs(false)} title="Notifications">
        <ul className="space-y-3">
          {portalNotifications.map((n) => (
            <li key={n.id} className="border-b border-warm-dark pb-3 text-sm last:border-0">
              <p className={n.unread ? 'font-semibold text-navy' : 'text-slate'}>{n.text}</p>
              <p className="mt-1 text-xs text-slate">{n.time}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-slate">Demo notifications only — not connected to a real system.</p>
      </Modal>
    </header>
  );
}
