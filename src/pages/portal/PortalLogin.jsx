import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { portalUser } from '../../data/portal';
import Button from '../../components/common/Button';
import { usePageTitle } from '../../hooks';

export default function PortalLogin() {
  usePageTitle('Client Portal Login', 'Demo client portal login for Hartwell & Pierce Law.');
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState(portalUser.email);
  const [password, setPassword] = useState('demo');
  const [error, setError] = useState('');

  if (isAuthenticated) return <Navigate to="/client-portal" replace />;

  const onSubmit = (e) => {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) setError(result.error);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy px-4 py-16">
      <div className="w-full max-w-md border border-white/10 bg-warm p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Client Portal</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold text-navy">Sign in (Demo)</h1>
        <p className="mt-2 text-sm text-slate">
          Mock authentication only. No passwords are stored. Use the demo credentials below.
        </p>

        <div className="mt-4 rounded-sm border border-gold/30 bg-gold/10 p-3 text-xs text-navy">
          <p>
            <strong>Email:</strong> {portalUser.email}
          </p>
          <p>
            <strong>Password:</strong> demo
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-6 space-y-4" data-testid="portal-login-form">
          <div>
            <label htmlFor="portal-email" className="mb-1 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="portal-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-sm border border-warm-dark px-3 py-2.5 text-sm"
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="portal-password" className="mb-1 block text-sm font-medium text-ink">
              Password
            </label>
            <input
              id="portal-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-sm border border-warm-dark px-3 py-2.5 text-sm"
              autoComplete="current-password"
            />
          </div>
          {error && (
            <p className="text-sm text-red-700" role="alert">
              {error}
            </p>
          )}
          <Button type="submit" variant="navy" className="w-full">
            Enter demo portal
          </Button>
        </form>

        <p className="mt-6 text-center text-sm">
          <Link to="/" className="text-gold hover:underline">
            ← Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
