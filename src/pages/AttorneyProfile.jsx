import { Link, useParams } from 'react-router-dom';
import { attorneys } from '../data/attorneys';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import { usePageTitle } from '../hooks';

export default function AttorneyProfile() {
  const { slug } = useParams();
  const attorney = attorneys.find((a) => a.slug === slug);
  usePageTitle(
    attorney ? attorney.name : 'Attorney',
    attorney
      ? `${attorney.name}, ${attorney.title} at Hartwell & Pierce Law (fictional demo).`
      : 'Attorney not found',
  );

  if (!attorney) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl text-navy">Attorney not found</h1>
        <Button to="/attorneys" className="mt-6">
          Back to attorneys
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-navy py-16 text-warm">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[280px_1fr] md:px-6">
          <img
            src={attorney.image}
            alt={`Portrait of ${attorney.name}`}
            className="aspect-[3/4] w-full object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Attorney Profile · Demo</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold md:text-5xl">{attorney.name}</h1>
            <p className="mt-2 text-lg text-gold">{attorney.title}</p>
            <p className="mt-2 text-sm text-warm/70">{attorney.availability}</p>
            <p className="mt-6 max-w-2xl leading-relaxed text-warm/85">{attorney.bio}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary">
                Request consultation
              </Button>
              <Button to="/attorneys" variant="secondary">
                All attorneys
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-3 md:px-6">
        <div className="border border-warm-dark bg-white p-6">
          <h2 className="font-heading text-xl text-navy">Practice areas</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            {attorney.practiceAreas.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
        </div>
        <div className="border border-warm-dark bg-white p-6">
          <h2 className="font-heading text-xl text-navy">Education</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            {attorney.education.map((e) => (
              <li key={e}>· {e}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate">{attorney.yearsExperience} years of experience</p>
        </div>
        <div className="border border-warm-dark bg-white p-6">
          <h2 className="font-heading text-xl text-navy">Bar admissions</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            {attorney.barAdmissions.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate">
            Contact:{' '}
            <a href={`mailto:${attorney.email}`} className="text-gold hover:underline">
              {attorney.email}
            </a>
          </p>
        </div>
      </section>
      <p className="px-4 pb-8 text-center text-xs text-slate md:px-6">
        Fictional attorney profile for demonstration.{' '}
        <Link to="/faq" className="text-gold hover:underline">
          Read disclaimers
        </Link>
      </p>
      <CTASection />
    </>
  );
}
