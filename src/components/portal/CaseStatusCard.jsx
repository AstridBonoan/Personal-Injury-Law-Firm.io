export default function CaseStatusCard({ user }) {
  return (
    <div className="border border-warm-dark bg-white p-5" data-testid="case-status-card">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">Case overview</p>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-slate">Client</dt>
          <dd className="font-medium text-navy">{user.name}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate">Case number</dt>
          <dd className="font-medium text-navy">{user.caseNumber}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate">Case type</dt>
          <dd className="font-medium text-navy">{user.caseType}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate">Status</dt>
          <dd className="font-medium text-gold">{user.caseStatus}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate">Assigned attorney</dt>
          <dd className="font-medium text-navy">{user.assignedAttorney}</dd>
        </div>
        <div>
          <dt className="text-xs text-slate">Next appointment</dt>
          <dd className="font-medium text-navy">
            {new Date(user.nextAppointment).toLocaleString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: 'numeric',
              minute: '2-digit',
            })}
          </dd>
        </div>
      </dl>
    </div>
  );
}
