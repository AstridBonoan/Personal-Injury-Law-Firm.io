import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AttorneyCard({ attorney, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      className="group overflow-hidden border border-warm-dark bg-white"
    >
      <div className="aspect-[3/4] overflow-hidden bg-warm-dark">
        <img
          src={attorney.image}
          alt={`Professional portrait of ${attorney.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-navy">
          <Link to={`/attorneys/${attorney.slug}`} className="hover:text-gold">
            {attorney.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-gold">{attorney.title}</p>
        <p className="mt-3 text-xs text-slate">
          {attorney.yearsExperience} years experience · {attorney.practiceAreas.slice(0, 2).join(', ')}
        </p>
        <Link
          to={`/attorneys/${attorney.slug}`}
          className="mt-4 inline-block text-sm font-semibold text-navy hover:text-gold"
        >
          View profile →
        </Link>
      </div>
    </motion.article>
  );
}
