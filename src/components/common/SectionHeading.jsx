import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-3xl ${alignClass}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-gold' : 'text-gold-dark'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl ${
          light ? 'text-warm' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? 'text-warm/80' : 'text-slate'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
