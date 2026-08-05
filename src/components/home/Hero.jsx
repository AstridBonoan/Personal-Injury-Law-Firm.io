import { motion } from 'framer-motion';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-navy text-warm">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=1200&fit=crop&auto=format"
        alt="Professional law office interior with natural light"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-semibold tracking-wide text-gold md:text-4xl lg:text-5xl"
        >
          Hartwell & Pierce Law
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-tight text-warm md:text-5xl lg:text-6xl"
        >
          Fighting for the People Who Need Us Most.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-warm/80 md:text-lg"
        >
          A modern personal injury practice built on trust, clarity, and careful advocacy for
          individuals and families after serious accidents.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.55 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button to="/contact" variant="primary">
            Schedule a Free Consultation
          </Button>
          <Button to="/practice-areas" variant="secondary">
            Explore Our Practice Areas
          </Button>
        </motion.div>
        <p className="mt-8 max-w-lg text-xs text-warm/50">
          Fictional demonstration website. Does not provide legal advice.
        </p>
      </div>
    </section>
  );
}
