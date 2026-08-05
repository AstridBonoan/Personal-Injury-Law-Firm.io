import { firmInfo } from '../../data/firm';
import { FiAlertTriangle } from 'react-icons/fi';

export default function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <p className="text-xs text-slate leading-relaxed">
        <span className="font-semibold text-ink">Demo notice:</span> {firmInfo.demoNotice}
      </p>
    );
  }

  return (
    <div
      role="note"
      aria-label="Demonstration disclaimer"
      className="border-y border-gold/30 bg-navy text-warm"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 text-sm md:px-6">
        <FiAlertTriangle className="mt-0.5 shrink-0 text-gold" aria-hidden />
        <p className="leading-relaxed text-warm/90">
          <span className="font-semibold text-gold">Fictional Demo Website — </span>
          {firmInfo.demoNotice}
        </p>
      </div>
    </div>
  );
}
