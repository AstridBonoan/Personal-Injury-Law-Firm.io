import { createContext, useContext, useMemo, useState } from 'react';
import { portalUser } from '../data/portal';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('hp-demo-auth') === 'true';
  });

  const login = (email, password) => {
    const valid =
      email.trim().toLowerCase() === portalUser.email.toLowerCase() &&
      password.trim().toLowerCase() === 'demo';
    if (valid) {
      sessionStorage.setItem('hp-demo-auth', 'true');
      setIsAuthenticated(true);
      return { ok: true };
    }
    return {
      ok: false,
      error: 'Invalid demo credentials. Use alex.rivera@demo.client / demo',
    };
  };

  const logout = () => {
    sessionStorage.removeItem('hp-demo-auth');
    setIsAuthenticated(false);
  };

  const value = useMemo(
    () => ({ isAuthenticated, login, logout, user: portalUser }),
    [isAuthenticated],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
