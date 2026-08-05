import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import ResourceCard from '../components/common/ResourceCard';
import CTASection from '../components/common/CTASection';
import { resources, resourceCategories } from '../data/resources';
import { usePageTitle } from '../hooks';

export default function Resources() {
  usePageTitle('Resources', 'Legal education resources from Hartwell & Pierce Law (demo).');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = category === 'All' || r.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.excerpt.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Resources</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Legal education center
          </h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            Fictional educational articles for demonstration. Not legal advice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row">
          <label className="sr-only" htmlFor="resource-search">
            Search resources
          </label>
          <input
            id="resource-search"
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm md:max-w-md"
            data-testid="resource-search"
          />
          <label className="sr-only" htmlFor="resource-category">
            Filter by category
          </label>
          <select
            id="resource-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
            data-testid="resource-category"
          >
            {resourceCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <SectionHeading
          eyebrow="Articles"
          title={`${filtered.length} resource${filtered.length === 1 ? '' : 's'}`}
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-testid="resource-grid">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-slate">No resources match your search.</p>
        )}
      </section>
      <CTASection />
    </>
  );
}
