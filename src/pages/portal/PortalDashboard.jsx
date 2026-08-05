import { Link } from 'react-router-dom';
import CaseStatusCard from '../../components/portal/CaseStatusCard';
import { useAuth } from '../../hooks/useAuth';
import {
  portalDocuments,
  portalMessages,
  portalTasks,
  portalAppointments,
} from '../../data/portal';
import { usePageTitle } from '../../hooks';

export default function PortalDashboard() {
  usePageTitle('Portal Dashboard', 'Demo client portal dashboard.');
  const { user } = useAuth();
  const openTasks = portalTasks.filter((t) => !t.completed).slice(0, 4);
  const recentMessages = portalMessages.slice(0, 3);
  const recentDocs = portalDocuments.slice(0, 3);
  const nextAppt = portalAppointments.find((a) => a.status === 'upcoming');

  return (
    <div className="space-y-6" data-testid="portal-dashboard">
      <h1 className="font-heading text-3xl font-semibold text-navy">Dashboard</h1>
      <CaseStatusCard user={user} />

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="border border-warm-dark bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-xl text-navy">Outstanding tasks</h2>
            <Link to="/client-portal/tasks" className="text-xs text-gold hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-2 text-sm text-slate">
            {openTasks.map((t) => (
              <li key={t.id}>· {t.title}</li>
            ))}
          </ul>
        </section>

        <section className="border border-warm-dark bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-xl text-navy">Next appointment</h2>
            <Link to="/client-portal/appointments" className="text-xs text-gold hover:underline">
              View all
            </Link>
          </div>
          {nextAppt ? (
            <p className="text-sm text-slate">
              <strong className="text-navy">{nextAppt.type}</strong>
              <br />
              {nextAppt.date} at {nextAppt.time} with {nextAppt.attorney}
            </p>
          ) : (
            <p className="text-sm text-slate">No upcoming appointments.</p>
          )}
        </section>

        <section className="border border-warm-dark bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-xl text-navy">Recent messages</h2>
            <Link to="/client-portal/messages" className="text-xs text-gold hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-3 text-sm">
            {recentMessages.map((m) => (
              <li key={m.id} className="text-slate">
                <span className="font-medium text-navy">{m.from}:</span> {m.body}
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-warm-dark bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-heading text-xl text-navy">Recent documents</h2>
            <Link to="/client-portal/documents" className="text-xs text-gold hover:underline">
              View all
            </Link>
          </div>
          <ul className="space-y-2 text-sm text-slate">
            {recentDocs.map((d) => (
              <li key={d.id}>
                · {d.name} <span className="text-xs">({d.status})</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
