import { Link, useParams } from 'react-router-dom';
import { practiceAreas } from '../data/practiceAreas';
import FAQAccordion from '../components/common/FAQAccordion';
import Button from '../components/common/Button';
import CTASection from '../components/common/CTASection';
import { usePageTitle } from '../hooks';

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find((a) => a.slug === slug);
  usePageTitle(
    area ? area.title : 'Practice Area',
    area
      ? `${area.title} — educational overview from Hartwell & Pierce Law (demo).`
      : 'Practice area not found',
  );

  if (!area) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl">Practice area not found</h1>
        <Button to="/practice-areas" className="mt-6">
          All practice areas
        </Button>
      </div>
    );
  }

  const faqItems = area.faqs.map((f, i) => ({
    id: i + 1,
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Link to="/practice-areas" className="text-sm text-gold hover:underline">
            ← Practice areas
          </Link>
          <h1 className="mt-4 font-heading text-4xl font-semibold md:text-6xl">{area.title}</h1>
          <p className="mt-4 max-w-3xl text-warm/80">{area.shortDescription}</p>
          <p className="mt-4 text-xs text-warm/50">
            Educational demo content only. Not legal advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <h2 className="font-heading text-3xl text-navy">Overview</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate">{area.overview}</p>

        <h2 className="mt-12 font-heading text-3xl text-navy">Common situations</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {area.commonSituations.map((s) => (
            <li key={s} className="border border-warm-dark bg-white px-4 py-3 text-sm text-slate">
              {s}
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-heading text-3xl text-navy">Legal process overview</h2>
        <ol className="mt-4 space-y-3">
          {area.process.map((step, i) => (
            <li key={step} className="flex gap-3 text-slate">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs text-gold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-heading text-3xl text-navy">FAQ</h2>
        <div className="mt-4 max-w-3xl">
          <FAQAccordion items={faqItems} />
        </div>

        <div className="mt-12 border border-gold/30 bg-warm p-8">
          <h2 className="font-heading text-2xl text-navy">Discuss your situation</h2>
          <p className="mt-2 text-sm text-slate">
            Schedule a free consultation through our demo form. Submitting does not create an
            attorney-client relationship.
          </p>
          <Button to="/contact" className="mt-6">
            Schedule a Free Consultation
          </Button>
        </div>
      </section>
      <CTASection />
    </>
  );
}
