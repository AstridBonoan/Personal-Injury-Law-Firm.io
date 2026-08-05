import { useState } from 'react';
import AppointmentCard from '../../components/portal/AppointmentCard';
import Modal from '../../components/common/Modal';
import Button from '../../components/common/Button';
import { portalAppointments } from '../../data/portal';
import { usePageTitle } from '../../hooks';

export default function PortalAppointments() {
  usePageTitle('Appointments', 'Demo appointments interface.');
  const [open, setOpen] = useState(false);
  const upcoming = portalAppointments.filter((a) => a.status === 'upcoming');
  const past = portalAppointments.filter((a) => a.status === 'past');

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-semibold text-navy">Appointments</h1>
          <p className="mt-2 text-sm text-slate">Fictional schedule for the demo client.</p>
        </div>
        <Button onClick={() => setOpen(true)}>Request new appointment</Button>
      </div>

      <h2 className="mt-10 font-heading text-xl text-navy">Upcoming</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {upcoming.map((a) => (
          <AppointmentCard key={a.id} appointment={a} onRequest={() => setOpen(true)} />
        ))}
      </div>

      <h2 className="mt-10 font-heading text-xl text-navy">Past</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {past.map((a) => (
          <AppointmentCard key={a.id} appointment={a} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Request appointment (demo)">
        <p className="text-sm text-slate">
          This form is illustrative only. No appointment request is submitted or stored.
        </p>
        <form
          className="mt-4 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);
            alert('Demo request noted — nothing was sent.');
          }}
        >
          <label className="block text-sm">
            Preferred date
            <input type="date" className="mt-1 w-full border border-warm-dark px-3 py-2" />
          </label>
          <label className="block text-sm">
            Notes
            <textarea rows={3} className="mt-1 w-full border border-warm-dark px-3 py-2" />
          </label>
          <Button type="submit" variant="navy">
            Submit demo request
          </Button>
        </form>
      </Modal>
    </div>
  );
}
