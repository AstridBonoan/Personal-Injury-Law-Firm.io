import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollWindowToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** Scroll to top (or hash target) whenever the route changes. */
export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  // Run before paint so footer clicks don't leave the viewport stuck at the bottom.
  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return undefined;
      }
    }

    scrollWindowToTop();

    // Re-assert after Framer Motion page transitions finish (~280ms).
    const frame = requestAnimationFrame(scrollWindowToTop);
    const t1 = window.setTimeout(scrollWindowToTop, 50);
    const t2 = window.setTimeout(scrollWindowToTop, 320);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname, hash, key]);

  useEffect(() => {
    if (!hash) scrollWindowToTop();
  }, [pathname, hash, key]);

  return null;
}
