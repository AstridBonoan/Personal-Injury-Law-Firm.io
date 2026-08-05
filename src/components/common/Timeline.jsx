import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export default function Timeline({ steps, interactive = false, activeIndex = 0, onSelect }) {
  return (
    <ol className="relative space-y-0" data-testid="timeline">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isPast = index < activeIndex;
        return (
          <li key={step.id || step.stage || index} className="relative flex gap-5 pb-10 last:pb-0">
            {index < steps.length - 1 && (
              <span
                className={cn(
                  'absolute left-[15px] top-8 h-[calc(100%-16px)] w-px',
                  isPast || isActive ? 'bg-gold' : 'bg-warm-dark',
                )}
                aria-hidden
              />
            )}
            <button
              type="button"
              disabled={!interactive}
              onClick={() => interactive && onSelect?.(index)}
              className={cn(
                'relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold',
                isActive
                  ? 'border-gold bg-gold text-navy'
                  : isPast
                    ? 'border-gold bg-navy text-gold'
                    : 'border-warm-dark bg-white text-slate',
                interactive && 'cursor-pointer hover:border-gold',
              )}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`${step.title || step.stage}${isActive ? ' (current)' : ''}`}
            >
              {index + 1}
            </button>
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pt-0.5"
            >
              <h3 className={cn('font-heading text-xl font-semibold', isActive ? 'text-navy' : 'text-navy/80')}>
                {step.title || step.stage}
              </h3>
              {step.description && <p className="mt-1 text-sm text-slate">{step.description}</p>}
              {step.date && <p className="mt-1 text-xs text-gold">{step.date}</p>}
              {step.current && (
                <span className="mt-2 inline-block text-xs font-semibold uppercase tracking-wider text-gold">
                  Current stage
                </span>
              )}
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
