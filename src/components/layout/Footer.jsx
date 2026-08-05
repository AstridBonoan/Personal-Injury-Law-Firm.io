import { Link, useLocation } from 'react-router-dom';
import { firmInfo, navigation } from '../../data/firm';
import DisclaimerBanner from '../common/DisclaimerBanner';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function Footer() {
  const location = useLocation();
  if (location.pathname.startsWith('/client-portal')) return null;

  const exploreLinks = navigation.filter((item) => item.path !== '/');
  const mid = Math.ceil(exploreLinks.length / 2);
  const col1 = exploreLinks.slice(0, mid);
  const col2 = exploreLinks.slice(mid);

  return (
    <footer className="bg-charcoal text-warm/90" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Link
            to="/"
            className="inline-block"
            aria-label={`${firmInfo.name} home`}
            onClick={scrollToTop}
          >
            <p className="font-heading text-2xl font-semibold text-warm">Hartwell & Pierce</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">Law</p>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-warm/70">{firmInfo.tagline}</p>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg text-warm">Explore</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <ul className="space-y-2">
              {col1.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-gold" onClick={scrollToTop}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {col2.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-gold" onClick={scrollToTop}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
          <Link
            to="/contact"
            className="mt-4 inline-block text-sm font-semibold text-gold hover:underline"
            onClick={scrollToTop}
          >
            Schedule a consultation →
          </Link>
        </div>
        <div>
          <h2 className="mb-4 font-heading text-lg text-warm">Hours</h2>
          <ul className="space-y-2 text-sm text-warm/70">
            <li>{firmInfo.hours.weekday}</li>
            <li>{firmInfo.hours.saturday}</li>
            <li>{firmInfo.hours.sunday}</li>
          </ul>
          <Link
            to="/client-portal/login"
            className="mt-6 inline-block text-sm text-gold hover:underline"
            onClick={scrollToTop}
          >
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
