import { Link, useLocation } from 'react-router-dom';
import { firmInfo, navigation } from '../../data/firm';
import DisclaimerBanner from '../common/DisclaimerBanner';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const location = useLocation();
  if (location.pathname.startsWith('/client-portal')) return null;

  return (
    <footer className="bg-charcoal text-warm/90" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <p className="font-heading text-2xl font-semibold text-warm">Hartwell & Pierce</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">Law</p>
          <p className="mt-4 text-sm leading-relaxed text-warm/70">{firmInfo.tagline}</p>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg text-warm">Explore</h2>
          <ul className="space-y-2 text-sm">
            {navigation.slice(0, 6).map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg text-warm">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" aria-hidden />
              <span>
                {firmInfo.address.street}
                <br />
                {firmInfo.address.city}, {firmInfo.address.state} {firmInfo.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="text-gold" aria-hidden />
              <a href={`tel:${firmInfo.phone}`} className="hover:text-gold">
                {firmInfo.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-gold" aria-hidden />
              <a href={`mailto:${firmInfo.email}`} className="hover:text-gold">
                {firmInfo.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg text-warm">Hours</h2>
          <ul className="space-y-2 text-sm text-warm/70">
            <li>{firmInfo.hours.weekday}</li>
            <li>{firmInfo.hours.saturday}</li>
            <li>{firmInfo.hours.sunday}</li>
          </ul>
          <Link to="/client-portal" className="mt-6 inline-block text-sm text-gold hover:underline">
            Client Portal Demo →
          </Link>
        </div>
      </div>
      <DisclaimerBanner />
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-warm/50 md:px-6">
        © {new Date().getFullYear()} {firmInfo.name} — Fictional demonstration website. All rights
        reserved for portfolio use.
      </div>
    </footer>
  );
}
