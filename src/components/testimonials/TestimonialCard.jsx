import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ testimonial, active = false }) {
  return (
    <motion.blockquote
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0.55, scale: active ? 1 : 0.98 }}
      className="border border-warm-dark bg-white p-8"
    >
      <div className="mb-4 flex gap-1 text-gold" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FiStar key={i} fill="currentColor" aria-hidden />
        ))}
      </div>
      <p className="font-heading text-xl leading-relaxed text-navy md:text-2xl">
        “{testimonial.quote}”
      </p>
      <footer className="mt-6 text-sm text-slate">
        <cite className="not-italic font-semibold text-ink">{testimonial.name}</cite>
        <span className="mx-2">·</span>
        {testimonial.location}
        <span className="mx-2">·</span>
        {testimonial.caseType}
        <span className="mt-2 block text-xs text-gold">Fictional testimonial for demonstration</span>
      </footer>
    </motion.blockquote>
  );
}
