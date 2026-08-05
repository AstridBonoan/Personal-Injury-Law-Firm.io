import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import { faqs } from '../data/content';
import { usePageTitle } from '../hooks';

export default function FAQ() {
  usePageTitle('FAQ', 'Frequently asked questions — Hartwell & Pierce Law demo.');
  const categories = useMemo(() => ['All', ...new Set(faqs.map((f) => f.category))], []);
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? faqs : faqs.filter((f) => f.category === category);

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            General educational answers for this fictional firm. Not individualized legal advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-sm px-3 py-1.5 text-sm ${
                category === c ? 'bg-navy text-warm' : 'border border-warm-dark bg-white text-navy'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <SectionHeading eyebrow="Answers" title={category === 'All' ? 'All topics' : category} />
        <FAQAccordion items={filtered} />
      </section>
      <CTASection />
    </>
  );
}
