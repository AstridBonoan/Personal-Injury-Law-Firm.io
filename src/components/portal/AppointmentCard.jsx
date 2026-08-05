export default function AppointmentCard({ appointment, onRequest }) {
  return (
    <article className="border border-warm-dark bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-navy">{appointment.type}</h3>
          <p className="mt-1 text-sm text-slate">
            {appointment.date} · {appointment.time}
          </p>
          <p className="mt-1 text-sm text-slate">With {appointment.attorney}</p>
        </div>
        <span
          className={`rounded-sm px-2 py-1 text-xs font-semibold uppercase ${
            appointment.status === 'upcoming' ? 'bg-gold/15 text-gold-dark' : 'bg-warm text-slate'
          }`}
        >
          {appointment.status}
        </span>
      </div>
      {appointment.status === 'upcoming' && onRequest && (
        <button
          type="button"
          onClick={onRequest}
          className="mt-4 text-sm font-semibold text-navy hover:text-gold"
        >
          Request change →
        </button>
      )}
    </article>
  );
}
