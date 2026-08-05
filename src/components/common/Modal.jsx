import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({ open, onClose, title, children, labelledBy = 'modal-title' }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4" role="presentation">
          <motion.button
            type="button"
            aria-label="Close dialog backdrop"
            className="absolute inset-0 bg-navy/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            className="relative z-10 w-full max-w-lg rounded-sm border border-warm-dark bg-warm p-6 shadow-xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id={labelledBy} className="font-heading text-2xl font-semibold text-navy">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-sm p-2 text-slate hover:bg-warm-dark hover:text-navy"
                aria-label="Close dialog"
              >
                <FiX size={20} />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
