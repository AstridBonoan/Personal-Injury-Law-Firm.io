import { useMemo, useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import PracticeAreaCard from '../components/practiceAreas/PracticeAreaCard';
import CTASection from '../components/common/CTASection';
import Button from '../components/common/Button';
import { practiceAreas } from '../data/practiceAreas';
import { questionnaireSteps } from '../data/questionnaire';
import { usePageTitle } from '../hooks';
import { Link } from 'react-router-dom';

export default function PracticeAreas() {
  usePageTitle('Practice Areas', 'Personal injury practice areas — Hartwell & Pierce Law demo.');
  const [filter, setFilter] = useState('All');
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAreas, setSelectedAreas] = useState([]);

  const titles = useMemo(() => ['All', ...practiceAreas.map((a) => a.title)], []);
  const filtered =
    filter === 'All' ? practiceAreas : practiceAreas.filter((a) => a.title === filter);

  const onQuizSelect = (option) => {
    if (quizStep === 0 && option.areas) {
      setSelectedAreas(option.areas);
    }
    if (quizStep < questionnaireSteps.length - 1) {
      setQuizStep((s) => s + 1);
    } else {
      setQuizStep(questionnaireSteps.length);
    }
  };

  const suggested = practiceAreas.filter((a) => selectedAreas.includes(a.id));

  return (
    <>
      <section className="bg-navy py-20 text-warm">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Practice Areas</p>
          <h1 className="mt-3 font-heading text-4xl font-semibold md:text-6xl">
            Focused personal injury advocacy
          </h1>
          <p className="mt-4 max-w-2xl text-warm/75">
            Educational overviews only — not personalized legal advice.
          </p>
          <Button
            className="mt-8"
            variant="secondary"
            onClick={() => {
              setQuizOpen(true);
              setQuizStep(0);
              setSelectedAreas([]);
            }}
          >
            Find Your Practice Area
          </Button>
        </div>
      </section>

      {quizOpen && (
        <section className="border-b border-warm-dark bg-white py-12" data-testid="practice-quiz">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <SectionHeading
              eyebrow="Interactive Guide"
              title="Find your practice area"
              subtitle="A short demo questionnaire to suggest relevant pages. Not legal advice."
            />
            {quizStep < questionnaireSteps.length ? (
              <>
                <h3 className="font-heading text-2xl text-navy">
                  {questionnaireSteps[quizStep].question}
                </h3>
                <div className="mt-6 grid gap-3">
                  {questionnaireSteps[quizStep].options.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => onQuizSelect(opt)}
                      className="border border-warm-dark px-4 py-3 text-left text-sm text-navy hover:border-gold"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <h3 className="font-heading text-2xl text-navy">Suggested areas</h3>
                <ul className="mt-4 space-y-2">
                  {(suggested.length ? suggested : practiceAreas.slice(0, 3)).map((a) => (
                    <li key={a.id}>
                      <Link to={`/practice-areas/${a.slug}`} className="text-gold hover:underline">
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6" variant="outline" onClick={() => setQuizOpen(false)}>
                  Close guide
                </Button>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter practice areas">
          {titles.map((title) => (
            <button
              key={title}
              type="button"
              onClick={() => setFilter(title)}
              className={`rounded-sm px-3 py-1.5 text-sm ${
                filter === title ? 'bg-navy text-warm' : 'bg-white text-navy border border-warm-dark'
              }`}
              data-testid={`filter-${title}`}
            >
              {title}
            </button>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="practice-grid">
          {filtered.map((area, i) => (
            <PracticeAreaCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
