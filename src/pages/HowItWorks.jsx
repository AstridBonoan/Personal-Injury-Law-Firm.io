import { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Timeline from '../components/common/Timeline';
import CTASection from '../components/common/CTASection';
import { processSteps } from '../data/content';
import { usePageTitle } from '../hooks';

export default function HowItWorks() {
  usePageTitle('How It Works', 'How the personal injury process works — Hartwell & Pierce demo.');
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">How It Works</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            A clear, guided process
          </h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            Interactive timeline illustrating a typical personal injury matter. Educational demo
            content only.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Interactive Timeline"
              title={processSteps[active].title}
              subtitle={processSteps[active].description}
            />
            <p className="text-sm text-slate">
              Select any step on the timeline to explore that stage. Actual cases vary based on
              facts, injuries, and applicable law.
            </p>
          </div>
          <Timeline
            steps={processSteps}
            interactive
            activeIndex={active}
            onSelect={setActive}
          />
        </div>
      </section>
      <CTASection
        title="Begin with a free consultation"
        subtitle="Start the conversation. This demo does not create an attorney-client relationship."
      />
    </>
  );
}
