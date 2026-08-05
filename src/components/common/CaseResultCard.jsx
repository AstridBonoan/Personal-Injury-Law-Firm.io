import { motion } from 'framer-motion';

export default function CaseResultCard({ result, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-warm-dark bg-white p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">{result.label}</p>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-navy">{result.caseType}</h3>
      <p className="mt-3 text-sm text-slate">{result.scenario}</p>
      <p className="mt-4 font-semibold text-navy">{result.outcome}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate">{result.summary}</p>
    </motion.article>
  );
}
