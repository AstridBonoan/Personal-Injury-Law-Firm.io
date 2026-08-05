import { useScrollProgress } from '../../hooks';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed left-0 top-0 z-[70] h-0.5 w-full bg-transparent"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Page scroll progress"
    >
      <div className="h-full bg-gold transition-[width] duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}
