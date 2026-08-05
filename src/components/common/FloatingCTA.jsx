import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 md:flex"
        >
          <Link
            to="/contact"
            className="rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-lg hover:bg-gold-light"
          >
            Schedule a Free Consultation
          </Link>
          <button
            type="button"
            aria-label="Dismiss consultation button"
            onClick={() => setDismissed(true)}
            className="rounded-sm bg-navy p-2 text-warm shadow-lg hover:bg-navy-light"
          >
            <FiX />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
