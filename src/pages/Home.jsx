import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import StatsRow from '../components/home/StatsRow';
import SectionHeading from '../components/common/SectionHeading';
import PracticeAreaCard from '../components/practiceAreas/PracticeAreaCard';
import AttorneyCard from '../components/attorneys/AttorneyCard';
import CaseResultCard from '../components/common/CaseResultCard';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Timeline from '../components/common/Timeline';
import FAQAccordion from '../components/common/FAQAccordion';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import { practiceAreas } from '../data/practiceAreas';
import { attorneys } from '../data/attorneys';
import { caseResults } from '../data/caseResults';
import { testimonials, faqs, statistics, processSteps } from '../data/content';
import { usePageTitle } from '../hooks';
import { AnimatePresence } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const whyUs = [
  'Clear communication without legal jargon overload',
  'Careful case preparation and strategic negotiation',
  'Compassionate guidance through difficult circumstances',
  'Modern client experience tools illustrated in our portal demo',
];

export default function Home() {
  usePageTitle(
    'Home',
    'Hartwell & Pierce Law — fictional personal injury firm demo. Fighting for the people who need us most.',
  );
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [processIndex, setProcessIndex] = useState(0);

  return (
    <>
      <Hero />
      <StatsRow stats={statistics} />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Firm"
              title="Advocacy rooted in clarity and care"
              subtitle="Hartwell & Pierce represents individuals and families after serious accidents with a refined, modern approach to personal injury law."
            />
            <p className="text-slate leading-relaxed">
              We believe injured people deserve sophisticated counsel and a process they can
              understand. This demonstration website showcases how a firm can combine professional
              branding with digital tools that improve transparency.
            </p>
            <Button to="/about" variant="outline" className="mt-6">
              About the firm
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=700&fit=crop&auto=format"
            alt="Professionals in a collaborative meeting"
            className="h-full max-h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-warm-dark/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Practice Areas"
            title="Focused representation across injury matters"
            subtitle="Explore the areas where our fictional attorneys concentrate their advocacy."
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 6).map((area, i) => (
              <PracticeAreaCard key={area.id} area={area} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/practice-areas" variant="navy">
              View all practice areas
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Why Hartwell & Pierce"
          title="A measured approach to high-stakes matters"
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {whyUs.map((item) => (
            <li key={item} className="flex gap-3 border border-warm-dark bg-white p-5 text-slate">
              <FiCheckCircle className="mt-0.5 shrink-0 text-gold" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Attorneys"
            title="Leadership you can trust"
            subtitle="Meet the fictional attorneys featured in this demonstration."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {attorneys.slice(0, 3).map((a, i) => (
              <AttorneyCard key={a.id} attorney={a} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <Button to="/attorneys" variant="secondary">
              Meet the full team
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Case Results"
          title="Demonstration outcomes"
          subtitle="All results below are fictional and labeled for portfolio demonstration only."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseResults.slice(0, 3).map((r, i) => (
            <CaseResultCard key={r.id} result={r} index={i} />
          ))}
        </div>
        <div className="mt-8">
          <Link to="/case-results" className="text-sm font-semibold text-gold hover:underline">
            View all demonstration cases →
          </Link>
        </div>
      </section>

      <section className="bg-warm-dark/40 py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say"
            subtitle="Fictional testimonials created for this demo."
            align="center"
          />
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[testimonialIndex].id}
              testimonial={testimonials[testimonialIndex]}
              active
            />
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.slice(0, 5).map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setTestimonialIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${
                  i === testimonialIndex ? 'bg-gold' : 'bg-slate/30'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How It Works"
              title="A clear path from consultation to resolution"
              subtitle="Select a step to learn more about our interactive process overview."
            />
            <Button to="/how-it-works" variant="outline">
              Explore the full process
            </Button>
          </div>
          <Timeline
            steps={processSteps}
            interactive
            activeIndex={processIndex}
            onSelect={setProcessIndex}
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            subtitle="General educational answers for this fictional firm demo."
            align="center"
          />
          <FAQAccordion items={faqs.slice(0, 6)} />
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-sm font-semibold text-gold hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
