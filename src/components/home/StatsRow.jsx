import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

function AnimatedStat({ value, prefix = '', suffix = '', label }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    Number.isInteger(value) ? Math.round(v).toLocaleString() : v.toFixed(1),
  );
  const [text, setText] = useState('0');

  useEffect(() => {
    motionValue.set(value);
    const unsub = display.on('change', (v) => setText(v));
    return () => unsub();
  }, [value, motionValue, display]);

  return (
    <div className="text-center">
      <p className="font-heading text-4xl font-semibold text-gold md:text-5xl">
        {prefix}
        {text}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-warm/75">{label}</p>
    </div>
  );
}

export default function StatsRow({ stats }) {
  return (
    <section className="bg-navy py-16 text-warm">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 md:px-6 lg:grid-cols-5">
        {stats.slice(0, 5).map((stat) => (
          <AnimatedStat key={stat.id} {...stat} />
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-warm/40">
        All statistics are fictional and for demonstration purposes only.
      </p>
    </section>
  );
}
