import { Link } from 'react-router-dom';
import Button from './Button';
import { motion } from 'framer-motion';

export default function CTASection({
  title = 'Ready to Discuss Your Situation?',
  subtitle = 'Schedule a free consultation. This demo form does not create an attorney-client relationship.',
  primaryLabel = 'Schedule a Free Consultation',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-warm">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(199,166,90,0.25), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(89,106,130,0.35), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-semibold md:text-5xl"
        >
          {title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-warm/80">{subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryTo} variant="primary">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryTo && (
            <Button to={secondaryTo} variant="secondary">
              {secondaryLabel}
            </Button>
          )}
        </div>
        <p className="mt-6 text-xs text-warm/50">
          <Link to="/faq" className="underline underline-offset-2 hover:text-gold">
            Learn about our demo disclaimers
          </Link>
        </p>
      </div>
    </section>
  );
}
