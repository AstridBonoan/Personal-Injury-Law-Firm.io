import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/helpers';

export default function ResourceCard({ resource }) {
  return (
    <article className="border border-warm-dark bg-white p-6 transition-shadow hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wider text-gold">{resource.category}</p>
      <h3 className="mt-2 font-heading text-xl font-semibold text-navy">
        <Link to={`/resources/${resource.slug}`} className="hover:text-gold">
          {resource.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-slate">{resource.excerpt}</p>
      <p className="mt-4 text-xs text-slate">
        {formatDate(resource.date)} · {resource.readTime} read
      </p>
    </article>
  );
}
