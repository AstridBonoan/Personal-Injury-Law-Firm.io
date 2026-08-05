import SectionHeading from '../components/common/SectionHeading';
import CaseResultCard from '../components/common/CaseResultCard';
import CTASection from '../components/common/CTASection';
import { caseResults } from '../data/caseResults';
import { usePageTitle } from '../hooks';

export default function CaseResults() {
  usePageTitle(
    'Case Results',
    'Fictional demonstration case results from Hartwell & Pierce Law.',
  );

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Case Results</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Demonstration outcomes
          </h1>
          <p className="mt-4 max-w-2xl rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-sm text-warm">
            Every case below is a <strong>Fictional Demonstration Case</strong>. These are not
            actual legal outcomes and should not be interpreted as guarantees or past results.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <SectionHeading
          eyebrow="Showcase"
          title="Sample matters"
          subtitle="Created solely for portfolio and UX demonstration."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseResults.map((r, i) => (
            <CaseResultCard key={r.id} result={r} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
