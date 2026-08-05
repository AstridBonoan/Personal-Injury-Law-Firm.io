import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import AttorneyCard from '../components/attorneys/AttorneyCard';
import { aboutContent } from '../data/content';
import { attorneys } from '../data/attorneys';
import { usePageTitle } from '../hooks';
import { motion } from 'framer-motion';

export default function About() {
  usePageTitle('About', 'Learn about Hartwell & Pierce Law — a fictional personal injury firm demo.');

  return (
    <>
      <section className="relative overflow-hidden bg-navy py-24 text-warm">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=700&fit=crop&auto=format"
          alt="Modern city buildings representing professional excellence"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About</p>
          <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold md:text-6xl">
            A firm built for people facing life-changing injury
          </h1>
          <p className="mt-4 max-w-2xl text-warm/80">
            Hartwell & Pierce Law is a fictional firm created to demonstrate modern legal branding
            and client experience design.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="History" title="Our story" />
        <p className="max-w-3xl text-lg leading-relaxed text-slate">{aboutContent.history}</p>
      </section>

      <section className="bg-warm-dark/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Mission" title="Why we practice" />
          <p className="max-w-3xl font-heading text-2xl leading-relaxed text-navy md:text-3xl">
            {aboutContent.mission}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Values" title="What guides our work" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {aboutContent.values.map((v) => (
            <div key={v.title} className="border border-warm-dark bg-white p-6">
              <h3 className="font-heading text-xl font-semibold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm text-slate">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Approach" title="How we represent clients" light />
          <p className="max-w-3xl text-warm/80 leading-relaxed">{aboutContent.approach}</p>
          <p className="mt-6 max-w-3xl text-warm/80 leading-relaxed">{aboutContent.community}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Affiliations" title="Professional community" />
        <ul className="grid gap-3 md:grid-cols-2">
          {aboutContent.affiliations.map((a) => (
            <li key={a} className="border border-warm-dark bg-white px-5 py-4 text-slate">
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-warm-dark/40 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Milestones" title="Firm timeline" />
          <ol className="relative space-y-8 border-l border-gold/40 pl-8">
            {aboutContent.milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                <p className="text-sm font-semibold text-gold">{m.year}</p>
                <h3 className="font-heading text-xl text-navy">{m.title}</h3>
                <p className="mt-1 text-sm text-slate">{m.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading eyebrow="Leadership" title="Partners & counsel" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.slice(0, 3).map((a, i) => (
            <AttorneyCard key={a.id} attorney={a} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
