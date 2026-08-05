import Timeline from '../../components/common/Timeline';
import { caseTimeline } from '../../data/portal';
import { usePageTitle } from '../../hooks';

export default function PortalProgress() {
  usePageTitle('Case Progress', 'Demo case progress timeline.');
  const activeIndex = caseTimeline.findIndex((s) => s.current);

  return (
    <div>
      <h1 className="font-heading text-3xl font-semibold text-navy">Case progress</h1>
      <p className="mt-2 text-sm text-slate">
        Visual timeline of your fictional matter. Current stage is highlighted.
      </p>
      <div className="mt-8 max-w-xl">
        <Timeline steps={caseTimeline} activeIndex={activeIndex >= 0 ? activeIndex : 0} />
      </div>
    </div>
  );
}
