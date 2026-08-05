import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import AttorneyCard from '../components/attorneys/AttorneyCard';
import CTASection from '../components/common/CTASection';
import { attorneys } from '../data/attorneys';
import { usePageTitle } from '../hooks';

export default function Attorneys() {
  usePageTitle('Attorneys', 'Meet the fictional attorneys of Hartwell & Pierce Law.');
  const [query, setQuery] = useState('');
  const [area, setArea] = useState('All');

  const areas = useMemo(() => {
    const set = new Set();
    attorneys.forEach((a) => a.practiceAreas.forEach((p) => set.add(p)));
    return ['All', ...Array.from(set).sort()];
  }, []);

  const filtered = attorneys.filter((a) => {
    const matchesQuery =
      !query ||
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.title.toLowerCase().includes(query.toLowerCase());
    const matchesArea = area === 'All' || a.practiceAreas.includes(area);
    return matchesQuery && matchesArea;
  });

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Attorneys</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">Our legal team</h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            Fictional attorney profiles created for this portfolio demonstration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Directory"
            title="Find counsel by focus area"
            subtitle="Search by name or filter by practice concentration."
          />
          <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:min-w-[420px]">
            <label className="sr-only" htmlFor="attorney-search">
              Search attorneys
            </label>
            <input
              id="attorney-search"
              type="search"
              placeholder="Search attorneys…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
              data-testid="attorney-search"
            />
            <label className="sr-only" htmlFor="attorney-area">
              Filter by practice area
            </label>
            <select
              id="attorney-area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="rounded-sm border border-warm-dark bg-white px-3 py-2.5 text-sm"
              data-testid="attorney-filter"
            >
              {areas.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <AttorneyCard key={a.id} attorney={a} index={i} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-8 text-center text-slate">No attorneys match your filters.</p>
        )}
      </section>
      <CTASection />
    </>
  );
}
