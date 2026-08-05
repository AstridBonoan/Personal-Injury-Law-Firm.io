import { Link, useParams } from 'react-router-dom';
import { resources } from '../data/resources';
import Button from '../components/common/Button';
import { formatDate } from '../utils/helpers';
import { usePageTitle } from '../hooks';

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = resources.find((r) => r.slug === slug);
  usePageTitle(
    resource ? resource.title : 'Resource',
    resource ? `${resource.title} — Hartwell & Pierce educational demo.` : 'Resource not found',
  );

  if (!resource) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-heading text-3xl">Article not found</h1>
        <Button to="/resources" className="mt-6">
          Back to resources
        </Button>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <Link to="/resources" className="text-sm text-gold hover:underline">
        ← Resources
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold">
        {resource.category}
      </p>
      <h1 className="mt-2 font-heading text-4xl font-semibold text-navy md:text-5xl">
        {resource.title}
      </h1>
      <p className="mt-3 text-sm text-slate">
        {formatDate(resource.date)} · {resource.readTime} read · Demo educational content
      </p>
      <div className="prose mt-8 max-w-none space-y-4 text-slate leading-relaxed">
        {resource.content.split('\n\n').map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      <aside className="mt-10 border border-gold/30 bg-warm p-5 text-sm text-slate">
        This article is fictional educational content for a portfolio demo and does not constitute
        legal advice. No attorney-client relationship is created by reading this page.
      </aside>
    </article>
  );
}
