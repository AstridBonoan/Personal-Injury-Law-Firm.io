import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQAccordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (allowMultiple) {
        return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      }
      return isOpen ? [] : [id];
    });
  };

  return (
    <div className="divide-y divide-warm-dark border-y border-warm-dark" data-testid="faq-accordion">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-heading text-lg font-semibold text-navy md:text-xl">
                  {item.question}
                </span>
                <FiChevronDown
                  className={`shrink-0 text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 pr-8 text-slate leading-relaxed">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
