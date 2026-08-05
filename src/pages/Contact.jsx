import ConsultationForm from '../components/common/ConsultationForm';
import SectionHeading from '../components/common/SectionHeading';
import { firmInfo } from '../data/firm';
import { usePageTitle } from '../hooks';
import { FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Contact() {
  usePageTitle('Contact', 'Schedule a free consultation with Hartwell & Pierce Law (demo).');

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Schedule a free consultation
          </h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            Submitting this demo form does not create an attorney-client relationship and does not
            store personal information on a server.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] md:px-6">
        <div>
          <SectionHeading
            eyebrow="Consultation Form"
            title="Tell us about your situation"
            subtitle="Please do not enter real sensitive personal information in this demo."
          />
          <ConsultationForm />
        </div>

        <aside className="space-y-6">
          <div className="border border-warm-dark bg-white p-6">
            <h2 className="font-heading text-xl text-navy">Office</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li className="flex gap-2">
                <FiMapPin className="mt-0.5 text-gold" aria-hidden />
                <span>
                  {firmInfo.address.street}
                  <br />
                  {firmInfo.address.city}, {firmInfo.address.state} {firmInfo.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-gold" aria-hidden />
                {firmInfo.phone}
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="text-gold" aria-hidden />
                {firmInfo.email}
              </li>
              <li className="flex gap-2">
                <FiClock className="mt-0.5 text-gold" aria-hidden />
                <span>
                  {firmInfo.hours.weekday}
                  <br />
                  {firmInfo.hours.saturday}
                  <br />
                  {firmInfo.hours.sunday}
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate">
              <strong className="text-navy">Service area:</strong> {firmInfo.serviceArea}
            </p>
          </div>

          <div
            className="flex h-56 items-center justify-center border border-dashed border-slate/40 bg-warm-dark/40 text-center text-sm text-slate"
            role="img"
            aria-label="Map placeholder for Boston office location"
          >
            Map placeholder — 1847 Commonwealth Avenue, Boston, MA
          </div>

          <div className="border border-gold/30 bg-gold/10 p-5 text-xs leading-relaxed text-navy">
            {firmInfo.demoNotice}
          </div>
        </aside>
      </section>
    </>
  );
}
