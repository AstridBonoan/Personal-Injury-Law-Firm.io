import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

const variants = {
  primary: 'bg-gold text-navy hover:bg-gold-light focus-visible:outline-gold',
  secondary:
    'border border-gold/60 bg-transparent text-gold hover:bg-gold/10 focus-visible:outline-gold',
  navy: 'bg-navy text-warm hover:bg-navy-light focus-visible:outline-gold',
  outline:
    'border border-navy/20 bg-white text-navy hover:border-gold hover:text-navy focus-visible:outline-gold',
  ghost: 'bg-transparent text-navy hover:text-gold',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  ariaLabel,
  disabled = false,
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',
    variants[variant],
    className,
  );

  const content = (
    <motion.span whileHover={{ y: disabled ? 0 : -1 }} whileTap={{ scale: disabled ? 1 : 0.98 }}>
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} disabled={disabled}>
      {content}
    </button>
  );
}
