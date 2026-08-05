import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { firmInfo, navigation, primaryNav } from '../../data/firm';
import Button from '../common/Button';
import { AnimatePresence, motion } from 'framer-motion';

const linkClass = ({ isActive }) =>
  `whitespace-nowrap text-sm font-medium transition-colors hover:text-gold ${
    isActive ? 'text-gold' : 'text-warm/90'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/client-portal');

  if (isPortal) return null;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-warm backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-3 focus:py-2 focus:text-navy"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link to="/" className="group min-w-0 shrink-0" aria-label={`${firmInfo.name} home`}>
          <span className="block font-heading text-xl font-semibold tracking-wide text-warm group-hover:text-gold md:text-2xl">
            Hartwell & Pierce
          </span>
          <span className="block text-[10px] uppercase tracking-[0.22em] text-gold/90">Law</span>
        </Link>

        <nav
          className="hidden items-center gap-x-4 gap-y-1 xl:flex xl:flex-wrap xl:justify-end"
          aria-label="Primary"
        >
          {primaryNav.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden md:block">
            <Button to="/contact" variant="primary" className="!px-4 !py-2 text-xs">
              Free Consultation
            </Button>
          </div>
          <Link
            to="/client-portal/login"
            className="hidden text-xs font-medium text-warm/70 hover:text-gold xl:inline"
          >
            Client Portal
          </Link>
          <button
            type="button"
            className="rounded-sm p-2 text-warm xl:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-navy xl:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col px-4 py-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-3 text-sm ${isActive ? 'text-gold' : 'text-warm'}`
                    }
                    onClick={() => setOpen(false)}
                    end={item.path === '/'}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-white/10 py-3">
                <Link
                  to="/client-portal/login"
                  className="text-sm text-gold"
                  onClick={() => setOpen(false)}
                >
                  Client Portal Demo
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
